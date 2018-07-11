import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { object, string, func, bool } from 'prop-types'
import { TextField, Grid, IconButton } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import Template from '../../templates/Template'
import { ToDoList } from '../../'

const ToDo = ({
  classes,
  text,
  handleChangeInput,
  errors,
  handleAddTodo,
  items,
  isLoading,
  isLoadingAdd,
  handleDeleteToDo,
}) => {
  return (
    <Template>
      <div className={classes.bg}>
        <div className={classes.container}>
          <Grid container spacing={8}>
            <Grid item xs={11}>
              <TextField
                fullWidth
                value={text}
                onChange={handleChangeInput}
                InputProps={{
                  disableUnderline: true,
                  error: Boolean(errors.text),
                }}
                helperText={errors.text || ''}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton
                variant="raised"
                color="primary"
                disabled={isLoadingAdd}
                onClick={handleAddTodo}>
                <Add />
              </IconButton>
            </Grid>
          </Grid>
          <ToDoList items={items} handleDeleteToDo={handleDeleteToDo} />
        </div>
      </div>
    </Template>
  )
}
ToDo.propTypes = {
  classes: object.isRequired,
  text: string.isRequired,
  handleChangeInput: func.isRequired,
  errors: object.isRequired,
  handleAddTodo: func.isRequired,
  items: object.isRequired,
  isLoading: bool.isRequired,
  isLoadingAdd: bool.isRequired,
  handleDeleteToDo: func.isRequired,
}

export default withStyles(styles)(ToDo)
