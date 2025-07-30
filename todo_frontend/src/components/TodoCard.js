import React from "react";
import { CheckIcon, PencilIcon, TrashIcon } from "./icons";

/**
 * Renders a single todo card.
 * @param {Object} props
 * @param {Object} props.todo - Todo item
 * @param {function} props.onEdit
 * @param {function} props.onDelete
 * @param {function} props.onToggleComplete
 */
const TodoCard = ({ todo, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className="todo-card" style={{
      opacity: todo.completed ? 0.55 : 1,
      textDecoration: todo.completed ? "line-through" : "none",
    }}>
      <div className="todo-card-titles">
        <span className="todo-title">{todo.title}</span>
        <span className="todo-subtitle">{todo.detail || <>&nbsp;</>}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          className="todo-icon-btn"
          title={todo.completed ? "Mark incomplete" : "Mark complete"}
          aria-label={todo.completed ? "Mark incomplete" : "Mark complete"}
          onClick={onToggleComplete}
        >
          <CheckIcon filled={todo.completed} />
        </button>
        <button className="todo-icon-btn" title="Edit" aria-label="Edit" onClick={onEdit}>
          <PencilIcon />
        </button>
        <button className="todo-icon-btn" title="Delete" aria-label="Delete" onClick={onDelete}>
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
