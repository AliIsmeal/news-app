const urls = [
  "https://newsapi.org/v2/top-headlines?sources=usa-today&apiKey=89be24d8bdda4582ba470753cd519fa8",
  "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=89be24d8bdda4582ba470753cd519fa8",
  "https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=89be24d8bdda4582ba470753cd519fa8",
  "https://newsapi.org/v2/top-headlines?sources=cbc-news&apiKey=89be24d8bdda4582ba470753cd519fa8",
  "https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=89be24d8bdda4582ba470753cd519fa8",
  "https://newsapi.org/v2/top-headlines?sources=news24&apiKey=89be24d8bdda4582ba470753cd519fa8"
];

// map every url to the promise fetch(github url)
let newsinfo = [];
console.log(newsinfo, "i'm news info");
const alldata = urls.map(url =>
  fetch(url).then(function(response) {
    return response.json();
  })
);

const newsApi = () => {
  return Promise.all(alldata)
    .then(function(values) {
      console.log(values);

      return values;
    })
    .catch(error => console.log(error));
};

export default newsApi;
