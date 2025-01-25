# 📚 Bound to Read

**Bound to Read** is a web application designed for book lovers who want a personalized library experience. Users can get recommendations based on their favorite books or recent reads. The project is built using **Next.js** for the frontend and **Express.js** for the backend.

---

## ✨ Features

- **📖 Personalized Library**: Users can keep track of books they've read or are currently reading.
- **🔍 Recommendations**: Get book recommendations based on your favorite books or recent reads.
- **🔒 User Authentication**: Secure login and signup for personalized user experience.

---

## 🛠 Tech Stack

- **Frontend**: Next.js
- **Backend**: Express.js
- **Database**: MongoDB (or other preferred databases)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **More**: more stacks to be added as the project is under development

---

## ⚙️ Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/bound-to-read.git
   cd bound-to-read
   ```

2. **Install dependencies**:

   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Environment Variables**:  
   Create a `.env` file in the backend directory and add your environment variables.

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application**:

   ```bash
   # Start the frontend
   cd frontend
   npm run dev

   # Start the backend
   cd ../backend
   npm start
   ```

---

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Submit a pull request.
