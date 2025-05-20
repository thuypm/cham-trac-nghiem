import { createContext, useState } from "react";
export const HomeContext = createContext({
  listExam: null,
  setListExam: () => {},
});

export function HomeContextProvider(props) {
  const { children, ...rest } = props;
  const [listExam, setListExam] = useState([]);

  return (
    <HomeContext.Provider
      value={{
        ...rest,
        listExam,
        setListExam,
      }}>
      {props.children}
    </HomeContext.Provider>
  );
}
