import { useGetAllsemestersQuery } from "../../../redux/features/acamedicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllsemestersQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>This is academicSemesters</h1>
    </div>
  );
};

export default AcademicSemester;