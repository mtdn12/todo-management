import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { node, object } from 'prop-types'
import { Notification, Navbar } from '../../../containers'
const Template = ({ classes, children, ...props }) => (
  <div {...props}>
    <Navbar />
    <div className={classes.content}>{children}</div>
    <Notification />
  </div>
)

Template.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

const styles = theme => ({})

export default withStyles(styles)(Template)
