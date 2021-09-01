import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const StyledTask = styled.div`
  padding: 4px;
  border: lightgrey solid 2px;
  margin: 4px;
  border: ${({ isDragging }) => isDragging && 'skyblue solid 2px'};
`;

export const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <StyledTask
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {task?.trigger}
        </StyledTask>
      )}
    </Draggable>
  );
};
