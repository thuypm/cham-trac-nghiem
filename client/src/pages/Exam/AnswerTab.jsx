import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { TabPanel, TabView } from "primereact/tabview";
import { useContext, useState } from "react";
import { ExamContext } from "./ExamContext";
import ModalImportAnswer from "./ModalImportAnswer";

function AnswerTab() {
  const {
    currentExam: { answerList },
  } = useContext(ExamContext);

  const [activeIndex, setActiveIndex] = useState(0);
  const abcd = ["A", "B", "C", "D"];
  return (
    <>
      <div className="mb-2 flex gap-4">
        <Button>Tạo đáp án</Button>
        <ModalImportAnswer />
      </div>
      <div className="overflow-y-auto">
        {" "}
        <TabView
          className="overflow-y-auto"
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}>
          {answerList?.map((as) => {
            return (
              <TabPanel
                key={as.key}
                header={as.key}
                contentClassName="overflow-y-auto">
                <div className="flex gap-4">
                  <div>
                    <div className="mb-2 text-xl font-bold">Phần 1</div>
                    {as.partOne?.map((q, index) => {
                      return (
                        <div
                          key={index}
                          className="flex gap-2 align-items-center mb-2 border-y-1 py-1   border-gray-300">
                          <div className="w-3  text-xl font-bold">
                            {index + 1}
                          </div>
                          {abcd.map((a, i) => {
                            return (
                              <Button
                                key={i}
                                rounded
                                severity="success"
                                className="w-4 h-4 flex align-items-center justify-content-center"
                                outlined={!q.includes(a)}>
                                {a}
                              </Button>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    <div className="mb-2 text-xl font-bold"> Phần 2</div>
                    {as.partTwo?.map((q, index) => {
                      return (
                        <div
                          key={index}
                          className="flex gap-2 align-items-center mb-2 border-y-1 py-1   border-gray-300">
                          <div className="w-3  text-xl font-bold">
                            {index + 1}
                          </div>
                          {["D", "S"].map((a, i) => {
                            return (
                              <Button
                                key={i}
                                rounded
                                severity="success"
                                outlined={!q.includes(a)}>
                                {a}
                              </Button>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <div className="mb-2 text-xl font-bold"> Phần 3</div>
                    {as.partThree?.map((q, index) => {
                      return (
                        <div
                          key={index}
                          className="flex gap-2 align-items-center mb-2 border-y-1 py-1   border-gray-300">
                          <div className="w-3  text-xl font-bold">
                            {index + 1}
                          </div>
                          <InputText value={q} />
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-column gap-2">
                    <Button>Lưu</Button>
                    <Button severity="danger">Xóa</Button>
                  </div>
                </div>
              </TabPanel>
            );
          })}
        </TabView>
      </div>
    </>
  );
}

export default AnswerTab;
