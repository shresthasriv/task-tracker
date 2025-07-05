import React, { useState } from 'react';

const TaskItem = ({ task, onToggle, onEdit, onDelete }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDueDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = date - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return { text: `Overdue by ${Math.abs(diffDays)} day(s)`, className: 'overdue' };
    } else if (diffDays === 0) {
      return { text: 'Due today', className: 'due-today' };
    } else if (diffDays === 1) {
      return { text: 'Due tomorrow', className: 'due-tomorrow' };
    } else {
      return { text: `Due in ${diffDays} day(s)`, className: 'due-future' };
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return '🔴';
      case 'medium': return '🟡';
      case 'low': return '🟢';
      default: return '🟡';
    }
  };

  const handleDelete = () => {
    setShowDeleteModal(false);
    onDelete(task.id);
  };

  return (
    <>
      <div className={`task-item ${task.completed ? 'completed' : 'pending'}`}>
        <div className="task-content">
          <div className="task-header">
            <div className="task-checkbox">
              <input
                type="checkbox"
                id={`task-${task.id}`}
                checked={task.completed}
                onChange={() => onToggle(task.id)}
              />
              <label htmlFor={`task-${task.id}`} className="checkbox-label">
                <span className="checkmark"></span>
              </label>
            </div>
            <h3 className={`task-title ${task.completed ? 'completed-text' : ''}`}>
              {getPriorityIcon(task.priority)} {task.title}
            </h3>
          </div>
          
          {task.description && (
            <p className={`task-description ${task.completed ? 'completed-text' : ''}`}>
              {task.description}
            </p>
          )}
          
          <div className="task-meta">
            <div className="task-dates">
              <span className="task-date">
                📅 Created: {formatDate(task.createdAt)}
              </span>
              {task.dueDate && (
                <span className={`due-date ${formatDueDate(task.dueDate)?.className}`}>
                  ⏰ {formatDueDate(task.dueDate)?.text}
                </span>
              )}
            </div>
            <span className={`task-status ${task.completed ? 'status-completed' : 'status-pending'}`}>
              {task.completed ? '✅ Completed' : '⏳ Pending'}
            </span>
          </div>
        </div>

        <div className="task-actions">
          <button 
            onClick={() => onEdit(task)} 
            className="edit-btn"
            title="Edit task"
          >
            ✏️
          </button>
          <button 
            onClick={() => setShowDeleteModal(true)} 
            className="delete-btn"
            title="Delete task"
          >
            🗑️
          </button>
        </div>
      </div>

      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="delete-modal">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this task?</p>
            <p className="task-preview">"{task.title}"</p>
            <div className="modal-actions">
              <button onClick={handleDelete} className="confirm-delete-btn">
                Yes, Delete
              </button>
              <button onClick={() => setShowDeleteModal(false)} className="cancel-delete-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskItem;
