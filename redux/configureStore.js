import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { projects } from './projects';
import { comments } from './comments';
import { biography } from './biography';
import { certificates } from './certificates';
import { favorites } from './favorites';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            projects,
            comments,
            biography,
            certificates,
            favorites
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}