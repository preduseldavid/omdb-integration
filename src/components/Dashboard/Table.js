import React from 'react';
import ReactPaginate from 'react-paginate';

const Table = ({movies, pagination, handleEdit, handleDelete, handlePageClick}) => {

    return (
        <div className="contain-table">
            <table className="striped-table">
                <thead>
                </thead>
                <tbody>
                {movies.length > 0 ? (
                    movies.map((movie, i) => (
                        <tr key={movie.id}>

                            <td><img src={movie.poster} alt={'Poster'}/></td>
                            <td>
                                <h5><b>ID:</b> {movie.id}</h5>
                                <h5><b>Title:</b> {movie.title}</h5>
                                <p><b>Year:</b> {movie.year}</p>
                                <p><b>Genre:</b> {movie.genre}</p>
                                <p><b>Actors:</b> {movie.actors}</p>
                                <p><b>Plot:</b> {movie.plot}</p>

                                <button
                                    onClick={() => handleEdit(movie.id)}
                                    className="button muted-button"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => handleDelete(movie.id)}
                                    className="button muted-button"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={7}>No Movies</td>
                    </tr>
                )}
                </tbody>
            </table>

            <ReactPaginate
                className='pagination'
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={parseInt((pagination.total + pagination.per_page - 1) / pagination.per_page)}
                previousLabel="< prev"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default Table;
