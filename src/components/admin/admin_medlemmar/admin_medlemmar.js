import React, {useState, useEffect}from 'react';
import { getDatabase, ref, onValue, update } from "firebase/database"
import { useNavigate } from 'react-router';
import {Table} from 'react-bootstrap'
import * as XLSX from 'xlsx'



const Admin_home = () => {
    
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[telNumber, setTelNumber] = useState('')
    const[enterDate, setEnterDate] = useState('')
    const[enterTime, setEnterTime] = useState('')
    const[current_dbIndex, setCurrent_dbIndex] =useState('')
    const[tableData, setTableData] = useState([])
    const[excelItems, setExcelItems] = useState([])
    const [searchTerm,setSearchTerm] = useState('')

    const[isLoggedIn, setIsLoggedIn] = useState(false)
    
    const [dispManualSearch,setdispManualSearch] = useState(false)
    const [dispAutomaticSearch,setdispAutomaticSearch] = useState(false)
    const [dispSearchMember,setdispSearchMember] = useState(true)
    
    const navigate= useNavigate()
    const database  =  getDatabase()
    

     useEffect (() => {
        getMembers()
        setIsLoggedIn(localStorage.getItem('isLoggedIn'))
    }, [])

// Adding members manually via the form function
    const addMember_manually = async () => {
        var user_index = current_dbIndex + 1
        update(ref(database, '/members/member_id/' + user_index ), {
        email: email,
        enterDate: enterDate,
        enterTime: enterTime,
        member_id: user_index,
        name: name,
        telNumber: telNumber
        })
    }

    // Adding members automatically via the excel upload function
    // Mapping over each of the data rows in the excelfile
    // then mapping over all the rows in the database searching for duplicates
    // adding all data rows that does not have a duplicate
    const addMembers_file =  async () => {
        
        excelItems.map( (row,index) => {  
            var isDuplicate = false

            if (tableData.length == 0){
                var user_index = current_dbIndex+ index
                update(ref(database, '/members/member_id/' + user_index ), {
                email: row.Meddelande,
                enterDate: row.Transaktionsdatum,
                enterTime: row.Tid,
                member_id: user_index,
                name: row.Avsändarnamn,
                telNumber: row.Avsändarnummer

                })
            }else{
                tableData.map((rowdb) => {
                    if (rowdb.data.name === row.Avsändarnamn) {
                        isDuplicate = true
                        alert("Följande person finns redan i databasen och kommer därför inte att läggas till: " + rowdb.data.name)
                    }
                   
                })

                if(!isDuplicate){
                    var user_index = current_dbIndex+ index
                    update(ref(database, '/members/member_id/' + user_index ), {
                    email: row.Meddelande,
                    enterDate: row.Transaktionsdatum,
                    enterTime: row.Tid,
                    member_id: user_index,
                    name: row.Avsändarnamn,
                    telNumber: row.Avsändarnummer
                    })
                }
            }
        })  
    }
    

    // Handling the event of adding a excelfile
    const handleFileupload = async (e) => {
        const file = e.target.files[0]
        readExcel(file)
        
    }
    // Reading the excelfile and converting the datarows to json objects
    const readExcel = async (file) => {
        const promise = new Promise((resolve,reject) => {

            const fileReader = new FileReader()
            fileReader.readAsArrayBuffer(file)

            fileReader.onload=(e)=>{
                const bufferArray = e.target.result
                const workbook = XLSX.read(bufferArray, {type: 'buffer'})
                const worksheetName = workbook.SheetNames[0]
                const worksheet = workbook.Sheets[worksheetName]
                const data = XLSX.utils.sheet_to_json(worksheet)
                resolve(data)
            }
            fileReader.onerror = (error) => {
                reject(error)                
            }
        })
        promise.then((excelArray) => {
            setExcelItems(excelArray)        
        })
    }

    // Getting all the members from the firebase realtime database
    const getMembers = async () => {        
        const dbRef = ref(database,'/members/member_id')
            onValue(dbRef, (snapshot) => {
                let records = []
                snapshot.forEach(childSnapshot => {
                    let keyName = childSnapshot.key
                    let data = childSnapshot.val()
                    records.push({"key": keyName, "data" : data})
                })
                setTableData(records)
                setCurrent_dbIndex(records.length)
                console.log(isLoggedIn)
            })

    }

    // Functionality for switching between the different member components
    const displayComponents = (displayState) => {
        if (displayState == "manual"){
            setdispManualSearch(true)
            setdispAutomaticSearch(false)
            setdispSearchMember(false)
        }else if(displayState == "automatic"){
            setdispManualSearch(false)
            setdispAutomaticSearch(true)
            setdispSearchMember(false)
        }else if(displayState == "search"){
            setdispManualSearch(false)
            setdispAutomaticSearch(false)
            setdispSearchMember(true)
        }

    }

    
    return(
        <div>
            
            {JSON.parse(localStorage.getItem('isLoggedIn')) ? (
            <div class="admin-medlemmar-container">
                <div class="small-nav row">
                    <nav class="navbar navbar-default navbar-light col-12" role="navigation" id="admin-member-navbar">  
                    <a class="nav-link col-1 hover-overlay " id="nav-link-admin" href="/admin_home"> Tillbaka</a>
                    <h1 class="headline-admin-medlemmar col-10">Hantera medlemmar</h1>
                        <button class="navbar-toggler" id="nav-burger" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon" ></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item" id="nav-item-admin">
                                    <a class="nav-link" id="nav-link-hamburger-admin" onClick={() => displayComponents("manual")}> Lägg till medlem manuellt </a>
                                </li>
                                <li class="nav-item" id="nav-item-admin">
                                    <a class="nav-link" id="nav-link-hamburger-admin" onClick={() => displayComponents("automatic")}>Lägg till medlemmar via excelfil</a>
                                </li>
                                <li class="nav-item" id="nav-item-admin">
                                    <a class="nav-link" id="nav-link-hamburger-admin" onClick={() => displayComponents("search")}>Sök medlem</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <br></br>
                <div>
                    
                    {dispManualSearch ? (
                    <div class="manual-search-container">
                    <h3 class="headline-admin-medlemmar">Lägg till medlem manuellt</h3>
                    
                    <center>
                    <form>
                        
                        <div class="form-group col-6" id="member-form">


                            <label for="name">Namn:</label>
                            <input type="name" 
                            class="form-control" 
                            placeholder="Skriv namn" 
                            onChange={(e) => setName(e.target.value)}
                            id="medlem-namn"/>

                            <label for="email">Email address:</label>
                            <input type="email" 
                            class="form-control" 
                            placeholder="Skriv email" 
                            onChange={(e) => setEmail(e.target.value)}
                            id="medlem-email"/>

                            <label for="telNumber">Telefon nummer:</label>
                            <input type="telNumber" 
                            class="form-control" 
                            placeholder="Skriv telefon nummer" 
                            onChange={(e) => setTelNumber(e.target.value)}
                            id="telNummer"/>

                            <label for="enterDate">Datum:</label>
                            <input type="enterDate" 
                            class="form-control" 
                            placeholder="Skriv datum" 
                            onChange={(e) => setEnterDate(e.target.value)}
                            id="medlem-enterDate"/>

                            <label for="enterTime">Tid:</label>
                            <input type="enterTime" 
                            class="form-control" 
                            placeholder="Skriv tid" 
                            onChange={(e) => setEnterTime(e.target.value)}
                            id="medlem-enterTime"/>
                        </div>

                        <button type="submit" class="btn btn-primary" onClick={addMember_manually}  >Lägg till medlem</button>
                        
                    </form>
                    </center>
                    </div>) : (<div></div>)}
                </div>

                

                {/* <div> */}
                    {dispAutomaticSearch ? (
                    <div>
                        <h3>Lägg till medlemmar via excelfil</h3>
                        <form >
                            <input type="file" onChange={(event) => handleFileupload(event)} />
                            <button type="submit" class="btn btn-primary" onClick={addMembers_file}>Ladda upp</button>
                        </form>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Namn</th>
                                    <th>Email</th>
                                    <th>Telefonnummer</th>
                                    <th>Tillagd datum</th>
                                    <th>Tillagd tid</th>
                                </tr>
                            </thead>

                            <tbody>
                                {excelItems.map((row,index) => (
                                    <tr >
                                        <th>{index}</th>
                                        <th>{row.Avsändarnamn}</th>
                                        <th>{row.Meddelande}</th>
                                        <th>{row.Avsändarnummer}</th>
                                        <th>{row.Transaktionsdatum}</th>
                                        <th>{row.Tid}</th>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    ): (<div></div>)}

                {dispSearchMember ? (
                <div class="memberList-container">
                    <h3 class='headline-admin-medlemmar'>Medlemmar: </h3>
                        <center>
                        <input 
                        type="search"
                        className="search-members"
                        placeholder="Sök namn, LiU-id eller email..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                        >
                        </input>
                        </center>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Namn</th>
                                <th>Email</th>
                                <th>Telefonnummer</th>
                                <th>Tillagd datum</th>
                                <th>Tillagd tid</th>
                            </tr>
                        </thead>

                         <tbody>
                            {/* Filtering data for search bar*/}
                            {tableData.filter((row,index) => {
                                if (searchTerm === ""){
                                    return row
                                } else if(row.data.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return row
                                }else if(row.data.email.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return row
                                }
                                    
                            

                            {/* Displaying data */}
                            }).map((row,index) => {
                                return(
                                <tr>
                                    <td>{index}</td>
                                    <td>{row.data.name}</td>
                                    <td>{row.data.email}</td>
                                    <td>{row.data.telNumber}</td>
                                    <td>{row.data.enterDate}</td>
                                    <td>{row.data.enterTime}</td>
                                </tr>
                                )
                            })
                        }
                        
                        
                        </tbody> 
                    </Table>
                </div>
                ):(<div></div>)}


            </div>
            ):(<div class="restriced-container">
                    <center>
                     <h1>Restriced access</h1>
                    </center>
                </div>)}
        </div>
    )
}

export default Admin_home;

