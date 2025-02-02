{
  // Constraints in typescript

  // constraints means it has enforce data to require in the params
  interface Users {
    id: number;
    email: string;
    devices: string;
    role?: string;
    StudentsOfUniversity?: string;
    CGPA?: number;
  }

  // Generic Function
  const studentOfPHGeneric = <
    T extends { id: number; email: string; devices: string }
  >(
    learners: T
  ) => {
    const course = "Next Level Learners";
    return {
      ...learners,
      course,
    };
  };

  // Calling the function with Users type
  const learnersDetails = studentOfPHGeneric<Users>({
    id: 111,
    email: "mitul#5267@gmail.com",
    devices: "PC Windows 10",
    role: "Backend site",
  });
  const learnersDetails2 = studentOfPHGeneric<Users>({
    id: 222,
    email: "mitul12345267@gmail.com",
    devices: "lactop",
    StudentsOfUniversity: "Bangla Background",
  });
  const learnersDetails3 = studentOfPHGeneric<Users>({
    id: 333,
    email: "khaled5267@gmail.com",
    devices: "macbook",
    CGPA: 4.0,
  });
}
