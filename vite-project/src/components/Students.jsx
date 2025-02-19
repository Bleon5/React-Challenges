import Grade from "./Grade";

function Students(props) {
  return (
    <section className="student-card cards">
      <h2>Student</h2>
      <img src={props.picture} alt="Student Image" />
      <h3>Name: {props.firstName}</h3>
      <h3>Surname: {props.lastName}</h3>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
      <p>City: {props.city}</p>
      <p>Gpa: {props.gpa}</p>
      <Grade gpa={props.gpa} />
    </section>
  );
}

export default Students;
