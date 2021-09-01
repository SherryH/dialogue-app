import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const StyledTask = styled.div`
  padding: 4px;
  border: lightgrey solid 2px;
  margin: 4px;
`;

export const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <StyledTask
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {task?.trigger}
        </StyledTask>
      )}
    </Draggable>
  );
};
