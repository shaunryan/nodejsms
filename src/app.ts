import express, {Request, Response, NextFunction } from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  res.send('Got a post request!');
});

app.put('/user', (req, res) => {
  res.send('Got a PUT request user!');
});

app.delete('/delete', (req, res) => {
  res.send('Got a DELETE request user!');
});

// -- Error handling --
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500)
      .send({
          error: {
              status: 500,
              message: `${err}`
          }
      });
});

export default app;