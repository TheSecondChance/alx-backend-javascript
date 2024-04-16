const getStudentIdsSum = (students) => {
  const id = students.reduce(
    (accum, currentValue) => accum + currentValue.id, 0,
  );
  return id;
};

export default getStudentIdsSum;
