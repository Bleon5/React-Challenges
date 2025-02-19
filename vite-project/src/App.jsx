import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";

import Students from "./components/Students";

function App() {
  const students = [
    {
      id: 1,
      firstName: "Testy",
      lastName: "McTest",
      age: 42,
      course: "Web Development",
      city: "Berlin",
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
      gpa: 50,
      graduate: false,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      age: 22,
      course: "Data Science",
      city: "New York",
      picture: "https://randomuser.me/api/portraits/women/2.jpg",
      gpa: 95,
      graduate: true,
    },
    {
      id: 3,
      firstName: "John",
      lastName: "Smith",
      age: 28,
      course: "Web Development",
      city: "Los Angeles",
      picture: "https://randomuser.me/api/portraits/men/3.jpg",
      gpa: 85,
      graduate: false,
    },
    {
      id: 4,
      firstName: "Alice",
      lastName: "Johnson",
      age: 25,
      course: "Data Science",
      city: "San Francisco",
      picture: "https://randomuser.me/api/portraits/women/4.jpg",
      gpa: 78,
      graduate: true,
    },
    {
      id: 5,
      firstName: "Bob",
      lastName: "Brown",
      age: 30,
      course: "Web Development",
      city: "Chicago",
      picture: "https://randomuser.me/api/portraits/men/5.jpg",
      gpa: 67,
      graduate: false,
    },
    {
      id: 6,
      firstName: "Charlie",
      lastName: "Davis",
      age: 23,
      course: "Data Science",
      city: "Austin",
      picture: "https://randomuser.me/api/portraits/men/6.jpg",
      gpa: 92,
      graduate: true,
    },
    {
      id: 7,
      firstName: "Emily",
      lastName: "Wilson",
      age: 27,
      course: "Web Development",
      city: "Seattle",
      picture: "https://randomuser.me/api/portraits/women/7.jpg",
      gpa: 88,
      graduate: true,
    },
    {
      id: 8,
      firstName: "David",
      lastName: "Martinez",
      age: 29,
      course: "Data Science",
      city: "Miami",
      picture: "https://randomuser.me/api/portraits/men/8.jpg",
      gpa: 73,
      graduate: false,
    },
    {
      id: 9,
      firstName: "Fiona",
      lastName: "Clark",
      age: 26,
      course: "Web Development",
      city: "Denver",
      picture: "https://randomuser.me/api/portraits/women/9.jpg",
      gpa: 81,
      graduate: false,
    },
    {
      id: 10,
      firstName: "George",
      lastName: "Miller",
      age: 32,
      course: "Data Science",
      city: "Boston",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
      gpa: 90,
      graduate: true,
    },
  ];
  return (
    <>
      <Header />
      <Hero />
      <div className="students-container">
        {students.map(
          (
            { firstName, lastName, age, course, city, picture, gpa, graduate },
            index
          ) => (
            <Students
              key={index}
              name={firstName}
              lastName={lastName}
              age={age}
              course={course}
              city={city}
              picture={picture}
              gpa={gpa}
              graduate={graduate}
            />
          )
        )}
      </div>
      <Services />
      <Footer />
    </>
  );
}

export default App;
