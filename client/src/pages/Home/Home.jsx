import { HomeContextProvider } from "./HomeContext";
import ListExam from "./ListExam";
import ModalAddExam from "./ModalAddExam";

function Home() {
  return (
    <HomeContextProvider>
      <div className="p-2">
        <ModalAddExam />
        <ListExam />
      </div>
    </HomeContextProvider>
  );
}

export default Home;
