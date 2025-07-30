import React, { useState } from "react";

/**
 * Add/Edit todo form - matches extracted/figma design.
 * @param {object} props
 * @param {function} props.onBack - callback for back navigation
 * @param {function} props.onSave - callback({title, detail})
 * @param {object|null} props.initial - initial todo to edit (or null)
 */
const AddEditTodoPage = ({ onBack, onSave, initial }) => {
  const [title, setTitle] = useState(initial ? initial.title : "");
  const [detail, setDetail] = useState(initial ? initial.detail || "" : "");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Please enter a title.");
      return;
    }
    setError(null);
    onSave({
      title: title.trim(),
      detail: detail.trim(),
      completed: initial ? initial.completed : false,
    });
  };

  return (
    <div className="add-todo-root">
      <div className="status-bar"></div>
      <div className="add-page-app-bar">
        <div className="add-page-titlebox">
          <span className="add-page-title-text">{initial ? "Edit Task" : "Add Task"}</span>
        </div>
        <button
          type="button"
          title="Back"
          style={{
            position: "absolute",
            left: 16,
            top: 40,
            background: "none",
            border: "none",
            width: 25,
            height: 25,
            cursor: "pointer"
          }}
          aria-label="Back"
          onClick={onBack}
        >
          {/* Left Chevron SVG */}
          <svg viewBox="0 0 24 24" width={25} height={25}>
            <polyline points="15 18 9 12 15 6" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="input-group" style={{ marginTop: 160 }}>
          <label htmlFor="todoTitle" className="input-label">
            Title
          </label>
          <input
            type="text"
            id="todoTitle"
            maxLength={64}
            placeholder="Enter task title"
            autoComplete="off"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <div className="input-underline"></div>
        </div>
        <div className="input-group">
          <label htmlFor="todoDetail" className="input-label">
            Detail
          </label>
          <textarea
            id="todoDetail"
            rows={2}
            maxLength={256}
            placeholder="Enter details"
            value={detail}
            onChange={e => setDetail(e.target.value)}
          />
          <div className="input-underline"></div>
        </div>
        {error &&
          <div style={{ color: "#d32f2f", textAlign: "center", marginTop: 12 }}>{error}</div>
        }
        <button className="add-task-btn" type="submit" style={{ marginTop: 40 }}>
          {initial ? "Save" : "ADD"}
        </button>
      </form>
    </div>
  );
};

export default AddEditTodoPage;
