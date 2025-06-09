import { getAllAssignment } from "api/assignment";
import { InputText } from "primereact/inputtext";
import { useCallback, useContext, useEffect } from "react";
import { ExamContext } from "../ExamContext";
import DetailAssignment from "./DetailAssignment";
import ImageAssignment from "./ImageAssignment";
import ListAssignment from "./ListAssignment";
import ModalImportAssignment from "./ModalImportAssignment";

function AssignmentScreen() {
  const {
    currentExam: { _id },
    selectedAssignment,
    setListAssignment,
  } = useContext(ExamContext);

  const getListAssignmentExam = useCallback(async () => {
    const data = await getAllAssignment(_id);
    setListAssignment(data);
  }, [_id, setListAssignment]);

  useEffect(() => {
    getListAssignmentExam();
  }, [getListAssignmentExam]);

  return (
    <>
      <div className="flex flex-column overflow-y-auto h-full">
        <div className="overflow-y-auto flex gap-4 flex-grow-1">
          <div className="w-20 flex-grow-1 flex flex-column h-full overflow-y-auto">
            <div className="flex gap-2">
              <ModalImportAssignment />
              <div>
                <InputText />
              </div>
            </div>
            <ListAssignment />
          </div>
          <div
            className=" flex-grow-0 h-full overflow-hidden"
            style={{ minWidth: 400 }}>
            {selectedAssignment ? <ImageAssignment /> : null}
          </div>
          <div className="w-20rem flex-grow-0">
            {selectedAssignment ? <DetailAssignment /> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignmentScreen;
