import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { object, func, bool } from 'prop-types'
import { Login } from '../components'
import { withReducer, withSaga } from '../utils'
import { authReducer } from '../modules/reducers'
import { authSaga } from '../modules/sagas'
import { requestLogin } from '../modules/actions'

class LoginContainer extends Component {
  static propTypes = {
    item: object.isRequired,
    handleLogin: func.isRequired,
    isLoading: bool.isRequired,
  }
  render() {
    return (
      <Login
        item={this.props.item}
        handleLogin={this.props.handleLogin}
        isLoading={this.props.isLoading}
      />
    )
  }
}

const mapStateToProps = state => ({
  item: state.getIn(['auth', 'login', 'item']),
  isLoading: state.getIn(['auth', 'login', 'isLoading']),
})

const mapDispatchToProps = dispatch => ({
  handleLogin: values => dispatch(requestLogin(values)),
})

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
)(LoginContainer)
