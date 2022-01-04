import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension';
// reducer
import { getTeacherReducer } from "./reducers/teacherReducer";
import { getReviewReducer } from "./reducers/reviewReducer";
import { getEventReducer } from "./reducers/eventReducer";
import { getEventSecondReducer } from "./reducers/eventSecondReducer";



 const reducer=combineReducers({
    getTeacher:getTeacherReducer,
    getReview:getReviewReducer,
    getEvent:getEventReducer,
    getEventSecond:getEventSecondReducer,
 });


 const middleware=[thunk]; 

 const store=createStore(
     reducer,
     composeWithDevTools(applyMiddleware(...middleware))

 )

 export default store;