import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import EmployeeRouter from './routes/EmployeeRouter.js';
import RoleRouter from './routes/RoleRouter.js';
import TimeOffRequestRouter from './routes/TimeOffRequestRouter.js';
import ScheduleTemplateRouter from './routes/ScheduleTemplateRouter.js';
import AuthRouter from './routes/AuthRouter.js';

dotenv.config();
const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to database"));

app.use(cors());
app.use(express.json());
//to serve react app
app.use(express.static(path.resolve(path.dirname(''), '../client/build')));


const sendApiDoc = (req, res) => {
  res.sendFile('apiDoc.html', { root: path.dirname('')});
}

const sendAppIndex = (req, res) => {
  //res.sendFile('index.html');
  res.sendFile('apiDoc.html', { root: path.dirname('')});
}

app.get('/', sendAppIndex);
app.get('/api/', sendApiDoc);

app.use('/api/Employee', EmployeeRouter);
app.use("/api/Role", RoleRouter);
app.use("/api/TimeOffRequest", TimeOffRequestRouter);
app.use("/api/ScheduleTemplate", ScheduleTemplateRouter);
app.use("/api/Auth", AuthRouter);

app.listen(PORT, () => console.log(`listening on ${PORT}`));

