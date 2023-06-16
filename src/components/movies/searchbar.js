import { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import css from './movie.module.css';


const Searchbar = ({ onSubmit }) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [searchText, setSearchText] = useState(query)


  const handleChange = (event) => {
    setSearchText(event.currentTarget.value)
  }

  const handleSearchMovie = (event) => {
    event.preventDefault();
    setSearchParams({ query: searchText });
    onSubmit();
  }

  return (
    <form className={css.SearchForm}
      onSubmit={handleSearchMovie}>
      <input
        className={css.SearchFormInput}
        type="text"
        autoComplete="off"
        placeholder="Search movie"
        value={searchText}
        onChange={handleChange}
      />
      <button type="submit" className={css.SearchFormButton}>
        Search
      </button>
    </form>
  )
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar
