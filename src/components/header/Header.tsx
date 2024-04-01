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
          <MenuItem value="Not Started">Not Started</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
      </div>
    </header>
  );
};

export default Header;
