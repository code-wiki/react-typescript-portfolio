import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from '../containers/Home';
import Blog from '../containers/Blog';

export default function root() {
    return (
        <HelmetProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </HelmetProvider>
    );
}
