import { useState } from 'react';
import { Column } from './components/Column';
import { data, ENGLISH_COL, TEMPLATE_COL } from './initial-data';
import { DragDropContext } from 'react-beautiful-dnd';
import cloneDeep from 'lodash/cloneDeep';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 4px;
`;

function App() {
  const [dialogues, setDialogues] = useState(data);
  const onDragEnd = (result) => {
    const { draggableId, source, destination } = result;
    // if drop outside
    if (!destination) return;

    // if no position change
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    // if there is position change
    // create optimistic update on the UI states

    // get the source column
    const sourceCol = dialogues.columns[source.droppableId];
    const destinationCol = dialogues.columns[destination.droppableId];
    if (sourceCol === destinationCol) {
      // get the tasks in the column
      const newTasks = Array.from(sourceCol.taskIds);
      newTasks.splice(source.index, 1);
      // put the tasks into the same column, diff position
      newTasks.splice(destination.index, 0, draggableId);

      const clonedDialogues = cloneDeep(dialogues);

      // optimistic update on UI states
      const newDialogues = {
        ...clonedDialogues,
        columns: {
          ...clonedDialogues.columns,
          [sourceCol.id]: {
            ...sourceCol,
            taskIds: newTasks,
          },
        },
      };
      setDialogues(newDialogues);
      return;
    }

    // =================================
    // if move between columns,
    // from Dialogue Template (column-1) to English Dialogue (column-2)
    // the dialogues stay the same

    if (sourceCol.id === TEMPLATE_COL && destinationCol.id === ENGLISH_COL) {
      const newDestinationTasks = Array.from(destinationCol.taskIds);
      newDestinationTasks.splice(destination.index, 0, draggableId);

      const clonedDialogues = cloneDeep(dialogues);

      // optimistic update on UI states
      const newDialogues = {
        ...clonedDialogues,
        columns: {
          ...clonedDialogues.columns,
          [destinationCol.id]: {
            ...destinationCol,
            taskIds: newDestinationTasks,
          },
        },
      };
      debugger;
      setDialogues(newDialogues);
      return;
    }

    /*     // get the tasks in the source column
    const newSourceTasks = Array.from(sourceCol.taskIds);
    const newDestinationTasks = Array.from(destinationCol.taskIds);
    newSourceTasks.splice(source.index, 1);
    // put the tasks into different column, diff position
    newDestinationTasks.splice(destination.index, 0, draggableId);
    const clonedDialogues = cloneDeep(dialogues);

    // optimistic update on UI states
    const newDialogues = {
      ...clonedDialogues,
      columns: {
        ...clonedDialogues.columns,
        [sourceCol.id]: {
          ...sourceCol,
          taskIds: newSourceTasks,
        },
        [destinationCol.id]: {
          ...destinationCol,
          taskIds: newDestinationTasks,
        },
      },
    };
    setDialogues(newDialogues); */
  };
  return (
    // the key is in the data structure!!
    // columnOrder makes ordering of column easy!
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {dialogues['columnOrder'].map((columnId) => {
          const column = dialogues.columns[columnId];
          const tasks = dialogues.tasks;
          return <Column key={columnId} column={column} tasks={tasks} />;
        })}
      </Container>
    </DragDropContext>
  );
}

export default App;
