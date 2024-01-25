import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Blog from '../containers/Blog';
import { HelmetProvider } from 'react-helmet-async';

export default function root() {
    return (
        <BrowserRouter>
            <HelmetProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </HelmetProvider>
        </BrowserRouter>
    );
}
