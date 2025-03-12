import { useParams } from "react-router-dom";
import { useApp } from "../context/AppContext";

function Student() {
  const { id } = useParams();
  const { students } = useApp();
  const student = students.find((student) => student.id === parseInt(id));

  return student ? (
    <section>
      <h2>{student.name}</h2>
      <p>{student.email}</p>
      <p>{student.phone}</p>
      <p>{student.address.street}</p>
    </section>
  ) : (
    <p>Student not found</p>
  );
}

export default Student;
