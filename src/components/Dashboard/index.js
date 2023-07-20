import React, {useEffect, useState} from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';

import {deleteMovie, getMovies} from '../../data/laravel';

const Dashboard = ({}) => {
    const [movies, setMovies] = useState([]);
    const [pagination, setPagination] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const fetchMovies = async (page = 1) => {
        const response = await getMovies(page);
        const movies = response.data;
        const pagination = response.meta;
        if (movies !== null && Object.keys(movies).length !== 0) {
            setMovies(movies);
            setPagination(pagination);
        }

    }

    useEffect(() => {
        fetchMovies();
    }, []);

    const handleEdit = id => {
        const [movie] = movies.filter(movie => movie.id === id);

        setSelectedMovie(movie);
        setIsEditing(true);
    };

    const handleDelete = id => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [movie] = movies.filter(movie => movie.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${movie.title} has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                const moviesCopy = movies.filter(movie => movie.id !== id);
                deleteMovie(movie.id);
                setMovies(moviesCopy);
            }
        });
    };

    const handlePageClick = (event) => {
        const page = event.selected + 1;
        console.log(
            `User requested page number ${page}`
        );
        fetchMovies(page);
    };

    return (
        <div data-testid="dashboard-component" className="container">
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <Table
                        movies={movies}
                        pagination={pagination}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        handlePageClick={handlePageClick}
                    />
                </>
            )}
            {isAdding && (
                <Add
                    movies={movies}
                    setMovies={setMovies}
                    setIsAdding={setIsAdding}
                />
            )}
            {isEditing && (
                <Edit
                    movies={movies}
                    selectedMovie={selectedMovie}
                    setMovies={setMovies}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    );
};

export default Dashboard;
