import { useGetAllsemestersQuery } from "../../../redux/features/acamedicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllsemestersQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>This is academic Semesters</h1>
    </div>
  );
};

export default AcademicSemester;
