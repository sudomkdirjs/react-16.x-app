import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';

import ThemeProvider from './store/ThemeProvider';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <ThemeProvider>
                <App />
            </ThemeProvider> 
        </RecoilRoot>
    </React.StrictMode>, 
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
