### Notes

- React-beautiful-dnd provides information on the dragging item: its index, source and destination
- We need to configure `provided.innerRef`, `provided.draggableProps` etc to the react-beautiful-dnd API
- For optimistic update on the frontend, we need to update states in the `onDragEnd()`
- Visual update during dragging and dropping is done through `snapshot`
