import React from "react";
import TodoCard from "./TodoCard";

/**
 * Renders the todo list cards in a column.
 * @param {Object} props
 * @param {Array} props.todos
 * @param {function} props.onEdit
 * @param {function} props.onDelete
 * @param {function} props.onToggleComplete
 */
const TodoList = ({
  todos,
  onEdit,
  onDelete,
  onToggleComplete,
}) => {
  return (
    <>
      {todos.length === 0 && (
        <div style={{ color: "var(--color-8b8787)", textAlign: "center", marginTop: "60px", width: "100%" }}>
          No todos yet. Add your first one!
        </div>
      )}
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onEdit={() => onEdit(todo)}
          onDelete={() => onDelete(todo.id)}
          onToggleComplete={() => onToggleComplete(todo.id)}
        />
      ))}
    </>
  );
};

export default TodoList;
