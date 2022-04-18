import { createRoot } from 'react-dom/client';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools} from "redux-devtools-extension";
import { Provider } from 'react-redux';
import rootReducer from "./redux/reducers";
import thunk from 'redux-thunk';

import App from './App';
import './index.css';

const container = document.getElementById('root');
const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);


const root = createRoot(container);
root.render(
<Provider store={store}>
    <App />
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
