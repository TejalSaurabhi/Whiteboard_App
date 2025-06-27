# Collaborative Whiteboard Application

A modern, real-time collaborative whiteboard application built with React, Node.js, and Socket.io featuring a stunning dark theme with glassmorphism effects.

## 🌟 Features

- **Real-time Collaboration**: Multiple users can draw simultaneously
- **Modern Dark Theme**: Sleek UI with neon accents and glassmorphism effects
- **Drawing Tools**: Brush, line, rectangle, circle, arrow, text, and eraser
- **User Authentication**: Secure login/register system
- **Canvas Management**: Create, share, and manage multiple canvases
- **Responsive Design**: Works on desktop and mobile devices
- **Persistent Storage**: All drawings are saved to MongoDB

## 🚀 Tech Stack

### Frontend
- React 18
- Tailwind CSS
- Socket.io Client
- React Router DOM
- React Icons
- Perfect Freehand
- Rough.js

### Backend
- Node.js
- Express.js
- Socket.io
- MongoDB with Mongoose
- JWT Authentication
- bcrypt for password hashing

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- npm or yarn

### Frontend Setup
```bash
cd whiteboard-tutorial
npm install
npm start
```

### Backend Setup
```bash
cd backend
npm install
npm start
```

### Environment Variables
Create a `.env` file in the backend directory:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

## 🎨 UI/UX Features

- **Glassmorphism Design**: Semi-transparent panels with backdrop blur
- **Neon Accent Colors**: Cyan, magenta, and purple theme
- **Smooth Animations**: Hover effects and micro-interactions
- **Modern Typography**: Inter and JetBrains Mono fonts
- **Custom Scrollbars**: Themed scrollbars matching the design

## 📱 Usage

1. Register or login to your account
2. Create a new canvas or select an existing one
3. Use the toolbar to select drawing tools
4. Customize colors and brush sizes in the toolbox
5. Share canvases with other users via email
6. Collaborate in real-time with multiple users

## 🔧 Development

### Available Scripts

#### Frontend
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests

#### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 🚀 Deployment

### Frontend
The frontend can be deployed to Vercel, Netlify, or any static hosting service.

### Backend
The backend can be deployed to Heroku, Railway, or any Node.js hosting platform.

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support or questions, please open an issue in the GitHub repository. 