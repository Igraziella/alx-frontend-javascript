export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return []; // Return an empty array if the argument is not an array
  }

  // Using the map function to extract the ids from the array of objects
  const studentIds = arr.map((obj) => obj.id);

  return studentIds;
}
