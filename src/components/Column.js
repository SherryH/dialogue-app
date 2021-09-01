import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import { Task } from './Task';

const Container = styled.div`
  border: lightgrey solid 2px;
  border: ${({ isDraggingOver }) => {
    return isDraggingOver && 'green solid 2px';
  }};
`;

const StyledColumn = styled.div`
  width: 300px;
  min-height: 800px;
  flex-grow: ${({ columnId }) => columnId !== 'column-1' && '1'};
`;

const StyledTitle = styled.h2`
  font-size: 18px;
  font-family: sans-serif;
  font-weight: 600;
  padding: 4px;
`;

export const Column = ({ column, tasks }) => {
  return (
    <Container>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <StyledColumn
            columnId={column.id}
            ref={provided.innerRef}
            {...provided.droppable}
            isDraggingOver={snapshot.isDraggingOver}
          >
            <StyledTitle>{column.title}</StyledTitle>
            {column.taskIds.map((taskId, index) => (
              <Task key={tasks[taskId].id} task={tasks[taskId]} index={index} />
            ))}
            {provided.placeholder}
          </StyledColumn>
        )}
      </Droppable>
    </Container>
  );
};
