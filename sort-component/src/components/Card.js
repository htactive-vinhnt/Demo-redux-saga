import React from "react";
import { SortableElement } from "react-sortable-hoc";

export default class Item extends React.Component {
  render() {
    const SortableItem = SortableElement(({ item }) => {
      return (
        <div
          style={{
            border: "2px solid #F00",
            background: "#0DD",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          {item}
        </div>
      );
    });

    return <SortableItem index={this.props.index} item={this.props.item} />;
  }
}
