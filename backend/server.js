const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRotes');
const { json } = require('express/lib/response');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');


dotenv.config();
app.use(express.json());

connectDB();



app.use('/api/user',userRouter);
app.use('/api/notes',noteRouter);



const  path = require('path');
 __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}



app.use(notFound);
app.use(errorHandler);


   const PORT = process.env.PORT;

app.listen(PORT,console.log(`Server running on port ${PORT}`));