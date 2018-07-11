import React, { Component } from 'react'
import { DailyTask } from '../components'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withReducer, withSaga } from '../utils'
import { dailyTaskReducer } from '../modules/reducers'
import { dailyTaskSaga } from '../modules/sagas'
import {
  requestDeleteDaily,
  requestGetDaily,
  requestAddDaily,
} from '../modules/actions'
import { func } from 'prop-types'

class DailyTaskContainer extends Component {
  static propTypes = {
    handleGetDaily: func.isRequired,
    handleAddDaily: func.isRequired,
  }
  state = {
    text: '',
    errors: {},
  }
  componentDidMount() {
    this.props.handleGetDaily()
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
    this.props.handleAddDaily(this.state.text)
    this.setState({ text: '' })
  }
  render() {
    return (
      <DailyTask
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
  item: state.getIn(['dailyTask', 'item']),
  isLoading: state.getIn(['dailyTask', 'isLoading']),
  isLoadingAdd: state.getIn(['dailyTask', 'isLoadingAdd']),
})

const mapDispatchToProps = dispatch => ({
  handleGetDaily: () => dispatch(requestGetDaily()),
  handleAddDaily: text => dispatch(requestAddDaily(text)),
  handleDeleteDaily: id => dispatch(requestDeleteDaily(id)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)
const withdailyTaskReducer = withReducer({
  key: 'dailyTask',
  reducer: dailyTaskReducer,
})
const withdailyTaskSaga = withSaga({
  key: 'dailyTask',
  saga: dailyTaskSaga,
})

export default compose(
  withdailyTaskReducer,
  withdailyTaskSaga,
  withConnect
)(DailyTaskContainer)
