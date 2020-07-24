import * as types from "./types";
// mổi chức năng đều có ba trạng thái doing, success và failed
// Get all list
export const getAllListDoing = () => {
  // doing sẽ được chạy ở UI để khởi chạy chức năng
  return {
    type: types.GET_ALL_LIST_AND_CARD_DOING
  };
};

export const getAllListSuccess = data => {
  // success sẽ được chạy sau khi saga chạy thành công, và sẽ được truyền dử liệu lấy được từ api
  return {
    type: types.GET_ALL_LIST_AND_CARD_SUCCESS,
    payload: data // gán dử liệu lấy được từ saga truyền qua cho payload, để action bên reducer lấy được dử liệu
  };
};

export const getAllListFailed = error => {
  // failed tương tự như success nhưng chỉ chạy trong trường hợp saga chạy có lổi
  return {
    type: types.GET_ALL_LIST_AND_CARD_FALSE,
    error: error
  };
};
