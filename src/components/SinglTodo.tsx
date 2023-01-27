import React, { useEffect, useRef, useState } from "react";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { TodoItems } from "../models/models";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box/Box";

interface Props {
  todo: TodoItems;
  todos: TodoItems[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItems[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <form
        style={{
          border: "1px solid black",
          padding: "1rem",
          borderRadius: "0.3rem",
          margin: "1rem",
        }}
        key={todo.id}
        onSubmit={(e) => handleEdit(e, todo.id)}>
        <Typography variant="h6" noWrap>
          {edit ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              ref={inputRef}
            />
          ) : todo.isComplete ? (
            <s>{todo.todo}</s>
          ) : (
            <span>{todo.todo}</span>
          )}
        </Typography>
        <Box
          sx={{
            display: { xs: "flex", marginLeft: "65%", marginTop: "-2rem" },
          }}>
          <IconButton>
            <ModeEditOutlineRoundedIcon
              onClick={() => {
                if (!edit && !todo.isComplete) {
                  setEdit(!edit);
                }
              }}
            />
          </IconButton>
          <IconButton>
            <DeleteRoundedIcon onClick={() => handleDelete(todo.id)} />
          </IconButton>
          <IconButton>
            <DoneRoundedIcon onClick={() => handleComplete(todo.id)} />
          </IconButton>
        </Box>
      </form>
    </Box>
  );
};

export default SingleTodo;
