function Grade({ gpa }) {
  const getGrade = (gpa) => {
    if (gpa >= 97 || gpa === 100) return "A+";
    else if (gpa >= 93 && gpa <= 96) return "A";
    else if (gpa >= 90 && gpa <= 92) return "A-";
    else if (gpa >= 87 && gpa <= 89) return "B+";
    else if (gpa >= 83 && gpa <= 86) return "B";
    else if (gpa >= 80 && gpa <= 82) return "B-";
    else if (gpa >= 77 && gpa <= 79) return "C+";
    else if (gpa >= 73 && gpa <= 76) return "C";
    else if (gpa >= 70 && gpa <= 72) return "C-";
    else if (gpa >= 67 && gpa <= 69) return "D+";
    else if (gpa >= 63 && gpa <= 66) return "D";
    else if (gpa >= 60 && gpa <= 62) return "D-";
    else return "F";
  };

  return <p>Grade: {getGrade(gpa)}</p>;
}

export default Grade;
