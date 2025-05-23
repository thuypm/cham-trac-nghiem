import { Button } from "primereact/button";
import { useContext, useState } from "react";
import { ExamContext } from "./ExamContext";

function ModalAddEditAnswer() {
  const [visible, setVisible] = useState(false);
  const { currentExam } = useContext(ExamContext);
  const answers = currentExam.answerList;
  return (
    <>
      <Button type="button" onClick={() => setVisible(true)}>
        Thêm đáp án
      </Button>
    </>
  );
}

export default ModalAddEditAnswer;
