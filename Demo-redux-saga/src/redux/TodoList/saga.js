import { put, call, takeEvery } from "redux-saga/effects";
import { getAllListAndCard } from "../../api/TodoList"; // gọi function xử lý api
import { getAllListSuccess, getAllListFailed } from "./action"; // gọi action
import * as types from "./types";

function* getAllListsSaga() {
  try {
    const resData = yield call(getAllListAndCard); // call dùng để gọi hàm
    if (resData.data) {
      yield put(getAllListSuccess(resData.data)); // là đẩy dử liệu qua cho action
    }
  } catch (error) {
    const errs = error.message;
    yield put(getAllListFailed(errs));
  }
}

export function* ListSaga() {
  yield takeEvery(types.GET_ALL_LIST_AND_CARD_DOING, getAllListsSaga); // takeEvery dùng để chạy hàm saga và liên kết action với hàm saga
}
