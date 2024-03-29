import { Button } from "@mui/material";

interface HeaderProps {
  modalHandler: () => void;
}

const Header = ({ modalHandler }: HeaderProps) => {
  return (
    <div>
      <h1>Your Favourite Task Manager</h1>
      <Button
        variant="contained"
        onClick={modalHandler}
        sx={{ marginBottom: "80px" }}
      >
        Add new task
      </Button>
    </div>
  );
};

export default Header;
