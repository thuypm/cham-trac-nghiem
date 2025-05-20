import { getExamById } from "api/exam";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ExamContext } from "./ExamContext";

function ExamContent() {
  const { id } = useParams();
  const { currentExam, setCurrentExam } = useContext(ExamContext);
  useEffect(() => {
    getExamById(id).then((res) => {
      setCurrentExam(res.data);
    });
  }, [id, setCurrentExam]);
  return (
    <div className="w-full h-full">
      {!currentExam ? (
        <>
          <div>
            <Button>Nhập/Sửa đáp án</Button>
          </div>
          <div></div>
        </>
      ) : (
        <ProgressSpinner />
      )}
    </div>
  );
}

export default ExamContent;
