export default function getStudentIdsSum(students) {
  const sum = students.reduce((total, students) => total + students.id, 0);

  return sum;
}
