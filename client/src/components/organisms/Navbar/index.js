import React from 'react'
import { object, func, any } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
} from '@material-ui/core'
import styles from './styles'
import classNames from 'classnames'

const Navbar = props => {
  const {
    classes,
  } = props
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.flex}>
          <div className={classNames(classes.flex, classes.navLeft)}>
            <Link to="/" className={classes.link}>
              <Typography variant="title" color="inherit">
                TODO
              </Typography>
            </Link>
          </div>
          <div className={classes.navRight}>

          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Navbar)
