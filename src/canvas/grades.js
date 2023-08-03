import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./grades.css";

function Grades() {
  // TODO: move data to separate json file
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Avinash Nidadavolu",
      assignments: [
        { id: 1, name: "Assignment 1", marks: 80 },
        { id: 2, name: "Assignment 2", marks: 90 },
        { id: 2, name: "Assignment 3", marks: 90 },
        { id: 2, name: "Assignment 4", marks: 90 },
        { id: 2, name: "Assignment 5", marks: 90 },
        { id: 2, name: "Assignment 6", marks: 90 },
        { id: 2, name: "Assignment 7", marks: 90 },
        { id: 2, name: "Assignment 8", marks: 90 },
        { id: 2, name: "Assignment 9", marks: 90 },
        { id: 2, name: "Assignment 10", marks: 90 },
        { id: 2, name: "Assignment 11", marks: 90 },
        { id: 2, name: "Assignment 12", marks: 90 },
      ],
    },
    {
      id: 2,
      name: "Prof Jose",
      assignments: [
        { id: 1, name: "Assignment 1", marks: 100 },
        { id: 2, name: "Assignment 2", marks: 100 },
        { id: 2, name: "Assignment 3", marks: 90 },
        { id: 2, name: "Assignment 4", marks: 90 },
        { id: 2, name: "Assignment 5", marks: 90 },
        { id: 2, name: "Assignment 6", marks: 90 },
        { id: 2, name: "Assignment 7", marks: 90 },
        { id: 2, name: "Assignment 8", marks: 90 },
        { id: 2, name: "Assignment 9", marks: 90 },
        { id: 2, name: "Assignment 10", marks: 90 },
        { id: 2, name: "Assignment 11", marks: 90 },
        { id: 2, name: "Assignment 12", marks: 90 },
      ],
    },
  ]);

  const [filteredStudents, setFilteredStudents] = useState(students);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectedAssignments, setSelectedAssignments] = useState([]);
  const [assignmentOptions, setAssignmentOptions] = useState([]);

  useEffect(() => {
    // Apply both filters independently and update the filtered students array
    const filteredByStudents =
      selectedStudents.length === 0
        ? students
        : students.filter((student) => selectedStudents.includes(student.name));

    const filteredStudentsWithAssignments = filteredByStudents.map(
      (student) => {
        const filteredAssignments =
          selectedAssignments.length === 0
            ? student.assignments
            : student.assignments.filter((assignment) =>
                selectedAssignments.includes(assignment.name)
              );
        return { ...student, assignments: filteredAssignments };
      }
    );

    setFilteredStudents(filteredStudentsWithAssignments);
  }, [selectedStudents, selectedAssignments, students]);

  useEffect(() => {
    // Update the assignment options when students change
    setAssignmentOptions([
      ...new Set(
        students.flatMap((student) =>
          student.assignments.map((assignment) => assignment.name)
        )
      ),
    ]);
  }, [students]);

  const handleStudentSelectChange = (selectedOptions) => {
    setSelectedStudents(selectedOptions.map((option) => option.value));
  };

  const handleAssignmentSelectChange = (selectedOptions) => {
    setSelectedAssignments(selectedOptions.map((option) => option.value));
  };

  return (
    <div>
      <a name="grades"></a>
      <h1>Grades</h1>
      <hr />

      <div>
        <h2>Student Assignment Table</h2>
        <div className="filter-container">
          <div className="filter-box">
            <label>Filter by Student Name:</label>
            <Select
              isMulti
              options={students.map((student) => ({
                value: student.name,
                label: student.name,
              }))}
              value={students
                .filter((student) => selectedStudents.includes(student.name))
                .map((student) => ({
                  value: student.name,
                  label: student.name,
                }))}
              onChange={handleStudentSelectChange}
              isSearchable
              className="custom-select"
            />
          </div>
          <div class="filter-box">
            <label>Filter by Assignment:</label>
            <Select
              isMulti
              options={assignmentOptions.map((assignmentName) => ({
                value: assignmentName,
                label: assignmentName,
              }))}
              value={selectedAssignments.map((assignmentName) => ({
                value: assignmentName,
                label: assignmentName,
              }))}
              onChange={handleAssignmentSelectChange}
              isSearchable
              className="custom-select"
            />
          </div>
        </div>
        <br></br>
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Student Name</th>
                {filteredStudents[0]?.assignments.map((assignment) => (
                  <th key={assignment.id}>{assignment.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  {filteredStudents[0]?.assignments.map((assignment) => (
                    <td key={assignment.id}>
                      {student.assignments.find(
                        (a) => a.name === assignment.name
                      )
                        ? student.assignments.find(
                            (a) => a.name === assignment.name
                          ).marks
                        : "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Grades;
