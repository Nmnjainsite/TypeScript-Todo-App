import { useState } from "react";
import "./App.css";
import { TodoItems } from "./models";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();
export default function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoItems[]>([]);

  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isComplete: false }]);
      setTodo("");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <InputField
              todo={todo}
              setTodo={setTodo}
              handleChange={handleChange}
            />
            <TodoList todos={todos} setTodos={setTodos} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
