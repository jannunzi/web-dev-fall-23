import React from "react";

function Grades(){
    const grades = [
    {
        assignmentName : "A1 Setup",
        DueDate :"Sep 18, 2022 by 11:59pm",
        Score : "100%",
        type:"Assignments"
    },
    {
        assignmentName : "A2 HTML",
        DueDate :"Sep 25, 2022 by 11:59pm",
        Score : "100%",
        type:"Assignments"
    },
    {
        assignmentName : "A3 CSS",
        DueDate :"Oct 2, 2022 by 11:59pm",
        Score : "100%",
        type:"Assignments"
    },
    {
        assignmentName : "  Q2 CSS",
        DueDate :"Oct 5, 2022 by 11:59pm",
        Score : "100%",
        type:"Quizzes"
    },
    {
        assignmentName : "A4 Bootstrap",
        DueDate :"Oct 10, 2022 by 11:59pm",
        Score : "100%",
        type:"Assignments"
    },
    ];

return(
    <div>
        <h1>Grades</h1>
        <hr/>
        <h3>Grades for Avinash Nidadavolu</h3>
        <table border="1" width="80%">
            <thead>
                <th>Name</th>
                <th>Due</th>
                <th>Score</th>
            </thead>
            <tbody>
        {grades.map((grade,index)=>{
            return(
                <tr>
                    <th>
                        <a href="#">{grade.assignmentName}</a>
                        <div>{grade.type}</div>
                    </th>
                    <td>{grade.DueDate}</td>
                    <td>{grade.Score}</td>
                </tr>
            );
        })}
        </tbody>
        </table>

    </div>
)
}

export default Grades;