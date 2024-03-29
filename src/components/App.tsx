import { useState } from "react";
import { useSelector } from "react-redux";
import { Tasks } from "../interfaces/tasksInterfaces";
import Header from "./header/Header";
import Modal from "./modal/Modal";
import TaskList from "./taskList/TaskList";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const tasks = useSelector((state: Tasks) => state.tasks);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <Header modalHandler={toggleModal} />
      {isModalOpen ? <Modal toggleModal={toggleModal} /> : null}
      {tasks.length > 0 ? <TaskList /> : null}
    </div>
  );
}

export default App;
