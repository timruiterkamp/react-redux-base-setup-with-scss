import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';

import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import AppRoutes from './routes';

ReactDOM.render(
    <Provider store={store}>
    <AppRoutes />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
