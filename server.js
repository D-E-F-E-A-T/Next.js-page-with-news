const app = require('express')()
const next = require('next')
const server = require('http').Server(app)
//const io = require('socket.io')(server)

const dev = process.env.NODE_ENV !== 'production'

const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

const newsApi = require('./fetchRequest.js'); //example newsApi(country, sources, path)
var cron = require('node-cron');

//execute every 1 min //https://crontab.guru/#15_14_1_*_*
cron.schedule('*/1 * * * *', function(){
	newsApi.newsAPIFetch('time', './data/time.json');
	console.log('working!!!! -- hellow from cron autostart')
});

nextApp.prepare()
.then(() => {
  app.get('/news/:title', (req, res) => {
    const actualPage = '/detail'
    const queryParamsss = { title: req.params.title }
    nextApp.render(req, res, actualPage, queryParamsss)
  })

  app.get('*', (req, res) => {
	  //newsApi.newsAPIFetch('time', './data/time.json');
    return nextHandler(req, res)
  })

  server.listen(3000, (err) => {
    if (err) process.exit(0)
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
