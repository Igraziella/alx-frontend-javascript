export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.city === city)
    .map((student) => {
      const foundGrade = newGrades.find((grade) => grade.studentId === student.id);
      const grade = foundGrade ? foundGrade.grade : 'N/A';
      return { ...student, grade };
    });
}
