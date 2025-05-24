import { getAllAssignment } from "api/assignment";
import { InputText } from "primereact/inputtext";
import { useCallback, useContext, useEffect } from "react";
import { ExamContext } from "../ExamContext";
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
        <div className="flex gap-2">
          <ModalImportAssignment />
          <div>
            <InputText />
          </div>
        </div>
        <div className="overflow-y-auto flex gap-4 flex-grow-1">
          <div className="w-20 flex-grow-1 flex flex-column h-full overflow-y-auto">
            <ListAssignment />
          </div>
          <div className=" flex-grow-0 h-full overflow-hidden">
            {selectedAssignment ? (
              <img
                src={`${process.env.REACT_APP_API_URL}/images/${selectedAssignment.imgName}`}
                alt="Trulli"
                className="h-full object-cover"></img>
            ) : null}
          </div>
          <div className="w-20rem flex-grow-0">Phần trả lời</div>
        </div>
      </div>
    </>
  );
}

export default AssignmentScreen;
