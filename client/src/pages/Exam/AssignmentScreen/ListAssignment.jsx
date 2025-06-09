import clsx from "clsx";
import { useContext } from "react";
import { ExamContext } from "../ExamContext";

function ListAssignment() {
  const { listAssignment, setSelectAssignment, selectedAssignment } =
    useContext(ExamContext);

  // const tranferArrayToString = useMemo(() => {
  //   return listAssignment.map((item) => {
  //     return {
  //       ...item,
  //       studentId: castArrayToString(item.studentId),
  //       key: castArrayToString(item.key),
  //       partOne: castArrayToString(item.partOne),
  //       partTwo: castArrayToString(item.partTwo),
  //       partThree: castArrayToString(item.partThree),
  //     };
  //   });
  // }, [listAssignment]);

  return (
    <>
      <div className="flex-grow-1 overflow-y-auto h-full">
        {listAssignment.map((assignment) => {
          return (
            <div
              className={clsx(
                "flex cursor-pointer hover:bg-blue-100 p-2 transition-duration-300 border-y-1 border-gray-500",
                {
                  "bg-blue-100": assignment._id === selectedAssignment?._id,
                }
              )}
              key={assignment._id}
              onClick={() => {
                setSelectAssignment(
                  listAssignment.find((item) => item._id === assignment._id)
                );
              }}>
              <div>
                <div className="mb-2">
                  SBD: <strong>{assignment.exactStudentId} </strong>
                </div>
                <div className="flex gap-4">
                  <div>
                    Mã đề: <strong>{assignment.exactKey} </strong>
                  </div>
                  <div>
                    Điểm: <strong>{assignment.score} </strong>
                  </div>
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
