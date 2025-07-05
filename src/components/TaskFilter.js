import React from 'react';

const TaskFilter = ({ tasks, currentFilter, onFilterChange }) => {
  const allCount = tasks.length;
  const completedCount = tasks.filter(task => task.completed).length;
  const pendingCount = tasks.filter(task => !task.completed).length;

  const filters = [
    { 
      key: 'all', 
      label: 'All', 
      count: allCount,
      icon: '📋'
    },
    { 
      key: 'pending', 
      label: 'Pending', 
      count: pendingCount,
      icon: '⏳'
    },
    { 
      key: 'completed', 
      label: 'Completed', 
      count: completedCount,
      icon: '✅'
    }
  ];

  return (
    <div className="task-filter">
      <div className="filter-tabs">
        {filters.map(filter => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`filter-tab ${currentFilter === filter.key ? 'active' : ''}`}
          >
            <span className="filter-icon">{filter.icon}</span>
            <span className="filter-label">{filter.label}</span>
            <span className="filter-count">({filter.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskFilter;
