import { Link } from 'react-router-dom';
import XYZ_IMG from '../../assets/xyz.png';
import HelmetComp from '../HelmetComp';

export default function index() {
    return (
        <div>
            <HelmetComp
                title={'Pluto app'}
                description={'Pluto app: Old generation app'}
                imageUrl={XYZ_IMG}
            />
            <div>Hi this is the blog section</div>
            <Link to="/">{'Go to home ->'}</Link>
        </div>
    );
}
