import { getExamById } from "api/exam";
import { ProgressSpinner } from "primereact/progressspinner";
import { TabPanel, TabView } from "primereact/tabview";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnswerTab from "./AnswerTab";
import AssignmentScreen from "./AssignmentScreen";
import { ExamContext } from "./ExamContext";

function ExamContent() {
  const { id } = useParams();
  const { currentExam, setCurrentExam } = useContext(ExamContext);
  useEffect(() => {
    getExamById(id).then((res) => {
      setCurrentExam(res);
    });
  }, [id, setCurrentExam]);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="w-full h-full p-2 overflow-y-auto">
      {currentExam ? (
        <>
          <div className="overflow-y-auto">
            <TabView
              className="overflow-y-auto"
              activeIndex={activeIndex}
              onTabChange={(e) => setActiveIndex(e.index)}>
              <TabPanel header="Bài làm">
                <AssignmentScreen />
              </TabPanel>
              <TabPanel header="Đáp án" contentClassName="overflow-y-auto">
                <AnswerTab />
              </TabPanel>
            </TabView>
          </div>
        </>
      ) : (
        <ProgressSpinner />
      )}
    </div>
  );
}

export default ExamContent;
