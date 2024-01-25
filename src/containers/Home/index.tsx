import { Link } from 'react-router-dom';
import HelmetComp from '../HelmetComp';
import IMG from '../../assets/31358195_l.jpg';

export default function index() {
    return (
        <div>
            <HelmetComp
                title={'Sparta app'}
                description={'Sparta app: new generation app'}
                imageUrl={IMG}
            />
            <div>This is home section</div>
            <Link to={'/blog'} className="">
                {'go to Blog ->'}
            </Link>
        </div>
    );
}
