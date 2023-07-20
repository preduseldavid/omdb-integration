import React, {useState} from 'react';
import Swal from 'sweetalert2';
import {updateMovie} from "../../data/laravel";

const Edit = ({movies, selectedMovie, setMovies, setIsEditing}) => {
    const id = selectedMovie.id;

    const [title, setTitle] = useState(selectedMovie.title);
    const [year, setYear] = useState(selectedMovie.year);
    const [rated, setRated] = useState(selectedMovie.rated);
    const [releaseYear, setReleaseYear] = useState(selectedMovie.release_year);
    const [imdbId, setImdbId] = useState(selectedMovie.imdb_id);
    const [runtime, setRuntime] = useState(selectedMovie.runtime);
    const [genre, setGenre] = useState(selectedMovie.genre);
    const [director, setDirector] = useState(selectedMovie.director);
    const [writer, setWriter] = useState(selectedMovie.title);
    const [actors, setActors] = useState(selectedMovie.actors);
    const [plot, setPlot] = useState(selectedMovie.plot);
    const [language, setLanguage] = useState(selectedMovie.language);
    const [country, setCountry] = useState(selectedMovie.country);
    const [awards, setAwards] = useState(selectedMovie.awards);
    const [poster, setPoster] = useState(selectedMovie.poster);
    const [metascore, setMetascore] = useState(selectedMovie.metascore);
    const [imdbRating, setImdbRating] = useState(selectedMovie.imdb_rating);
    const [imdbVotes, setImdbVotes] = useState(selectedMovie.imdb_votes);
    const [type, setType] = useState(selectedMovie.type);
    const [dvd, setDvd] = useState(selectedMovie.dvd);
    const [boxOffice, setBoxOffice] = useState(selectedMovie.box_office);
    const [production, setProduction] = useState(selectedMovie.production);
    const [website, setWebsite] = useState(selectedMovie.website);

    const handleUpdate = e => {
        e.preventDefault();

        if (!imdbId) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'IMDB ID field is required.',
                showConfirmButton: true,
            });
        }

        const movie = {
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

        for (let i = 0; i < movies.length; i++) {
            if (movies[i].id === id) {
                movies.splice(i, 1, movie);
                break;
            }
        }

        updateMovie(id, movie);
        setMovies(movies);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${movie.title} has been updated.`,
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Movie</h1>
                <div style={{marginBottom: '30px', textAlign: 'right'}}>
                    <input type="submit" value="Update"/>
                    <input
                        style={{marginLeft: '12px'}}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>

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
                <label htmlFor="imdbId">IMDB ID</label>
                <input
                    id="imdbId"
                    type="text"
                    name="imdbId"
                    value={imdbId}
                    onChange={e => setImdbId(e.target.value)}
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
                    <input type="submit" value="Update"/>
                    <input
                        style={{marginLeft: '12px'}}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
};

export default Edit;
