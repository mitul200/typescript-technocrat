{
  // union types
  // union types and java scripts are the same things,however union have one line like this => | and JavaScripts have or sign Like this => || it's almost same

  type FrontendDeveloper = "fakibazz developer" | "Junior Developer";
  type FullstuckDeveloper = "Frontend Developer" | "Expert Developer";

  type Developer = FrontendDeveloper | FullstuckDeveloper;

  const needDeveloper: Developer = "fakibazz developer";

  type User = {
    name: string;
    gender: "male" | "female";
    bloodGrp: "O+" | "A+" | "AB+";
  };

  const user1: User = {
    name: "khaled",
    gender: "female",
    bloodGrp: "O+",
  };

  // intersection
  type FrontendDevelopers = {
    skills: string[];
    degination1: "Frontend Developer";
  };
  type BackendDevelopers = {
    skills: string[];
    degination2: "Backend Developer";
  };

  type FullstuckDevelopers = BackendDevelopers & FrontendDevelopers;

  const fulllStackDeveloper: FullstuckDevelopers = {
    skills: ["HTML", "CSS", "JAVASCRIPT", "EXPRESS", "MONGODB"],
    degination1: "Frontend Developer",
    degination2: "Backend Developer",
  };

  // moral of the code Union types => | and intersection types => & fore examples 
// intersection : FullstuckDevelopers = BackendDevelopers & FrontendDevelopers;
// Union : type Developer = FrontendDeveloper | FullstuckDeveloper;
}
