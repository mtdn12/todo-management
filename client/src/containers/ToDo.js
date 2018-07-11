import React, { Component } from 'react'
import { ToDo } from '../components'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withReducer, withSaga } from '../utils'
import { toDoReducer } from '../modules/reducers'
import { toDoSaga } from '../modules/sagas'
import {
  requestGetListTodo,
  requestAddTodo,
  requestDeleteTodo,
  requestRemoveDone,
  requestCheckDone,
} from '../modules/actions'
import { func } from 'prop-types'

class ToDoContainer extends Component {
  static propTypes = {
    handleGetListToDo: func.isRequired,
    handleAddTodoRequest: func.isRequired,
  }
  state = {
    text: '',
    errors: {},
  }
  componentDidMount() {
    this.props.handleGetListToDo()
  }
  handleChangeInput = e => {
    this.setState({ text: e.target.value })
  }
  handleAddTodo = () => {
    if (!this.state.text.trim()) {
      this.setState({
        errors: { ...this.state.errors, text: 'Please input text field' },
      })
      return
    }
    this.setState({
      errors: { ...this.state.errors, text: '' },
    })
    this.props.handleAddTodoRequest(this.state.text)
    this.setState({ text: '' })
  }
  render() {
    return (
      <ToDo
        text={this.state.text}
        errors={this.state.errors}
        handleChangeInput={this.handleChangeInput}
        handleAddTodo={this.handleAddTodo}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({
  items: state.getIn(['toDo', 'items']),
  isLoading: state.getIn(['toDo', 'isLoading']),
  isLoadingAdd: state.getIn(['toDo', 'isLoadingAdd']),
  userData: state.getIn(['auth', 'data']),
})

const mapDispatchToProps = dispatch => ({
  handleGetListToDo: () => dispatch(requestGetListTodo()),
  handleAddTodoRequest: text => dispatch(requestAddTodo(text)),
  handleDeleteToDo: id => dispatch(requestDeleteTodo(id)),
  handleCheckDone: id => dispatch(requestCheckDone(id)),
  handleRemoveDone: id => dispatch(requestRemoveDone(id)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)
const withToDoReducer = withReducer({
  key: 'toDo',
  reducer: toDoReducer,
})
const withToDoSaga = withSaga({
  key: 'toDo',
  saga: toDoSaga,
})

export default compose(
  withToDoReducer,
  withToDoSaga,
  withConnect
)(ToDoContainer)
