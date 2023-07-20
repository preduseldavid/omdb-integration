import React from 'react';

const Header = ({setIsAdding}) => {
    return (
        <header>
            <h1>Movies Management Software</h1>
            <div style={{marginTop: '0px', marginBottom: '40px', float: 'right'}}>
                <button onClick={() => setIsAdding(true)}>Add Movie</button>
            </div>
        </header>
    );
};

export default Header;
