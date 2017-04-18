/**
 * Created by clstrfvck on 12/04/2017.
 */
//App state will be built in this file.

import { applyMiddleware, createStore } from "redux"

import reducer from "./reducers"

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());