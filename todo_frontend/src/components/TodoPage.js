import React, { useState } from "react";
import TodoList from "./TodoList";
import { PlaylistIcon, TickIcon } from "./icons";

/**
 * Renders the main todo list page with header, navigation, and the floating add button.
 * @param {Object} props
 * @param {Array} props.todos - List of todos
 * @param {function} props.onAdd - Callback for add button
 * @param {function} props.onEdit - Callback for edit button per todo
 * @param {function} props.onDelete - Callback for delete button per todo
 * @param {function} props.onToggleComplete - Callback for complete/incomplete toggle
 */
const TodoPage = ({ todos, onAdd, onEdit, onDelete, onToggleComplete }) => {
  // Navigation: "0" = All, "1" = Completed
  const [filter, setFilter] = useState(0);

  const filteredTodos =
    filter === 0 ? todos : todos.filter((t) => t.completed);

  return (
    <div className="todo-app-root">
      <div className="status-bar"></div>
      {/* App Bar */}
      <div className="app-bar">
        <div className="app-bar-title">
          <span className="app-bar-title-text">TODO APP</span>
        </div>
        <div className="app-bar-calendar" aria-hidden="true"></div>
      </div>
      {/* Navigation Bar */}
      <div className="nav-bar">
        <button
          className="nav-btn"
          title="All"
          aria-label="All"
          style={{
            background: filter === 0 ? "var(--color-9395d3)" : "transparent",
            borderRadius: "50%",
          }}
          onClick={() => setFilter(0)}
        >
          <PlaylistIcon active={filter === 0} />
        </button>
        <span
          className={`nav-label typo-6`}
          style={{
            color: filter === 0 ? "var(--color-9395d3)" : "var(--color-8b8787)",
            fontWeight: filter === 0 ? 600 : 400,
          }}
        >
          All
        </span>
        <button
          className="nav-btn"
          title="Completed"
          aria-label="Completed"
          style={{
            background: filter === 1 ? "var(--color-9395d3)" : "transparent",
            borderRadius: "50%",
          }}
          onClick={() => setFilter(1)}
        >
          <TickIcon active={filter === 1} />
        </button>
        <span
          className={`nav-label typo-7`}
          style={{
            color: filter === 1 ? "var(--color-9395d3)" : "var(--color-8b8787)",
            fontWeight: filter === 1 ? 600 : 400,
          }}
        >
          Completed
        </span>
      </div>
      {/* Todos Section */}
      <div className="todos-section">
        <TodoList
          todos={filteredTodos}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      </div>
      {/* Add Floating Button */}
      <button
        className="add-todo-btn"
        title="Add New Todo"
        aria-label="Add New Todo"
        style={{
          background: "var(--color-9395d3)",
        }}
        onClick={onAdd}
      >
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" fill="none"/>
          <line x1="12" y1="7" x2="12" y2="17" stroke="white" strokeWidth="2"/>
          <line x1="7" y1="12" x2="17" y2="12" stroke="white" strokeWidth="2"/>
        </svg>
      </button>
    </div>
  );
};

export default TodoPage;
