const styles = theme => ({
  toDoItem: {
    margin: '10px 0',
    padding: '0 10px',
  },
  todoText: {
    cursor: 'pointer',
  },
  done: {
    cursor: 'pointer',
    background: theme.palette.primary.light,
  },
  unDone: {
    cursor: 'pointer',
    background: theme.palette.grey[100],
  },
})

export default styles
