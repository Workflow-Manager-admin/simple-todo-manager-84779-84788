import React, { useState, useEffect } from "react";
import "./App.css";
import "./todo_design_system.css";
import TodoPage from "./components/TodoPage";
import AddEditTodoPage from "./components/AddEditTodoPage";

// Minimal route-state logic for SPA navigation:
const PAGE = {
  TODO_LIST: "TODO_LIST",
  ADD: "ADD",
  EDIT: "EDIT",
};

// PUBLIC_INTERFACE
function App() {
  const [todos, setTodos] = useState(() => {
    // LocalStorage for basic persistence
    let data = localStorage.getItem("todos_app_v1");
    return data ? JSON.parse(data) : [];
  });

  const [route, setRoute] = useState(PAGE.TODO_LIST);

  const [editingTodo, setEditingTodo] = useState(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("todos_app_v1", JSON.stringify(todos));
  }, [todos]);

  // Routing logic for Add/Edit/Back
  const goToAdd = () => {
    setEditingTodo(null);
    setRoute(PAGE.ADD);
  };
  const goToEdit = (todo) => {
    setEditingTodo(todo);
    setRoute(PAGE.EDIT);
  };
  const goBack = () => setRoute(PAGE.TODO_LIST);

  // CRUD Operations
  // PUBLIC_INTERFACE
  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      {
        ...todo,
        id: Date.now().toString(),
        completed: false,
      },
    ]);
    setRoute(PAGE.TODO_LIST);
  };
  // PUBLIC_INTERFACE
  const updateTodo = (id, newData) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, ...newData } : t
      )
    );
    setRoute(PAGE.TODO_LIST);
  };
  // PUBLIC_INTERFACE
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };
  // PUBLIC_INTERFACE
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <>
      {route === PAGE.TODO_LIST && (
        <TodoPage
          todos={todos}
          onAdd={goToAdd}
          onEdit={goToEdit}
          onDelete={deleteTodo}
          onToggleComplete={toggleComplete}
        />
      )}
      {(route === PAGE.ADD || route === PAGE.EDIT) && (
        <AddEditTodoPage
          onBack={goBack}
          onSave={
            route === PAGE.ADD
              ? addTodo
              : (todo) => updateTodo(editingTodo.id, todo)
          }
          initial={route === PAGE.EDIT ? editingTodo : null}
        />
      )}
    </>
  );
}

export default App;
