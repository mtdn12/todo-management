import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { Delete } from '@material-ui/icons'
import { Grid, Typography, IconButton } from '@material-ui/core'
import { object, func } from 'prop-types'

const ToDoList = ({ classes, items, handleDeleteToDo }) => {
  return (
    <div className={classes.listWrapper}>
      {items.map(item => (
        <Grid
          container
          key={item.get('_id')}
          alignItems="center"
          spacing={8}
          className={classes.toDoItem}>
          <Grid item xs={11}>
            <Typography>{item.get('text')}</Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={() => handleDeleteToDo(item.get('_id'))}>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </div>
  )
}

ToDoList.propTypes = {
  classes: object.isRequired,
  items: object.isRequired,
  handleDeleteToDo: func.isRequired,
}

export default withStyles(styles)(ToDoList)
