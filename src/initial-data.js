export const TEMPLATE_COL = 'column-1';
export const ENGLISH_COL = 'column-2';
export const GERMAN_COL = 'column-3';

export const data = {
  tasks: {
    'task-1': { id: 'task-1', trigger: 'Trigger 1', content: 'Content 1' },

    'task-2': { id: 'task-2', trigger: 'Trigger 2', content: 'Content 2' },
  },

  columns: {
    [TEMPLATE_COL]: {
      id: TEMPLATE_COL,
      title: 'Dialogue Template',
      taskIds: ['task-1', 'task-2'],
    },
    [ENGLISH_COL]: {
      id: ENGLISH_COL,
      title: 'English Dialogue',
      taskIds: [],
    },
    [GERMAN_COL]: {
      id: GERMAN_COL,
      title: 'German Dialogue',
      taskIds: [],
    },
  },
  columnOrder: [TEMPLATE_COL, ENGLISH_COL, GERMAN_COL],
};
