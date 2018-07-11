import React from 'react'
import { object, func } from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import styles from './styles'
import classNames from 'classnames'

const Navbar = props => {
  const { classes, userData, handleLogout } = props
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
          {userData && (
            <div className={classes.navRight}>
              <Link to="/daily-task" className={classes.link}>
                <Button variant="text" color="inherit">
                  Daily Task
                </Button>
              </Link>
              <Link to="/history" className={classes.link}>
                <Button variant="text" color="inherit">
                  History
                </Button>
              </Link>
              <Button variant="text" color="inherit" onClick={handleLogout}>
                LogOut
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {
  classes: object.isRequired,
  userData: object,
  handleLogout: func.isRequired,
}

export default withStyles(styles)(Navbar)
