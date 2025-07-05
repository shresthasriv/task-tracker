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
- **Task Display**: 
  - 📅 Shows creation date and time for each task
  - 🎨 Visual distinction between completed and pending tasks
  - 📱 Responsive design for mobile and desktop
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

## 📱 Responsive Design
The application is fully responsive and works seamlessly on:
- 💻 Desktop (1200px+)
- 📱 Tablet (768px - 1199px)
- 📱 Mobile (320px - 767px)

## 🔗 Live Demo
[Link to deployed application will be added here]

## 🖼 Screenshots


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
