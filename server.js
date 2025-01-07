const { createServer } = require('https');
const { parse } = require('url');
const fs = require('fs');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Cargar los certificados
const httpsOptions = {
  key: fs.readFileSync('./certificados/univida.key'),
  cert: fs.readFileSync('./certificados/univida.crt'),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(443, (err) => {
    if (err) throw err;
    console.log('> Servidor HTTPS corriendo en https://pagina.univida.bo');
  });
});
