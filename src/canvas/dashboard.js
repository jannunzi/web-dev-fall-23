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
    },
    {
      title: "Algorithms",
      code: "CS 5800",
    },
    {
      title: "Database Management",
      code: "CS 5200",
    },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="row">
        {courses.map((course, index) => {
          return (
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.code}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
