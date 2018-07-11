import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withReducer, withSaga } from '../utils'
import { historyReducer } from '../modules/reducers'
import { historySaga } from '../modules/sagas'
import { History } from '../components'
import { requestGetListHistory } from '../modules/actions'
import { func } from 'prop-types'

class HistoryContainer extends Component {
  static propTypes = {
    handleGetHistories: func.isRequired,
  }
  componentDidMount(){
    this.props.handleGetHistories()
  }
  render() {
    return <History {...this.props} />
  }
}

const mapStateToProps = state => ({
  items: state.getIn(['history', 'items']),
  isLoading: state.getIn(['history', 'isLoading']),
  generalInfo: state.getIn(['history', 'generalInfo']),
})

const mapDispatchToProps = dispatch => ({
  handleGetHistories: () => dispatch(requestGetListHistory()),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)
const withHistoryReducer = withReducer({
  key: 'history',
  reducer: historyReducer,
})
const withHistorySaga = withSaga({
  key: 'history',
  saga: historySaga,
})

export default compose(
  withHistoryReducer,
  withHistorySaga,
  withConnect
)(HistoryContainer)
