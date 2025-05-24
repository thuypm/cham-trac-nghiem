import { castArrayToString } from "api/helper";
import clsx from "clsx";
import { useContext, useMemo } from "react";
import { ExamContext } from "../ExamContext";

function ListAssignment() {
  const { listAssignment, setSelectAssignment, selectedAssignment } =
    useContext(ExamContext);

  const tranferArrayToString = useMemo(() => {
    return listAssignment.map((item) => ({
      ...item,
      studentId: castArrayToString(item.studentId),
      key: castArrayToString(item.key),
      partOne: castArrayToString(item.partOne),
      partTwo: castArrayToString(item.partTwo),
      partThree: castArrayToString(item.partThree),
    }));
  }, [listAssignment]);

  return (
    <>
      <div className="flex-grow-1 overflow-y-auto h-full">
        {tranferArrayToString.map((assignment) => {
          return (
            <div
              className={clsx(
                "flex cursor-pointer hover:bg-blue-100 p-2 transition-duration-300",
                {
                  "bg-blue-100": assignment._id === selectedAssignment?._id,
                }
              )}
              key={assignment._id}
              onClick={() => {
                setSelectAssignment(assignment);
              }}>
              <div>
                <div className="mb-2">
                  SBD: <strong>{assignment.studentId} </strong>
                </div>
                <div>
                  Mã đề: <strong>{assignment.key} </strong>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListAssignment;
