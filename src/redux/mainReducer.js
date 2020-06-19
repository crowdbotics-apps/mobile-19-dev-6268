import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView6148Reducer from '../features/CalendarView6148/redux/reducers';
import EmailAuth6146Reducer from '../features/EmailAuth6146/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView6148: CalendarView6148Reducer,
EmailAuth6146: EmailAuth6146Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});