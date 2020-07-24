import { all } from "redux-saga/effects";

import { ListSaga } from "./TodoList/saga";

export default function* rootSaga() {
  yield all([ListSaga()]); // trong trường hợp có nhiều file saga thì  yield all([saga1(); saga2(); saga3()]);
}
