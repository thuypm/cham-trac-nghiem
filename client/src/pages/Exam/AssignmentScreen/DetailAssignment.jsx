import dataPositionPaper from "api/data";
import { castArrayToString } from "api/helper";
import clsx from "clsx";
import { InputText } from "primereact/inputtext";
import { useContext, useMemo } from "react";
import { ExamContext } from "../ExamContext";

function DetailAssignment() {
  const { selectedAssignment, currentExam } = useContext(ExamContext);

  const abcd = ["A", "B", "C", "D"];
  const ds = ["D", "S"];

  const curentKey = useMemo(() => {}, []);
  const getColorByKey = (key) => {};

  return (
    <>
      <div className="overflow-y-auto h-full">
        <div className="flex flex-column gap-2 mb-2">
          <div>
            <span> SBD </span> <InputText value="" />
          </div>
          <div>
            <span> Mã đề </span> <InputText />
          </div>
        </div>

        <div>
          <div className="mb-2 text-xl font-bold">Phần 1</div>
          {selectedAssignment.partOne
            ?.slice(0, currentExam?.numOfPartOne)
            ?.map((q, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-2 align-items-center mb-2 border-y-1 py-1   border-gray-500">
                  <div className="w-3  text-xl font-bold">{index + 1}</div>
                  <div className="relative">
                    {selectedAssignment ? (
                      <img
                        src={`${process.env.REACT_APP_API_URL}/images/${selectedAssignment.imgName}`}
                        alt="Trulli"
                        height={dataPositionPaper.unt2025.partOne[index][3]}
                        width={dataPositionPaper.unt2025.partOne[index][2]}
                        style={{
                          objectFit: "none",
                          objectPosition: `-${dataPositionPaper.unt2025.partOne[index][0]}px -${dataPositionPaper.unt2025.partOne[index][1]}px`,
                        }}></img>
                    ) : null}
                    <div
                      className="absolute   flex "
                      style={{ gap: 15, right: 8, top: -3 }}>
                      {abcd.map((it) => {
                        return (
                          <div
                            className={clsx(
                              " text-xs text-yellow-500 cursor-pointer flex align-items-center justify-content-center",
                              q.includes(it)
                                ? "border-blue-500"
                                : "border-transparent"
                            )}
                            style={{
                              width: 34,
                              height: 34,
                              borderWidth: "6px",
                              borderStyle: "solid",
                            }}>
                            {it}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="mb-2 text-xl font-bold">Phần 2</div>
          {selectedAssignment.partTwo
            ?.slice(0, currentExam?.numOfPartTwo * 4)
            ?.map((q, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-2 align-items-center mb-2 border-y-1 py-1  border-gray-500">
                  <div className="w-3  text-xl font-bold">
                    {Math.floor(index / 4 + 1)} {abcd[index % 4]}
                  </div>
                  <div className="relative">
                    {selectedAssignment ? (
                      <img
                        src={`${process.env.REACT_APP_API_URL}/images/${selectedAssignment.imgName}`}
                        alt="Trulli"
                        height={dataPositionPaper.unt2025.partTwo[index][3]}
                        width={dataPositionPaper.unt2025.partTwo[index][2]}
                        style={{
                          objectFit: "none",
                          objectPosition: `-${dataPositionPaper.unt2025.partTwo[index][0]}px -${dataPositionPaper.unt2025.partTwo[index][1]}px`,
                        }}></img>
                    ) : null}
                    <div
                      className="absolute flex "
                      style={{ gap: 12, right: 0, top: -2 }}>
                      {ds.map((it) => {
                        return (
                          <div
                            className={clsx(
                              " text-xs  text-yellow-500 cursor-pointer flex align-items-center justify-content-center",
                              q.includes(it)
                                ? "border-blue-500"
                                : "border-transparent"
                            )}
                            style={{
                              width: 34,
                              height: 34,
                              borderWidth: "6px",
                              borderStyle: "solid",
                            }}>
                            {it}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="mb-2 text-xl font-bold">Phần 3</div>
          {selectedAssignment.partThree
            ?.slice(0, currentExam?.numOfPartThree)
            ?.map((q, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-2 align-items-center mb-2 border-y-1 py-1  border-gray-500">
                  <div className="w-3  text-xl font-bold">{index + 1}</div>
                  <InputText value={castArrayToString(q).replace(/_+$/, "")} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default DetailAssignment;
