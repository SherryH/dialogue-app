export const data = {
  tasks: {
    'task-1': { id: 'task-1', trigger: 'Trigger 1', content: 'Content 1' },

    'task-2': { id: 'task-2', trigger: 'Trigger 2', content: 'Content 2' },
  },

  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Dialogue Template',
      taskIds: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'English Dialogue',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'German Dialogue',
      taskIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};
