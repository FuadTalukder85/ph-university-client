import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDasboard from "../pages/student/StudentDasboard";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDasboard></StudentDasboard>,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCourse></OfferedCourse>,
  },
];
