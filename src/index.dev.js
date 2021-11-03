import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
// import App components
import { App } from './components/app';

// compile App component in `#app` HTML element
ReactDOM.render(<BrowserRouter>
    {/* <Provider store={Store}> */}
        <App />
    {/* </Provider> */}
</BrowserRouter>, document.getElementById('app'));
