import React from "react";
import StudentLink from "../components/StudentLink";
import { useApp } from "../context/AppContext";

function Students() {
  const { students } = useApp();
  return (
    <section>
      <h2>Students</h2>
      <p>Here is a list of the students at WBS</p>
      <ul>
        {students.map((student) => (
          <StudentLink key={student.id} student={student} />
        ))}
      </ul>
    </section>
  );
}

export default Students;
