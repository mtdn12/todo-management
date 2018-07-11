import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { object, string, func, bool } from 'prop-types'
import {
  TextField,
  Grid,
  IconButton,
  Button,
  CircularProgress,
  Typography,
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import Template from '../../templates/Template'
import { DailyList } from '../../'

const DailyTask = ({
  classes,
  text,
  handleChangeInput,
  errors,
  handleAddTodo,
  item,
  isLoading,
  isLoadingAdd,
  handleDeleteDaily,
}) => {
  return (
    <Template>
      <div className={classes.bg}>
        <div className={classes.container}>
          <Typography
            variant="headline"
            color="primary"
            gutterBottom
            align="center">
            Daily Tasks
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="primary"
            gutterBottom>
            Add your daily todos here to easy add everyday
          </Typography>
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
          {isLoading && (
            <div className={classes.loadingWrap}>
              <CircularProgress size={48} />
            </div>
          )}
          {!isLoading && (
            <DailyList item={item} handleDeleteDaily={handleDeleteDaily} />
          )}
        </div>
      </div>
    </Template>
  )
}
DailyTask.propTypes = {
  classes: object.isRequired,
  text: string.isRequired,
  handleChangeInput: func.isRequired,
  errors: object.isRequired,
  handleAddTodo: func.isRequired,
  item: object.isRequired,
  isLoading: bool.isRequired,
  isLoadingAdd: bool.isRequired,
  handleDeleteDaily: func.isRequired,
}

export default withStyles(styles)(DailyTask)
