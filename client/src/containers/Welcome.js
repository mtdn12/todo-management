import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { object } from 'prop-types'
import { Welcome } from '../components'
import { withReducer, withSaga } from '../utils'
import { authReducer } from '../modules/reducers'
import { authSaga } from '../modules/sagas'

class WelcomeContainer extends Component {
  static propTypes = {
    userData: object.isRequired,
  }
  render() {
    return <Welcome userData={this.props.userData} />
  }
}

const mapStateToProps = state => ({
  userData: state.getIn(['auth', 'data']),
})

const mapDispatchToProps = dispatch => ({})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
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
)(WelcomeContainer)
