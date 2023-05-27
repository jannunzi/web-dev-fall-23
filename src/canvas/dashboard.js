/**
 * function that given an array of courses, renders
 * a grid of courses
 */

import React from "react";

function Dashboard() {
  const courses = [
    {
      title: "Web Development",
      code: "CS 5610",
      crn:"202310",
      sem:"Fall 2022"
    },
    {
      title: "Algorithms",
      code: "CS 5800",
      crn:"202311",
      sem:"Fall 2022"
    },
    {
      title: "Database Management",
      code: "CS 5200",
      crn:"202312",
      sem:"Summer 2022"
    },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <hr/>
      <table>
        <tbody>
          <tr>
            
        {courses.map((course, index) => {
          return (
            // <div className="col-sm-4">
            //   <div className="card">
            //     <div className="card-body">
            //       <h5 className="card-title">{course.title}</h5>
            //       <p className="card-text">{course.code}</p>
            //       <a href="#" className="btn btn-primary">
            //         Go somewhere
            //       </a>
            //     </div>
            //   </div>
            // </div>

          <td style={{padding:'5px'}}>
            <img></img>
    <h5 >{course.title}</h5>
                   <p >{course.code}</p>
                   <a href="#" className="btn btn-primary">
                     Go somewhere
                   </a>
                   <br/>
                   <a href="reply.html">Announcements</a>  <a href="retuit.html">Files</a>  <a href="like.html">Discussions</a> <a href="share.html">Assignments</a>
  </td>

          );
        })}
      
        </tr>
        </tbody>
        </table>
      </div>
    
  );
}

export default Dashboard;
