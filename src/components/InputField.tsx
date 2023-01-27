import { Button, TextField, Typography } from "@mui/material";
import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleChange: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleChange }) => {
  return (
    <>
      <Typography component="h1" variant="h4">
        Todo List
      </Typography>
      <form onSubmit={(e) => handleChange(e)}>
        <TextField
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          margin="normal"
          required
          fullWidth
          id="todo"
          label="Write a Todo"
          name="todo"
          autoComplete="todo"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}>
          Create
        </Button>
      </form>
    </>
  );
};

export default InputField;
