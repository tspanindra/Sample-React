import express from 'express';
import config from './config';
import serverRender from './renderers/server';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const initialContent = serverRender()
	res.render('index', { initialContent : initialContent });
});

app.listen(config.port, function listenHandler() {
  console.info(`listening on port ${config.port}...`);
});