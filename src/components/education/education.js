import React from 'react';
import Nav from "../nav/nav"


const Member = () => {

    const courses = [
        {
            id: 1,
            name: "Introduction to Computer Science",
            link: "https://example.com/course/cs101",
            hp: 5,
            semester: "Spring 2023"
        },
        {
            id: 2,
            name: "Advanced Mathematics",
            link: "https://example.com/course/math401",
            hp: 4,
            semester: "Fall 2023"
        },
        {
            id: 3,
            name: "World Literature",
            link: "https://example.com/course/lit102",
            hp: 3,
            semester: "Spring 2023"
        }
        // ... more courses
    ];

    return(
        <div>
            <div class='group_picture col-12' id="img-medlem">
                <Nav/>
            </div>
            <div className="content-below col-12">
           
                <div className="paragraph-1 text-center">
                    <h3>AI & Machine Learning Courses at LiU</h3>
                     
                    <h4>General AI &  Machine Learning Courses</h4>
                    <div className="tableContainer">
                        <table className="table mx-auto">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Link</th>
                                <th>Credits</th>
                                <th>Semester</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td><a href={item.link}>Course Link</a></td>
                                    <td>{item.hp}</td>
                                    <td>{item.semester}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="tableContainer">
                    <h4>Computer Vision Courses</h4>
                        <table className="table mx-auto">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Link</th>
                                <th>Credits</th>
                                <th>Semester</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td><a href={item.link}>Course Link</a></td>
                                    <td>{item.hp}</td>
                                    <td>{item.semester}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="tableContainer">
                        <h4>Natural Language Processing Courses</h4>
                        <table className="table mx-auto">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Link</th>
                                <th>Credits</th>
                                <th>Semester</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td><a href={item.link}>Course Link</a></td>
                                    <td>{item.hp}</td>
                                    <td>{item.semester}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="tableContainer">
                    <h4>Statistics Courses</h4>
                        <table className="table mx-auto">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Link</th>
                                <th>Credits</th>
                                <th>Semester</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td><a href={item.link}>Course Link</a></td>
                                    <td>{item.hp}</td>
                                    <td>{item.semester}</td>
                                </tr>
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
