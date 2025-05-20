import { createContext, useState } from "react";
export const ExamContext = createContext({
  currentExam: null,
  setCurrentExam: () => {},
});

export function ExamContextProvider(props) {
  const { children, ...rest } = props;
  const [currentExam, setCurrentExam] = useState(null);

  return (
    <ExamContext.Provider
      value={{
        ...rest,
        currentExam,
        setCurrentExam,
      }}>
      {props.children}
    </ExamContext.Provider>
  );
}
