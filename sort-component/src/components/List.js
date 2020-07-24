import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import Item from "./Card";
import { Droppable, Draggable } from "react-beautiful-dnd";
export default class List extends React.Component {
  render() {
    const { items } = this.props;
    let list_items = items.map((item, index) => {
      return (
        <Draggable>
          <Item item={item} index={index} key={index} />
        </Draggable>
      );
    });

    return (
      <Droppable>
        <div style={{ background: "#FF0" }}>{list_items}</div>
      </Droppable>
    );
  }
}
