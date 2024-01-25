import { Helmet } from 'react-helmet';
import XYZ_IMG from '../../assets/xyz.png';

const SocialMediaShare = () => {
    return (
        <>
            <Helmet>
                <title>Hello world</title>
                <meta name="description" content="something hello world" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:title" content={'something hello world'} />
                <meta
                    property="og:description"
                    content={'something hello world'}
                />
                <meta property="og:image" content={XYZ_IMG} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={window.location.href} />
                <meta
                    property="twitter:title"
                    content={'something hello world'}
                />
                <meta
                    property="twitter:description"
                    content={'something hello world'}
                />
                <meta property="twitter:image" content={XYZ_IMG} />
                {/* Add more social media tags as needed */}
            </Helmet>
            {/* Rest of your component */}
        </>
    );
};

export default function index() {
    return (
        <div>
            <SocialMediaShare />
            <div>index</div>
        </div>
    );
}
