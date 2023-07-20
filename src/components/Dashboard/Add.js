import React, {useState} from 'react';
import Swal from 'sweetalert2';

import {getMovie, searchMovie} from "../../data/omdb";
import {createMovie} from "../../data/laravel";

const Add = ({movies, setMovies, setIsAdding}) => {
    const [search, setSearch] = useState('');
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [rated, setRated] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [imdbId, setImdbId] = useState('');
    const [runtime, setRuntime] = useState('');
    const [genre, setGenre] = useState('');
    const [director, setDirector] = useState('');
    const [writer, setWriter] = useState('');
    const [actors, setActors] = useState('');
    const [plot, setPlot] = useState('');
    const [language, setLanguage] = useState('');
    const [country, setCountry] = useState('');
    const [awards, setAwards] = useState('');
    const [poster, setPoster] = useState('');
    const [metascore, setMetascore] = useState('');
    const [imdbRating, setImdbRating] = useState('');
    const [imdbVotes, setImdbVotes] = useState('');
    const [type, setType] = useState('');
    const [dvd, setDvd] = useState('');
    const [boxOffice, setBoxOffice] = useState('');
    const [production, setProduction] = useState('');
    const [website, setWebsite] = useState('');

    const handleAdd = e => {
        e.preventDefault();

        console.log(imdbId);

        const id = movies.length + 1;
        const newMovie = {
            id,
            title,
            year,
            rated,
            release_year: releaseYear,
            imdb_id: imdbId,
            runtime,
            genre,
            director,
            writer,
            actors,
            plot,
            language,
            country,
            awards,
            poster,
            metascore,
            imdb_rating: imdbRating,
            imdb_votes: imdbVotes,
            type,
            dvd,
            box_office: boxOffice,
            production,
            website,
        };

        movies.push(newMovie);
        createMovie(newMovie);
        setMovies(movies);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${title} movie been Added.`,
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const updateImdbId = async e => {
        e.preventDefault();

        const imdbId = e.target.value;

        // Get all movie data from OMDB and autofill all the fields
        const movie = await getMovie(imdbId);
        if (!movie || movie.Response !== 'True') {
            return;
        }
        setMovieData(movie);
    };

    const autofill = async e => {

        // Search for Movie
        const movie = await searchMovie(search);
        if (!movie || movie.Response !== 'True') {
            return;
        }
        setMovieData(movie);
    };

    const setMovieData = (movie) => {
        let dvd = movie.DVD && movie.DVD !== 'N/A' ? (new Date(movie.DVD).toISOString().split('T')[0]) : null;
        let releaseYear = movie.Released && movie.Released !== 'N/A' ? (new Date(movie.Released).getFullYear()) : null;
        let imdbVotes = parseInt(movie.imdbVotes, 10);

        setTitle(movie.Title);
        if (movie.Year !== 'N/A') setYear(movie.Year);
        setRated(movie.Rated);
        if (releaseYear) setReleaseYear(releaseYear);
        setImdbId(movie.imdbID);
        setRuntime(movie.Runtime);
        setGenre(movie.Genre);
        setDirector(movie.Director);
        setWriter(movie.Writer);
        setActors(movie.Actors);
        setPlot(movie.Plot);
        setLanguage(movie.Language);
        setCountry(movie.Country);
        setAwards(movie.Awards);
        setPoster(movie.Poster);
        if (movie.Metascore !== 'N/A') setMetascore(movie.Metascore);
        setImdbRating(movie.imdbRating);
        setImdbVotes(imdbVotes);
        setType(movie.Type);
        setBoxOffice(movie.BoxOffice);
        setProduction(movie.Production);
        setWebsite(movie.Website);
        if (dvd) setDvd(dvd);
    }

    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Movie</h1>

                <div style={{marginTop: '30px', marginBottom: '30px', textAlign: 'right'}}>
                    <input
                        placeholder="Search OMDB Movie by Title..."
                        id="search"
                        type="text"
                        name="search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <input

                        style={{marginLeft: '12px'}}
                        className="button"
                        type="button"
                        value="Search & Autofill"
                        onClick={() => autofill(false)}
                    />
                </div>
                {poster && (
                    <div style={{marginTop: '30px', marginBottom: '30px', textAlign: 'center'}}>
                        <img src={poster} alt={'Poster'} className='align-center'/>
                    </div>
                )}
                <br/>

                <label htmlFor="imdbId">IMDB ID</label>
                <input
                    id="imdbId"
                    type="text"
                    name="imdbId"
                    value={imdbId}
                    onChange={e => updateImdbId(e)}
                />
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label htmlFor="year">Year</label>
                <input
                    id="year"
                    type="text"
                    name="year"
                    value={year}
                    onChange={e => setYear(e.target.value)}
                />
                <label htmlFor="rated">Rated</label>
                <input
                    id="rated"
                    type="text"
                    name="rated"
                    value={rated}
                    onChange={e => setRated(e.target.value)}
                />
                <label htmlFor="releaseYear">Release Year</label>
                <input
                    id="releaseYear"
                    type="text"
                    name="releaseYear"
                    value={releaseYear}
                    onChange={e => setReleaseYear(e.target.value)}
                />
                <label htmlFor="runtime">Runtime</label>
                <input
                    id="runtime"
                    type="text"
                    name="runtime"
                    value={runtime}
                    onChange={e => setRuntime(e.target.value)}
                />
                <label htmlFor="genre">Genre</label>
                <input
                    id="genre"
                    type="text"
                    name="genre"
                    value={genre}
                    onChange={e => setGenre(e.target.value)}
                />
                <label htmlFor="director">Director</label>
                <input
                    id="director"
                    type="text"
                    name="director"
                    value={director}
                    onChange={e => setDirector(e.target.value)}
                />
                <label htmlFor="writer">Writer</label>
                <input
                    id="writer"
                    type="text"
                    name="writer"
                    value={writer}
                    onChange={e => setWriter(e.target.value)}
                />
                <label htmlFor="actors">Actors</label>
                <input
                    id="actors"
                    type="text"
                    name="actors"
                    value={actors}
                    onChange={e => setActors(e.target.value)}
                />
                <label htmlFor="plot">Plot</label>
                <input
                    id="plot"
                    type="text"
                    name="plot"
                    value={plot}
                    onChange={e => setPlot(e.target.value)}
                />
                <label htmlFor="language">Language</label>
                <input
                    id="language"
                    type="text"
                    name="language"
                    value={language}
                    onChange={e => setLanguage(e.target.value)}
                />
                <label htmlFor="country">Country</label>
                <input
                    id="country"
                    type="text"
                    name="country"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                />
                <label htmlFor="awards">Awards</label>
                <input
                    id="awards"
                    type="text"
                    name="awards"
                    value={awards}
                    onChange={e => setAwards(e.target.value)}
                />
                <label htmlFor="poster">Poster</label>
                <input
                    id="poster"
                    type="text"
                    name="poster"
                    value={poster}
                    onChange={e => setPoster(e.target.value)}
                />
                <label htmlFor="metascore">Metascore</label>
                <input
                    id="metascore"
                    type="text"
                    name="metascore"
                    value={metascore}
                    onChange={e => setMetascore(e.target.value)}
                />
                <label htmlFor="imdbRating">IMDB Rating</label>
                <input
                    id="imdbRating"
                    type="text"
                    name="imdbRating"
                    value={imdbRating}
                    onChange={e => setImdbRating(e.target.value)}
                />
                <label htmlFor="imdbVotes">IMDB Votes</label>
                <input
                    id="imdbVotes"
                    type="text"
                    name="imdbVotes"
                    value={imdbVotes}
                    onChange={e => setImdbVotes(e.target.value)}
                />
                <label htmlFor="type">type</label>
                <input
                    id="type"
                    type="text"
                    name="type"
                    value={type}
                    onChange={e => setType(e.target.value)}
                />
                <label htmlFor="dvd">Dvd</label>
                <input
                    id="dvd"
                    type="date"
                    name="dvd"
                    value={dvd}
                    onChange={e => setDvd(e.target.value)}
                />
                <label htmlFor="boxOffice">Box Office</label>
                <input
                    id="boxOffice"
                    type="text"
                    name="boxOffice"
                    value={boxOffice}
                    onChange={e => setBoxOffice(e.target.value)}
                />
                <label htmlFor="production">Production</label>
                <input
                    id="production"
                    type="text"
                    name="production"
                    value={production}
                    onChange={e => setProduction(e.target.value)}
                />
                <label htmlFor="website">Website</label>
                <input
                    id="website"
                    type="text"
                    name="website"
                    value={website}
                    onChange={e => setWebsite(e.target.value)}
                />

                <div style={{marginTop: '30px', marginBottom: '30px', textAlign: 'center'}}>
                    <input type="submit" value="Add"/>
                    <input
                        style={{marginLeft: '12px'}}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
};

export default Add;
