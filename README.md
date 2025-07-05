# Personal Task Tracker

## 📖 Description
A modern, responsive personal task management application built with React. This app allows users to create, edit, delete, and organize their tasks with an intuitive and clean interface. Tasks are automatically saved to localStorage for persistence across browser sessions.

## 🚀 Features
- **Simple Login System**: Username-based login with localStorage persistence
- **Task Management**: 
  - ✅ Add new tasks with title and optional description
  - ✏️ Edit existing tasks inline
  - 🗑️ Delete tasks with confirmation modal
  - ☑️ Toggle task completion status
- **Task Filtering**: 
  - 📋 View All tasks
  - ⏳ Filter by Pending tasks
  - ✅ Filter by Completed tasks
  - 🔢 Task count for each filter category
- **Data Persistence**: All tasks and user data saved to localStorage
- **Modern UI**: Clean, gradient-based design with smooth animations

## 🛠 Setup Instructions
1. Clone the repository
```bash
git clone https://github.com/shresthasriv/task-tracker.git
cd task-tracker
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## 🧰 Technologies Used
- **React.js** (18.x) - Frontend framework
- **React Hooks** - useState, useEffect for state management
- **CSS3** - Custom styling with gradients and animations
- **localStorage API** - Data persistence
- **Create React App** - Project setup and build tools

## 🔗 Live Demo
https://task-tracker-ruddy-one.vercel.app/

## 🖼 Screenshots
![image](https://github.com/user-attachments/assets/85df2d87-b7e2-4183-8e7e-c86e785ea837)
![image](https://github.com/user-attachments/assets/db8a0cfd-5d3e-4750-bfd3-6d24718cf08b)
![image](https://github.com/user-attachments/assets/c32ff951-e292-4485-8a06-11e5b7a09db1)



## 📁 Project Structure
```
task-tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.js          # User authentication component
│   │   ├── TaskForm.js       # Add/Edit task form
│   │   ├── TaskItem.js       # Individual task display
│   │   ├── TaskList.js       # Task list container
│   │   └── TaskFilter.js     # Filter tabs component
│   ├── utils/
│   │   └── localStorage.js   # localStorage utility functions
│   ├── styles/
│   │   ├── App.css          # Main app styles
│   ├── App.js               # Main application component
│   ├── index.js             # App entry point
│   └── index.css            # Global styles
├── README.md
└── package.json
```
