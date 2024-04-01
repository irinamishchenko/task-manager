import { TaskStatus } from "../../interfaces/tasksInterfaces";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import "./Header.css";

interface HeaderProps {
  modalHandler: () => void;
  searchQuery: string;
  searchHandler: (query: string) => void;
  selectedStatus: string;
  selectHandler: (status: string) => void;
}

const Header = ({
  modalHandler,
  searchQuery,
  searchHandler,
  selectedStatus,
  selectHandler,
}: HeaderProps) => {
  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchHandler(event.target.value);
  };

  const handleSelectStatus = (event: SelectChangeEvent<string>) => {
    selectHandler(event.target.value);
  };

  return (
    <header>
      <h1>Your Favourite Task Manager</h1>
      <div className="header-toolbar">
        <Button variant="contained" onClick={modalHandler}>
          Add new task
        </Button>
        <TextField value={searchQuery} onChange={handleSearchQuery} />
        <Select value={selectedStatus} onChange={handleSelectStatus}>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value={TaskStatus.NOT_STARTED}>
            {TaskStatus.NOT_STARTED}
          </MenuItem>
          <MenuItem value={TaskStatus.IN_PROGRESS}>
            {TaskStatus.IN_PROGRESS}
          </MenuItem>
          <MenuItem value={TaskStatus.COMPLETED}>
            {TaskStatus.COMPLETED}
          </MenuItem>
        </Select>
      </div>
    </header>
  );
};

export default Header;
