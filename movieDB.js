//movieDatabase Exercise - Objects & Arrays

//Object Database
var movies = [
  {
    title: "In Bruges",
    rating: "5",
    hasWatched: true,
  },
  {
    title: "Frozen",
    rating: "4.5",
    hasWatched: false,
  },
  {
    title: "Mad Max Fury Road",
    rating: "5",
    hasWatched: true,
  },
  {
    title: "Les Miserables",
    rating: "3.5",
    hasWatched: false,
  },

]
//first way to solve problem
movies.forEach(function(movie){
  var result = "You have ";
  if(movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  console.log(result)
});

//second way to solve problem
function buildString(movie) {
  var result = "You have ";
  if(movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result;
}

movies.forEach(function(movie) {
  console.log(buildString(movie));
});
