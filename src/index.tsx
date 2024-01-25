import './styles/index.scss';
import App from './routers/root';
import { hydrate, render } from 'react-dom';

const rootElement: HTMLElement | null = document.getElementById('root');
let shouldHydrate: boolean = false;
if (rootElement instanceof HTMLElement) {
    shouldHydrate = rootElement.hasChildNodes();
}

if (shouldHydrate) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
