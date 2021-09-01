### Notes

- React-beautiful-dnd provides information on the dragging item: its index, source and destination
- We need to configure `provided.innerRef`, `provided.draggableProps` etc to the react-beautiful-dnd API
- For optimistic update on the frontend, we need to update states in the `onDragEnd()`
- Visual update during dragging and dropping is done through `snapshot`

### Example result returned by react-beautiful-dnd onDragEnd()

We can use the UI states easily as react-beautiful-dnd provided us with the `result` object with information on the source, destination columns and the index of the task before/after the drag.

```js
result = {
  draggableId: 'task-1',
  type,
  reason,
  source: { droppableId: 'column-1', index }, // index of the task in the source column
  destination: { droppableId: 'column-2', index },
};
```

### Example info returned from API

`DragDropContext` returns information on 3 APIs: `onDragStart`, `onDragUpdate`, `onDragEnd`.
The information provided overtime builds up the `result` data.

onDragStart

```js
start = {
  draggableId: 'task-1',
  type,
  source: { droppableId: 'column-1', index },
};
```

onDragUpdate

```js
update = {
  ...start,
  destination: { droppableId: 'column-2', index },
};
```

onDragEnd

```js
result = {
  ...update,
  reason,
};
```

### Example Snapshots

It provides information about the current drag, and can be useful for customising dragging appearance

```js
const draggableSnapshot = {
  isDragging: true,
  draggingOver: 'column-1',
};

const droppableSnapshot = {
  isDraggingOver: true,
  draggingOverWith: 'task-1',
};
```
