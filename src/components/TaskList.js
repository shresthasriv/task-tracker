import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onEdit, onDelete, filter }) => {
  const getFilteredTasks = () => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  };

  const filteredTasks = getFilteredTasks();

  const getEmptyMessage = () => {
    switch (filter) {
      case 'completed':
        return {
          icon: '✅',
          title: 'No completed tasks yet',
          subtitle: 'Complete some tasks to see them here!'
        };
      case 'pending':
        return {
          icon: '⏳',
          title: 'No pending tasks',
          subtitle: 'Great job! All tasks are completed!'
        };
      default:
        return {
          icon: '📋',
          title: 'No tasks yet',
          subtitle: 'Add your first task to get started!'
        };
    }
  };

  if (filteredTasks.length === 0) {
    const emptyMessage = getEmptyMessage();
    return (
      <div className="empty-state">
        <div className="empty-icon">{emptyMessage.icon}</div>
        <h3>{emptyMessage.title}</h3>
        <p>{emptyMessage.subtitle}</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
