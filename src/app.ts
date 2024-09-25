import 'dotenv/config';
import express, { Request, Response } from 'express';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import apiRouter from './router';
import { errorHandler } from './utils/errorHandler';
import { dbConnection } from './database';
import swaggerJSDoc from 'swagger-jsdoc'; 
import { swaggerDocument } from './swagger'; 
import swaggerUi from 'swagger-ui-express'; 

dbConnection();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(morgan('dev'));
app.use(
  cors({
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    allowedHeaders: 'Content-Type,Authorization',
  })
);

app.get('/', function (req: Request, res: Response) {
  res.send({
    name: 'Devsafio API',
    environment: process.env.NODE_ENV,
  });
});

app.use('/api', apiRouter);

const specs = swaggerJSDoc(swaggerDocument);
app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(specs)
);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);
