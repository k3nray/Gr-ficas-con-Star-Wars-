var data = {
  // A labels array that can contain any sort of values
  labels: [],
  // Our series array that contains series objects or in this case series data arrays
  series: [[5, 2, 4, 2, 0]],
};
// As options we currently only set a static size of 300x200 px
var options = {
  width: "600px",
  height: "500px",
  axisY: {
    onlyInteger:true
}
  
};
// In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
new Chartist.Line(".ct-chart", data, options);

async function getmoviesInfo() {
  let getMovies = await fetch("https://swapi.dev/api/films/");
  let movies = await getMovies.json();
  let title = movies.title;
  console.log(movies);
  return movies;
}
getmoviesInfo();
getmoviesInfo().then((movies) => {
  const labels = movies.results.map((movie) => movie.title);
  const series = [
    movies.results.map((movie) => parseInt(movie.release_date.split("-")[0])),
  ];
  const updatedData = {
    labels: labels,
    series: series,
  };
  new Chartist.Line(".ct-chart", updatedData, options);

});

async function getPeopleInfo() {
  let getPeople = await fetch("https://swapi.dev/api/people/");
  let people = await getPeople.json();
  console.log(people);
  return people;
}
getPeopleInfo();
getPeopleInfo().then((people) => {
    const labels = people.results.map((people) => people.name);
    const series = [
        people.results.map(people => people.films.length ),
      ];
      const barChartData = {
        labels: labels,
        series: series,
      };
        const barChartOptions={
            width:'600px',
            height:'500px',
            axisY: {
                onlyInteger:true
        }
      }
      new Chartist.Bar(".cT-chart", barChartData, barChartOptions);

    });
