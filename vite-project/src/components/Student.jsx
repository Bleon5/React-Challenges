import Grade from "./Grade";

const studentData = {
  firstName: "Testy",
  lastName: "McTest",
  age: 42,
  course: "Web Development",
  city: "Berlin",
  picture: "https://randomuser.me/api/portraits/men/1.jpg",
  gpa: 50,
  graduate: false,
};

function Student() {
  const { firstName, lastName, age, course, city, picture, gpa } = studentData;
  return (
    <section className="student-card student-one">
      <h2>Student</h2>
      <img src={picture} alt="Student Image" />
      <h3>Name: {firstName}</h3>
      <h3>Surname: {lastName}</h3>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>City: {city}</p>
      <p>Gpa: {gpa}</p>
      <Grade gpa={gpa} />
    </section>
  );
}

export default Student;
