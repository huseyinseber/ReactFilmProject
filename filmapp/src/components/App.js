import React from "react";
import Dropdown from "./Dropdown";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import HomePage from "./HomePage";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//require("dotenv").config();

// console.log(process.env.REACT_APP_API_KEY);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state.value = -1;
  }

  state = {
    movies: [],
    searchQuery: "",
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=1d31d678e89c186c5093962e0b2d3f7e&language=en-US&page=1`
    );
    this.setState({ movies: response.data.results });
  }

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter(
     
      (m) => m.id !== movie.id
    );

    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (event) => {
    // console.log(event.target.value)
    this.setState({ searchQuery: event.target.value });
  };
  searchDropdown = (event) => {
    this.setState({ value: event.target.value });
  };
  searchDropdownSubmit = (movie) => {
    alert("Your favorite flavor is: " + this.state.value);

    console.log(this.state.value);

    movie.preventDefault();
  };

  render() {
    //Filtreleme kodu
    let filteredMovies = this.state.movies.filter((movie) => {
      var query =
        movie.vote_average >= this.state.value &&
        movie.title
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1;
      return query;
    });

    return (
      <Router>
        <div className="container">
          <Menu />
          <Switch>
            <Route path="/homepage" component={HomePage} />

            <Route
              path="/"
              render={() => (
                <React.Fragment>
                  <div className="row">
                    <Dropdown
                      searchDropdownProp={this.searchDropdown}
                      searchDropdownSubProp={this.searchDropdownSubmit}
                    />

                    <div className="col-lg-12">
                      <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                  </div>

                  <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
                  />
                </React.Fragment>
              )}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
