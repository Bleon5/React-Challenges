import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState([]);

  const fetchStudents = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchOneStudents = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setStudent(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AppContext.Provider
      value={{
        students,
        setStudents,
        student,
        setStudent,
        fetchOneStudents,
        fetchStudents,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useApp };
