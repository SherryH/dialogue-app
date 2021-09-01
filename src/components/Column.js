import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import { Task } from './Task';

const StyledColumn = styled.div`
  border: lightgrey solid 2px;
  width: 300px;
  min-height: 800px;
`;

const StyledTitle = styled.h2`
  font-size: 18px;
  font-family: sans-serif;
  font-weight: 600;
  padding: 4px;
`;

export const Column = ({ column, tasks }) => {
  console.log('column');
  console.log(column);
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <StyledColumn ref={provided.innerRef} {...provided.droppable}>
          <StyledTitle>{column.title}</StyledTitle>
          {column.taskIds.map((taskId, index) => (
            <Task key={tasks[taskId].id} task={tasks[taskId]} index={index} />
          ))}
          {provided.placeholder}
        </StyledColumn>
      )}
    </Droppable>
  );
};
