const getListStudentIds = (newA) => {
  if (!Array.isArray(newA)) {
    return [];
  }
  return newA.map((studentId) => studentId.id);
};

export default getListStudentIds;
