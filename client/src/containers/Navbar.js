import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Navbar } from '../components'
import { withReducer, withSaga } from '../utils'
import { authReducer } from '../modules/reducers'
import { authSaga } from '../modules/sagas'
import { requestLogout } from '../modules/actions'
import { object, func } from 'prop-types'

class NavbarContainer extends Component {
  static propTypes = {
    userData: object,
    handleLogout: func.isRequired,
  }
  render() {
    return (
      <Navbar
        userData={this.props.userData}
        handleLogout={this.props.handleLogout}
      />
    )
  }
}

const mapStateToProps = state => ({
  userData: state.getIn(['auth', 'data']),
})

const mapdispatchToProps = dispatch => ({
  handleLogout: () => dispatch(requestLogout()),
})

const withConnect = connect(
  mapStateToProps,
  mapdispatchToProps
)
const withAuthReducer = withReducer({
  key: 'auth',
  reducer: authReducer,
})
const withAuthSaga = withSaga({
  key: 'auth',
  saga: authSaga,
})

export default compose(
  withAuthReducer,
  withAuthSaga,
  withConnect
)(NavbarContainer)
