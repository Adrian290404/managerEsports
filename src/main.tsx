import { createRoot } from 'react-dom/client';
import App from './App';
import { GlobalStyles } from "./styles/globalStyles"

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("Root element not found");
}

createRoot(rootElement).render(
    <>
        <GlobalStyles />
        <App />
    </>
);
