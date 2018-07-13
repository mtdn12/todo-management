import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
} from '@material-ui/core'
import { object, bool, func } from 'prop-types'

const HistoryDialog = ({ classes, isOpen, handleClose, item }) => {
  // console.log(item.toJS())
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      className={classes.dialog}>
      <DialogContent>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant="title" gutterBottom color="primary">
              Todos
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="title" gutterBottom color="primary">
              Completed
            </Typography>
          </Grid>
        </Grid>
        {item &&
          item.map(o => (
            <Grid
              container
              key={o.get('_id')}
              className={o.get('completed') ? classes.done : classes.unDone}>
              <Grid item xs={8}>
                <Typography variant="body1" color="inherit">
                  {o.get('text')}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1" color="inherit">
                  {o.get('completed').toString()}
                </Typography>
              </Grid>
            </Grid>
          ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

HistoryDialog.propTypes = {
  classes: object.isRequired,
  isOpen: bool,
  handleClose: func,
  item: object,
}
export default withStyles(styles)(HistoryDialog)
