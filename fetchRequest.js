const NewsAPI = require('newsapi');

const fs = require('fs');
//To Home
//create fetch api from https://newsapi.org/docs/client-libraries/node-js
function fetchReq(source, path) {
  const array = require(path);
  const newsapi = new NewsAPI('7aa89004bfac4598b5c38740c93cc5bf');
  newsapi.v2.topHeadlines({
    //country: 'us',
    sources: source,
    language: 'en',
    pageSize: 11
  }).then(response => {
    console.log('hellow from fetchRequest')
    if(response.status == "ok") {
      fs.readFile(path, function (err, data) {
          var json = JSON.parse(data);
          var activeObj = response.articles;
          let i = 0;

          while(activeObj.length > i) {
              if(!array.some(item=> item.title === activeObj[i].title)) json.unshift(activeObj[i])
              i++
          }
          console.log(json.length)
          function remove_duplicates_es6(json) {
                let s = new Set(json);
                let it = s.values();
                return Array.from(it);
        }

          fs.writeFile(path, JSON.stringify(remove_duplicates_es6(json), null, 2), function(err){
              //console.log(json, 'json')
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
          });
          console.log('node background',array.length, ':', path)
      })
    };
  });
}
 exports.newsAPIFetch = fetchReq;
