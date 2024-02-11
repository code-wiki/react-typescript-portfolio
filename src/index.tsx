import './styles/index.scss';
import App from './routers/root';
import Portfolio from './containers/index';
import { hydrate, render } from 'react-dom';

const rootElement: HTMLElement | null = document.getElementById('root');
let shouldHydrate: boolean = false;
if (rootElement instanceof HTMLElement) {
    shouldHydrate = rootElement.hasChildNodes();
}

const PortfolioApp = () => (
    <Portfolio>
        <App />
    </Portfolio>
);

if (shouldHydrate) {
    hydrate(<PortfolioApp />, rootElement);
} else {
    render(<PortfolioApp />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
