import { getAllExam } from "api/exam";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeContext } from "./HomeContext";

function ListExam() {
  const { listExam, setListExam } = useContext(HomeContext);
  useEffect(() => {
    getAllExam().then((res) => {
      setListExam(res);
    });
  }, [setListExam]);
  return (
    <div className="my-4">
      {listExam.map((exam) => {
        return (
          <Link to={`/exam/${exam._id}`} key={exam._id} className="p-2 border">
            <div className="grid border-1 border-round border-gray-300 hover:bg-blue-200 cursor-pointer transition-duration-300">
              <div className="col-12 md:col-6">
                <p className="text-xl my-0">
                  <strong>Tên bài kiểm tra:</strong> {exam.name}
                </p>
              </div>
              <div className="col-12">
                <strong>Lớp:</strong> {exam.classId}
              </div>
              <div className="col-12 ">
                <strong>
                  P1: {exam.numOfPartOne}/ P2: {exam.numOfPartTWo}/ P3:
                  {exam.numOfPartThree}
                </strong>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ListExam;
