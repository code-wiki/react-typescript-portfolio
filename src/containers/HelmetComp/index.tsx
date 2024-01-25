import { Helmet } from 'react-helmet';

export default function HelmetComp({ title, description, imageUrl }: any) {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                {/* Open Graph / Facebook */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={imageUrl} />
                {/* Add more social media tags as needed */}
            </Helmet>
            {/* Rest of your component */}
        </>
    );
}
