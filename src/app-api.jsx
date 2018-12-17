// const urls = [
//   "https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-16&sortBy=publishedAt&apiKey=89be24d8bdda4582ba470753cd519fa8"
// ];
const urls = [
  "https://newsapi.org/v2/top-headlines?sources=usa-today&apiKey=89be24d8bdda4582ba470753cd519fa8",
  "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=89be24d8bdda4582ba470753cd519fa8",
  "https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=89be24d8bdda4582ba470753cd519fa8"
];

// map every url to the promise fetch(github url)
const newsinfo = [];
Promise.all(
  urls.map(url =>
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        if (myJson.articles[0].title) {
          let apiObject = {
            source: myJson.articles[0].source.name,
            title: myJson.articles[0].title,
            description: myJson.articles[0].description,
            imgUrl: myJson.articles[0].urlToImage
            // imgUrl:
          };
          newsinfo.push(apiObject);
        }

        console.log(newsinfo);
        // console.log(myJson.articles[0].urlToImage, "first");
      })
  )
).catch(console.log("error"));

const newsApi = () => newsinfo;

export default newsApi;
