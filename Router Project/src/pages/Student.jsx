import { useParams } from "react-router-dom";

function Student({ students }) {
  const { id } = useParams();
  const student = students.find((student) => student.id === parseInt(id));
  console.log(student);
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
