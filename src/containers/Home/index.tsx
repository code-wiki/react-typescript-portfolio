import { Link } from 'react-router-dom';

const Home = () => {
    const TWITTER_LINK = 'https://twitter.com/_aditya_gautam';
    const LINKEDIN_LINK = 'https://www.linkedin.com/in/me-adi';
    return (
        <div className="tw-container tw-mx-auto tw-h-full tw-mt-10 tw-pt-10">
            <div className="d-flex justify-content-center ">
                <h3 className="w-50">{'<Hello World />'}</h3>
                <br />
                <br />
            </div>
            <div className="d-flex justify-content-center">
                <p className="w-50 tw-text-justify">
                    I am Aditya Gautam, an entrepreneur, consultant, and an
                    advisor with a rich background in technology and business
                    leadership. Currently, I serve as the Chief Technology
                    Officer (CTO) at Turf, where I am spearheading the
                    development of my platform that serves eSports Industry.
                    <br />
                    <br />
                    My tenure as a CTO is marked by a strategic approach to
                    technology leadership, with a keen focus on aligning
                    tech-driven initiatives with overarching business
                    objectives. I excel in the creation, development, and
                    management of products, guiding them from their initial
                    stages to successful completion. Over my 8+ years in the
                    industry, I have co-founded multiple startups, leading them
                    to successes that have yielded approximately sevenfold
                    returns for investors.
                    <br />
                    <br />
                    My track record is a reflection of my exceptional strategic
                    thinking, astute business acumen, and an in-depth
                    understanding of market dynamics. These qualities have been
                    instrumental in the successes I’ve achieved.
                    <br />
                    <br />
                    In addition to my entrepreneurial ventures, I have had the
                    privilege of working with prestigious organisations like
                    Hewlett Packard and the Tezos India Foundation. These
                    experiences have further honed my diverse skill set and
                    provided me with extensive experience, enabling me to
                    consistently deliver outstanding results in various
                    technology and business environments.
                    <br />
                    <br />
                    You can reach me at{' '}
                    <Link
                        to={'/'}
                        onClick={() => window.open(TWITTER_LINK, '_blank')}
                        color="tw-color-blue"
                    >
                        Twitter
                    </Link>
                    &nbsp;or&nbsp;
                    <Link
                        to={'/'}
                        onClick={() => window.open(LINKEDIN_LINK, '_blank')}
                    >
                        LinkedIn
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default Home;
