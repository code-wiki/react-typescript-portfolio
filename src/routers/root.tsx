import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';

export default function root() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}
