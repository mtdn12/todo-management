import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { Delete } from '@material-ui/icons'
import { Grid, Typography, IconButton } from '@material-ui/core'
import { object, func } from 'prop-types'

const ToDoList = ({ classes, item, handleDeleteDaily }) => {
  return (
    <div className={classes.listWrapper}>
      {item.get('list') &&
        item.get('list').map(o => (
          <Grid
            container
            key={o.get('_id')}
            alignItems="center"
            spacing={8}
            className={classes.toDoItem}>
            <Grid item xs={11} className={classes.todoText}>
              <Typography variant="body1" color="inherit">{o.get('text')}</Typography>
            </Grid>
            <Grid item xs={1}>
              <IconButton
                onClick={() => handleDeleteDaily(o.get('_id'))}
                color="secondary">
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
  item: object.isRequired,
  handleDeleteDaily: func.isRequired,
}

export default withStyles(styles)(ToDoList)
