import { useState } from "react";
import { useSelector } from "react-redux";
import { Tasks } from "../interfaces/tasksInterfaces";
import Header from "./header/Header";
import Modal from "./modal/Modal";
import TaskList from "./taskList/TaskList";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const tasks = useSelector((state: Tasks) => state.tasks);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSearchQuery = (searchValue: string) => {
    setSearchQuery(searchValue);
  };

  const handleSelectedStatus = (selectedStatus: string) => {
    setSelectedStatus(selectedStatus);
  };

  return (
    <div className="App">
      <Header
        modalHandler={toggleModal}
        searchQuery={searchQuery}
        searchHandler={handleSearchQuery}
        selectedStatus={selectedStatus}
        selectHandler={handleSelectedStatus}
      />
      {isModalOpen ? <Modal toggleModal={toggleModal} /> : null}
      {tasks && tasks.length > 0 ? (
        <TaskList searchQuery={searchQuery} selectedStatus={selectedStatus} />
      ) : null}
    </div>
  );
}

export default App;
