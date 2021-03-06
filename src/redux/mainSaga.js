import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView6148Saga from '../features/CalendarView6148/redux/sagas';
import EmailAuth6146Saga from '../features/EmailAuth6146/redux/sagas';
import CalendarView46141Saga from '../features/CalendarView46141/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView6148Saga,
EmailAuth6146Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}