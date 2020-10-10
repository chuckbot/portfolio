import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <div 
            className="min-h-full grid"
            style={{
                gridTemplateRows: "auto 1fr auto"
            }}
        >
            <header>My Portfolio</header>
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.any,
}

export default Layout;