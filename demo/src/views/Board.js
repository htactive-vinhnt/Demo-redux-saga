import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { Col, Button, Input } from "antd";
import "./style.css";
import "antd/dist/antd.css";
import { getAllListDoing } from "./../redux/TodoList/action"; // getAllListAndCardDoing là một action được gọi từ file action trong redux

function Board(props) {
  const { fetchAllList } = props;
  const [statusListForm, setStatusListForm] = useState("none");
  const [statusBtnAddList, setStatusBtnAddList] = useState("block");
  useEffect(() => {
    function fetchData() {
      fetchAllList(); // chạy action getAllListAndCardDoing gián tiếp bằng fetchAllList, sau khi fetchAllList chạy thành công thì reducer mới nhận được dử liệu
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Trello Board</h1>
      <div gutter={16} className="border-board">
        {((props.data && props.data.TodoList) || []).map((item, index) => {
          // (props.data && props.data.TodoList) || [] / để cho dù chưa có dử liệu thì hàm map vẩn ko lổi
          return (
            <div className="box-list" key={index}>
              <h1>List name: {item.ListName}</h1>
              {(item.ListTasks || []).map(task => {
                return <p>Task name: {task.name}</p>;
              })}
            </div>
          );
        })}
        <Col className="box-list">
          <div style={{ display: statusListForm }} className="form-add-list">
            <Input
              style={{ width: "80%", height: 30 }}
              type="text"
              name="newList"
            />
            <br />
            <Button
              style={{
                background: "#5aac44",
                height: 30,
                width: 100,
                color: "white"
              }}
            >
              <p> Add List</p>
            </Button>
          </div>

          <div
            style={{ display: statusBtnAddList }}
            className="box-btn-open-form-add-list"
            onClick={e => {
              setStatusBtnAddList("none");
              setStatusListForm("block");
            }}
          >
            <PlusOutlined
              className="btn-open-form-add-list"
              style={{ color: "#ebecf0", fontSize: 15, float: "left" }}
            />
            <p style={{ color: "#ebecf0", fontSize: 15, marginTop: 5 }}>
              Add another list
            </p>
          </div>
        </Col>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.arrList // lấy dử liệu từ reducer gán cho data, khi muốn dùng data bắt buộc phải thông qua props, có 2 cách props.data hoặc const {data} = props
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllList: () => {
      dispatch(getAllListDoing()); // tương tự dispatch(TYPE), tạo 1 arow function bọc ở ngoài dispatch, để khi chạy dispatch sẽ được truyền qua cho action
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
