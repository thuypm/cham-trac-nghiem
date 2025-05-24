import { createContext, useState } from "react";
export const ExamContext = createContext({
  currentExam: null,
  setCurrentExam: () => {},
  listAssignment: null,
  setListAssignment: () => {},
  selectedAssignment: null,
  setSelectAssignment: () => {},
});

export function ExamContextProvider(props) {
  const { children, ...rest } = props;
  const [currentExam, setCurrentExam] = useState(null);
  const [listAssignment, setListAssignment] = useState([]);
  const [selectedAssignment, setSelectAssignment] = useState(null);

  return (
    <ExamContext.Provider
      value={{
        ...rest,
        currentExam,
        setCurrentExam,
        listAssignment,
        setListAssignment,
        selectedAssignment,
        setSelectAssignment,
      }}>
      {props.children}
    </ExamContext.Provider>
  );
}
