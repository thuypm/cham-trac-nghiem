import ExamContent from "./ExamContent";
import { ExamContextProvider } from "./ExamContext";

function Exam() {
  return (
    <ExamContextProvider>
      <ExamContent />
    </ExamContextProvider>
  );
}

export default Exam;
