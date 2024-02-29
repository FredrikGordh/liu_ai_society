import React from 'react';
import Nav from "../nav/nav"
import COURSES from "../../static/constants/courses.json"
import { useWindowSize } from '../../utils';

const CoursesView = () => {
    const windowSize = useWindowSize();
    const sortedCourses = [...COURSES].sort((a, b) => a.area.localeCompare(b.area));

    const CoursesTable = ({ courses, area, header, tableId, mobile}) => {
        const isCourseInArea = (item) => area.includes(item.area);
      
        return (
          <div className="tableContainer " id={tableId}>
                <h4 className="table_header col-8 mx-auto" >{header}</h4>
            <table className="table mx-auto" id={tableId}>
            <thead > 
            {mobile === "false" ?
            <tr >
                <th>Course Code</th>
                <th>Name</th>
                <th>Credits</th>
                <th>Level</th>
                <th>Block</th>
                <th>Electory / Compulsive</th>
                <th>Period</th>
                <th>Area</th>
                <th>Link</th>
            </tr>
            :
            <tr >
                <th>Course Code</th>
                <th>Name</th>
                <th>Link</th>
            </tr>
            }
            </thead>
              <tbody>
                {courses.filter(isCourseInArea).map((item) => (
                  <tr key={item.course_code} >
                  {mobile === "false" ?
                    <>
                    <td>{item.course_code}</td>
                    <td>{item.name}</td>
                    <td>{item.credits}</td>
                    <td>{item.level}</td>
                    <td>{item.block}</td>
                    <td>{item.choice}</td>
                    <td>{item.period}</td>
                    <td>{item.area}</td>
                    <td><a href={item.link}>Course Link</a></td>
                    </>
                  :
                    <>
                    <td>{item.course_code}</td>
                    <td>{item.name}</td>
                    <td><a href={item.link}>Course Link</a></td>
                    </>
                }      
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      };

    return(
        <div>
            <div class='courses_background col-12'>
                 <Nav/>
                 <div className='img-container row'>
                    <h3 className='courses_headline col-8 '> AI & Machine Learning Courses at LiU</h3>
                </div>
                <i class="fa fa-cogs" aria-hidden="true" id='cogs-icon'></i>
                
            </div> 

            <div className="content-below">

            {windowSize.innerWidth > 1100 ? 
                <div className="courses_container text-center">
                    <CoursesTable 
                        courses={sortedCourses} 
                        area={["General", "Neural Networks"]} 
                        header="General AI & Machine Learning Courses" 
                        tableId="table1"
                        mobile= "false"
                    />
                    <CoursesTable 
                        courses={sortedCourses} 
                        area={["Robotics", "NLP", "Computer Vision", "Medtech"]} 
                        header="Applied AI & Machine Learning Courses" 
                        tableId="table2"
                        mobile= "false"
                    />
                    <CoursesTable 
                        courses={sortedCourses} 
                        area={["Statistics"]} 
                        header="Statistics Courses" 
                        tableId="table3"
                        mobile= "false"
                    />
                </div>
                : 
                <div className="courses_container text-center">
                    <CoursesTable 
                        courses={sortedCourses} 
                        area={["General", "Neural Networks"]} 
                        header="General AI & Machine Learning Courses" 
                        tableId="table1"
                        mobile= "true"
                    />
                    <CoursesTable 
                        courses={sortedCourses} 
                        area={["Robotics", "NLP", "Computer Vision", "Medtech"]} 
                        header="Applied AI & Machine Learning Courses" 
                        tableId="table2"
                        mobile= "true"
                    />
                    <CoursesTable 
                        courses={sortedCourses} 
                        area={["Statistics"]} 
                        header="Statistics Courses" 
                        tableId="table3"
                        mobile= "true"
                    />
                </div>
                }   
            </div>
        </div>  
    )
}
export default CoursesView;
