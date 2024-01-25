import { Link } from 'react-router-dom';

export default function index() {
    return (
        <div>
            <div>This is home section</div>
            <Link to={'/blog'} className="">
                {'go to Blog ->'}
            </Link>
        </div>
    );
}
