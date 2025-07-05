import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { getUser, removeUser, getTasks, saveTasks } from './utils/localStorage';
import { sampleTasks } from './utils/sampleData';
import './styles/App.css';

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedUser = getUser();
    if (savedUser) {
      setUser(savedUser);
    }
    
    const savedTasks = getTasks();
    
    // If no tasks exist, load sample data for demonstration
    if (savedTasks.length === 0) {
      setTasks(sampleTasks);
      // Save sample tasks to localStorage so they persist
      saveTasks(sampleTasks);
    } else {
      setTasks(savedTasks);
    }
    
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      saveTasks(tasks);
    }
  }, [tasks, isInitialized]);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    removeUser();
    setUser(null);
    setTasks([]);
    setFilter('all');
    setEditingTask(null);
    setIsInitialized(false);
  };

  const handleAddTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      ...taskData,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleEditTask = (taskData) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === editingTask.id
          ? { ...task, ...taskData }
          : task
      )
    );
    setEditingTask(null);
  };

  const handleToggleTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleEditClick = (task) => {
    setEditingTask(task);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>📋 Personal Task Tracker</h1>
          <div className="user-info">
            <span>Welcome, {user}!</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="main-content">
          <TaskForm
            onSubmit={editingTask ? handleEditTask : handleAddTask}
            editingTask={editingTask}
            onCancel={handleCancelEdit}
          />

          <div className="tasks-section">
            <TaskFilter
              tasks={tasks}
              currentFilter={filter}
              onFilterChange={setFilter}
            />

            <TaskList
              tasks={tasks}
              filter={filter}
              onToggle={handleToggleTask}
              onEdit={handleEditClick}
              onDelete={handleDeleteTask}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
