const addCourseToStudent = <
  T extends { name: string; id: number; email: string }
>(
  student: T
): T & { course: string } => {
  const course = "Next level web development";
  return {
    ...student,
    course,
  };
};

const student1 = addCourseToStudent<{
  name: string;
  id: number;
  email: string;
  devType: string;
}>({
  name: "rezwan",
  id: 2,
  email: "rezwan@gmail.com",
  devType: "developer",
});

const student2 = addCourseToStudent({
  name: "tuli",
  id: 2,
  email: "tuli@gmail.com",
  hasWatch: "apple watch",
});

const student3 = addCourseToStudent({
  name: "zishan",
  id: 4,
  email: "zishan@gmail.com",
  hasWatch: "nothing",
});
