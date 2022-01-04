import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension';
// reducer
import { getTeacherReducer } from "./reducers/teacherReducer";




 const reducer=combineReducers({
    getTeacher:getTeacherReducer,
 });


 const middleware=[thunk]; 

 const store=createStore(
     reducer,
     composeWithDevTools(applyMiddleware(...middleware))

 )

 export default store;