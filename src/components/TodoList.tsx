import React from "react";

import { TodoItems } from "../models";
import SingleTodo from "./SinglTodo";

interface Props {
  todos: TodoItems[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItems[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <>
      {todos.map((todo) => (
        <SingleTodo
          todos={todos}
          setTodos={setTodos}
          key={todo.id}
          todo={todo}
        />
      ))}
    </>
  );
};

export default TodoList;
