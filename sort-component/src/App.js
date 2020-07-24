import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" }
];
const listArr = {
  1: {
    id: 1,
    name: "List 1",
    itemsArr: items
  }
};
function onDrapEnd(result, colums, setColums) {
  alert("ssd");
  if (!result.destination) return;
  const { source, destination } = result;
  const colum = colums[source.droppableId];
  const copylist = [...colum.itemsArr];
  const [removed] = copylist.splice(source.index, 1);
  copylist.splice(destination.index, 0, removed);
  setColums({
    ...colums,
    [source.droppableId]: { ...colum, itemsArr: copylist }
  });
}
export default function App(props) {
  const [colums, setColums] = useState(listArr);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <DragDropContext onDropEnd={result => console.log("sdsssd", result)}>
        {Object.entries(colums).map(([id, list]) => {
          return (
            <Droppable droppableId={id} key={id}>
              {(provided, snapshort) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      width: 250,

                      height: 800,
                      background: snapshort.draggingOver ? "blue" : "gray"
                    }}
                  >
                    {list.itemsArr.map((item, index) => {
                      return (
                        <Draggable
                          draggableId={item.name}
                          key={item.id}
                          index={index}
                        >
                          {(provided, snapshort) => {
                            return (
                              <div
                                ref={provided.innerRef}
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                                style={{
                                  useSelect: "none",
                                  background: snapshort.isDragging
                                    ? "blue"
                                    : "green",
                                  ...provided.draggableProps.style
                                }}
                              >
                                {item.name}
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                  </div>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
}
