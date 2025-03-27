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
     labels,
     series,
  };
  const options = {
    width: "600px",
    height: "500px",
    axisY: {
      onlyInteger:true
  }
}
  new Chartist.Line(".ct-chart", updatedData, options);

});

async function getPeopleInfo() {
  let getPeople = await fetch("https://swapi.dev/api/people/");
  let people = await getPeople.json();
  console.log(people);
  return people;
}

getPeopleInfo().then((people) => {
    const labels = people.results.map((people) => people.name);
    const series = [
        people.results.map(people => people.films.length ),
      ];
      const barChartData = {
        labels,
        series,
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
