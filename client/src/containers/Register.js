import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { object, func, bool } from 'prop-types'
import { Register } from '../components'
import { withReducer, withSaga } from '../utils'
import { authReducer } from '../modules/reducers'
import { authSaga } from '../modules/sagas'
import { requestRegister } from '../modules/actions'

class RegisterContainer extends Component {
  static propTypes = {
    item: object.isRequired,
    handleRegister: func.isRequired,
    isLoading: bool.isRequired,
  }
  render() {
    return (
      <Register
        item={this.props.item}
        handleRegister={this.props.handleRegister}
        isLoading={this.props.isLoading}
      />
    )
  }
}

const mapStateToProps = state => ({
  item: state.getIn(['auth', 'register', 'item']),
  isLoading: state.getIn(['auth', 'register', 'isLoading']),
})

const mapDispatchToProps = dispatch => ({
  handleRegister: values => dispatch(requestRegister(values)),
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
)(RegisterContainer)
