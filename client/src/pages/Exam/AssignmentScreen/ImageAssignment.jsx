import { useCallback, useContext, useEffect, useRef } from "react";
import { ExamContext } from "../ExamContext";
import mockPaper from "./dataPaper.json";

function ImageAssignment() {
  const { currentExam, selectedAssignment } = useContext(ExamContext);
  const canvasRef = useRef(null);
  const imgRef = useRef(new Image());

  const drawCircle = ({ topLeft, bottomRight }, ctx, color = "red") => {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(
      (topLeft[0] + bottomRight[0]) / 2,
      (topLeft[1] + bottomRight[1]) / 2,
      12,
      0,
      Math.PI * 10
    );
    ctx.stroke();
  };
  const drawStudentId = useCallback(
    (ctx) => {
      // draw part 1
      mockPaper.studentId.forEach((quesPos, numIndex) => {
        const elementTick = selectedAssignment.studentId[numIndex];
        elementTick.forEach((item) => {
          drawCircle(quesPos[item], ctx, "blue");
        });
      });
    },
    [selectedAssignment.studentId]
  );
  const drawKey = useCallback(
    (ctx) => {
      // draw part 1
      mockPaper.key.forEach((quesPos, numIndex) => {
        const elementTick = selectedAssignment.key[numIndex];
        elementTick?.forEach((item) => {
          drawCircle(quesPos[item], ctx, "blue");
        });
      });
    },
    [selectedAssignment.key]
  );
  const drawPartOne = useCallback(
    (currentAnswer, ctx) => {
      // draw part 1
      mockPaper.partOne
        .slice(0, currentExam.numOfPartOne)
        .forEach((quesPos, numIndex) => {
          const elementTick = selectedAssignment.partOne[numIndex];
          elementTick.forEach((item) => {
            drawCircle(quesPos[item], ctx, "red");
          });

          if (currentAnswer) {
            const elementAnswer = currentAnswer.partOne[numIndex];
            elementAnswer.forEach((item) => {
              drawCircle(quesPos[item], ctx, "#32CD32");
            });
          }
        });
    },
    [currentExam.numOfPartOne, selectedAssignment.partOne]
  );
  const drawPartTwo = useCallback(
    (currentAnswer, ctx) => {
      // draw part 1
      mockPaper.partTwo
        .slice(0, currentExam.numOfPartTwo)
        .forEach((quesPos, numIndex) => {
          const elementTick = selectedAssignment.partTwo[numIndex];
          elementTick.forEach((item) => {
            drawCircle(quesPos[item], ctx, "red");
          });

          if (currentAnswer) {
            const elementAnswer = currentAnswer.partTwo[numIndex];
            elementAnswer.forEach((item) => {
              drawCircle(quesPos[item], ctx, "#32CD32");
            });
          }
        });
    },
    [currentExam.numOfPartTwo, selectedAssignment.partTwo]
  );

  const drawPartThree = useCallback(
    (currentAnswer, ctx) => {
      // draw part 1
      mockPaper.partThree
        .slice(0, currentExam.numOfPartThree)
        .forEach((quesPosArray, numIndex) => {
          const indenfyArr = selectedAssignment.partThree[numIndex];
          const answArr = currentAnswer?.partThree[numIndex];
          quesPosArray.forEach((col, colIndex) => {
            const elementTick = indenfyArr[colIndex];
            elementTick.forEach((item) => {
              drawCircle(col[item], ctx, "red");
            });
          });

          if (answArr) {
            answArr.forEach((item) => {
              quesPosArray.forEach((col, colIndex) => {
                item.split("")?.forEach((c, id) => {
                  if (id === colIndex) drawCircle(col[c], ctx, "#32CD32");
                });
              });
            });
          }
        });
    },
    [currentExam.numOfPartThree, selectedAssignment.partThree]
  );

  useEffect(() => {
    if (!selectedAssignment) return;

    let src = `${process.env.REACT_APP_API_URL}/images/${selectedAssignment.imgName}`;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = imgRef.current;

    img.src = src;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      ctx.lineWidth = 4;
      // Tìm mã đề
      const currentAnswer = currentExam.answerList.find(
        (item) => item.key === selectedAssignment.exactKey
      );
      drawStudentId(ctx);
      drawKey(ctx);
      drawPartOne(currentAnswer, ctx);
      drawPartTwo(currentAnswer, ctx);
      drawPartThree(currentAnswer, ctx);
    };
    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [
    currentExam.answerList,
    currentExam,
    selectedAssignment,
    drawPartOne,
    drawPartTwo,
    drawPartThree,
    drawStudentId,
    drawKey,
  ]);

  return (
    <div className="h-full flex flex-column">
      <div className="flex justify-content-between">
        <div>
          SBD: <strong>{selectedAssignment.exactStudentId}</strong>
        </div>
        <div>
          Mã đề: <strong>{selectedAssignment.exactKey}</strong>
        </div>
      </div>
      <div className="flex justify-content-between">
        <div>
          Điểm: <strong>{selectedAssignment.score}</strong>
        </div>
      </div>
      <div
        className=" flex-grow-1 h-full overflow-hidden"
        style={{ width: 400 }}>
        {selectedAssignment ? (
          <canvas
            ref={canvasRef}
            style={{ display: "block", maxWidth: "100%" }}
          />
        ) : null}
        {/* {selectedAssignment ? (
          <img
            src={`${process.env.REACT_APP_API_URL}/images/${selectedAssignment.imgName}`}
            alt="Trulli"
            style={{ objectFit: "cover" }}
            className="h-full "></img>
        ) : null} */}
      </div>
    </div>
  );
}

export default ImageAssignment;
