import React, { ComponentProps } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Header';

const Portfolio: React.FC<ComponentProps<'div'>> = ({ children }) => {
    return (
        <BrowserRouter>
            <div className="tw-h-screen">
                <Navbar />
                {children}
            </div>
        </BrowserRouter>
    );
};

export default Portfolio;
