import express from 'express';

const app = express();

app.get('/ads', (req, res) => {
  return res.json([
    {id: 1, name: 'ADS 1'},
    {id: 2, name: 'ADS 2'},
    {id: 3, name: 'ADS 3'},
  ]);
})

app.listen(3333, () => console.log('Server is running'));