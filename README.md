# 🌍 FlagMaster

A fun and interactive web-based game where you test your knowledge of world flags!  
When a flag appears on the screen, type the correct country name to earn points.  
If you guess wrong, you’ll see a “Better luck next time!” message.

---

## 🎮 How to Play

1. A random country flag will be displayed.  
2. Type your answer (the country name) in the input box.  
3. Click **Submit**.  
4. If correct → Your score increases!  
   If incorrect → You’ll get a “Game Over and Final Score” message.  
5. Keep playing to see how many you can get right in a row!

---


## 🧠 Features

- Dynamic flag display using EJS templates  
- Score tracking system stored in PostgreSQL  
- Real-time feedback for each answer  
- Clean, responsive, and user-friendly design  
- Built with Node.js and Express for backend logic  

---

## 🛠️ Tech Stack

**Frontend:** HTML, CSS, JavaScript, EJS  
**Backend:** Node.js, Express.js  
**Database:** PostgreSQL  

---

## ⚙️ Installation & Setup

To run this project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-username/FlagMaster.git

# 2️⃣ Move into the project directory
cd FlagMaster

# 3️⃣ Install dependencies
npm install

# 4️⃣ Setup your PostgreSQL database
# Create a database and update connection settings in your config file or .env

# 5️⃣ Start the server
npm start