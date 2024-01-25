import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import HelmetComp from '../containers/HelmetComp';
import IMG from '../assets/31358195_l.jpg';
import Blog from '../containers/Blog';

export default function root() {
    return (
        <BrowserRouter>
            <HelmetComp
                title={'Sparta app'}
                description={'Sparta app: new generation app'}
                imageUrl={IMG}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </BrowserRouter>
    );
}
