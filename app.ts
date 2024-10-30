import express from 'express';
import config from 'config';
import { AppDataSource } from './db/dbConnection';
import employeeRouter from './routes/EmployeeRouter';
import { HandleGlobalError } from './middleware/HandleGlobalError';
import { SERVER_PORT } from './constants/CommonConstants';
import { LoggerUtil } from './utils/Logger';

const app = express();
app.use(express.json());
app.use('/employees', employeeRouter);
app.use(HandleGlobalError);

const port = config.get(SERVER_PORT);

AppDataSource.initialize()
  .then(() => {
    LoggerUtil.info('Database connection established');
    app.listen(port, () => {
      LoggerUtil.info(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    LoggerUtil.error('Error during Data Source initialization');
    console.error(error);
  });
