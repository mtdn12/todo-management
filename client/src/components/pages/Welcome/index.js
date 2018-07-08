import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import Template from '../../templates/Template'
import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const welcome = ({ classes }) => (
  <Template>
    <div className={classes.bg}>
      <div className={classes.container}>
        <Typography variant="display3" color="inherit" gutterBottom>
          Welcome To Todo management
        </Typography>
        <Typography variant="display1" color="inherit" gutterBottom>
          Track your work and see your way
        </Typography>
        <div className={classes.btnWrapper}>
          <Link to="/login">
            <Button variant="raised" color="primary" size="large">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="outlined" color="inherit" size="large">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </Template>
)

export default withStyles(styles)(welcome)
