import { useContext } from "react";
import { ExamContext } from "../ExamContext";

function AssignmentScreen() {
  const {
    currentExam: { answerList },
  } = useContext(ExamContext);

  return (
    <>
      <div className="overflow-y-auto flex gap-4">
        <div className="w-20 flex-grow-1">
          <div>dàdgfhfg</div>
          <div>lpasoudt</div>
        </div>
        <div>
          <img src="/test.jpg" alt="Trulli" width={400}></img>
        </div>
        <div className="w-20rem">Phần trả lời</div>
      </div>
    </>
  );
}

export default AssignmentScreen;
