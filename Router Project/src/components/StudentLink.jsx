import { Link } from "react-router-dom";

function StudentLink({ student }) {
  return (
    <li>
      <Link to={`${student.id}`}>{student.name}</Link>
    </li>
  );
}

export default StudentLink;
