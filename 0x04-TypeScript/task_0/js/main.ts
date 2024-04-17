interface Student {
  firstName: string,
  lastName: string,
  age: Number,
  location: string
}

const student1: Student = {
  firstName: "dumy",
  lastName: "dumy",
  age: 19,
  location: "Ethiopia"
}

const student2: Student = {
  firstName: "dumy",
  lastName: "dumy",
  age: 10,
  location: "Ethiopia"
}

const studentsList: Array<Student> = [ student1, student2 ];
