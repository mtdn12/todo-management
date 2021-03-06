const styles = theme => ({
  toDoItem: {
    margin: '10px 0',
    padding: '0 10px',
    background: theme.palette.grey[500],
    borderRadius: 5,
    color: theme.palette.common.white,
    '& p': {
      fontSize: 20,
    },
  },
  done: {
    cursor: 'pointer',
    background: theme.palette.primary.light,
    borderRadius: 5,
  },
  unDone: {
    cursor: 'pointer',
    background: theme.palette.grey[100],
    borderRadius: 5,
  },
})

export default styles
