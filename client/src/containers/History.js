import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withReducer, withSaga } from '../utils'
import { historyReducer } from '../modules/reducers'
import { historySaga } from '../modules/sagas'
import { History } from '../components'
import {
  requestGetListHistory,
  openDialog,
  closeDialog,
  setFilterPage,
  setFilterLimit,
} from '../modules/actions'
import { func, object } from 'prop-types'

class HistoryContainer extends Component {
  static propTypes = {
    handleGetHistories: func.isRequired,
    filter: object.isRequired,
    handleSetFilterLimit: func.isRequired,
    handleSetFilterPage: func.isRequired,
  }
  componentDidMount() {
    this.props.handleGetHistories(this.props.filter.toJS())
  }
  handleChangePage = async (e, page) => {
    await this.props.handleSetFilterPage(page)
    this.props.handleGetHistories(this.props.filter.toJS())
  }
  handleChangeRowsPerPage = async e => {
    await this.props.handleSetFilterLimit(e.target.value)
    this.props.handleGetHistories(this.props.filter.toJS())
  }
  render() {
    return (
      <History
        handleChangePage={this.handleChangePage}
        handleChangeRowsPerPage={this.handleChangeRowsPerPage}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({
  items: state.getIn(['history', 'items']),
  isLoading: state.getIn(['history', 'isLoading']),
  generalInfo: state.getIn(['history', 'generalInfo']),
  dialogItem: state.getIn(['history', 'dialog', 'item']),
  isOpenDialog: state.getIn(['history', 'dialog', 'isOpen']),
  totalCount: state.getIn(['history', 'totalCount']),
  page: state.getIn(['history', 'filter', 'page']),
  limit: state.getIn(['history', 'filter', 'limit']),
  filter: state.getIn(['history', 'filter']),
})

const mapDispatchToProps = dispatch => ({
  handleGetHistories: filter => dispatch(requestGetListHistory(filter)),
  handleOpenDialog: item => dispatch(openDialog(item)),
  handleCloseDialog: () => dispatch(closeDialog()),
  handleSetFilterPage: page => dispatch(setFilterPage(page)),
  handleSetFilterLimit: limit => dispatch(setFilterLimit(limit)),
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
