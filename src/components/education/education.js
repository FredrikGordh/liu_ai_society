import React from 'react';
import Nav from "../nav/nav"
import COURSES from "../../static/courses/courses.json"


const Member = () => {

    const sortedCourses = [...COURSES].sort((a, b) => a.area.localeCompare(b.area));
    

    return(
        <div>
            <div class='group_picture col-12' id="img-medlem">
                <Nav/>
            </div>
            <div className="content-below col-12">
           
                <div className="paragraph-1 text-center">
                    <h3 className=''> AI & Machine Learning Courses at LiU</h3>
                    <hr/>
                    <h4 >General AI &  Machine Learning Courses</h4>
                    <div className="tableContainer">
                        <table className="table mx-auto">
                            <thead>
                                <tr>
                                <th>Course Code</th>
                                <th>Name</th>
                                <th>Credits</th>
                                <th>Level</th>
                                <th>Block</th>
                                <th>Electory / Cumpulsive</th>
                                <th>Period</th>
                                <th>Area</th>
                                <th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedCourses.map((item) => (
                                    item.area === "General" || item.area === "Neural Networks"?
                                <tr key={item.course_code}>
                                    <td>{item.course_code}</td>
                                    <td>{item.name}</td>
                                    <td>{item.credits}</td>
                                    <td>{item.level}</td>
                                    <td>{item.block}</td>
                                    <td>{item.choice}</td>
                                    <td>{item.period}</td>
                                    <td>{item.area}</td>
                                    <td><a href={item.link}>Course Link</a></td>
                                </tr>
                                : null
                                ))}
                                
                            </tbody>
                        </table>
                    </div>

                    <div className="tableContainer">
                    <h4>Applied AI & Machine Learning Courses</h4>
                        <table className="table mx-auto">
                            <thead>
                                <tr>
                                <th>Course Code</th>
                                <th>Name</th>
                                <th>Credits</th>
                                <th>Level</th>
                                <th>Block</th>
                                <th>Electory / Cumpulsive</th>
                                <th>Period</th>
                                <th>Area</th>
                                <th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedCourses.map((item) => (
                                    item.area === "Robotics" || item.area === "NLP" || item.area === "Computer Vision" || item.area === "Medtech" ?
                                <tr key={item.course_code}>
                                    <td>{item.course_code}</td>
                                    <td>{item.name}</td>
                                    <td>{item.credits}</td>
                                    <td>{item.level}</td>
                                    <td>{item.block}</td>
                                    <td>{item.choice}</td>
                                    <td>{item.period}</td>
                                    <td>{item.area}</td>
                                    <td><a href={item.link}>Course Link</a></td>
                                </tr>
                                : null
                                ))}
                                
                            </tbody>
                        </table>
                    </div>

                    <div className="tableContainer">
                    <h4>Statistics Courses</h4>
                    <table className="table mx-auto">
                            <thead>
                                <tr>
                                <th>Course Code</th>
                                <th>Name</th>
                                <th>Credits</th>
                                <th>Level</th>
                                <th>Block</th>
                                <th>Electory / Cumpulsive</th>
                                <th>Period</th>
                                <th>Area</th>
                                <th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedCourses.map((item) => (
                                    item.area === "Statistics" ?
                                <tr key={item.course_code}>
                                    <td>{item.course_code}</td>
                                    <td>{item.name}</td>
                                    <td>{item.credits}</td>
                                    <td>{item.level}</td>
                                    <td>{item.block}</td>
                                    <td>{item.choice}</td>
                                    <td>{item.period}</td>
                                    <td>{item.area}</td>
                                    <td><a href={item.link}>Course Link</a></td>
                                </tr>
                                : null
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    
    )
}

export default Member;
