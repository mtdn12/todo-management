import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { object, bool } from 'prop-types'
import moment from 'moment'
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  // TableFooter,
  TableRow,
  // TablePagination,
  Button,
  Typography,
  CircularProgress,
} from '@material-ui/core'

import Template from '../../templates/Template'

const History = ({ classes, isLoading, items, generalInfo }) => {
  return (
    <Template>
      <div className={classes.bg}>
        <div className={classes.container}>
          {isLoading && (
            <div className={classes.loadingWrap}>
              <CircularProgress size={48} />
            </div>
          )}
          {!isLoading && (
            <div>
              <Typography variant="display1" gutterBottom align="center">
                General Info
              </Typography>
              <Typography variant="title" gutterBottom>
                Total Todos: {generalInfo.get('totalTodos')}
              </Typography>
              <Typography variant="title" gutterBottom>
                Success Todos: {generalInfo.get('successTodos')}
              </Typography>
              <Typography variant="title" gutterBottom>
                Success Rate: {generalInfo.get('successRate')}%
              </Typography>
            </div>
          )}
          {!isLoading && (
            <div>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Todos</TableCell>
                    <TableCell>Success</TableCell>
                    <TableCell>Success Rate</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items &&
                    items.map(item => (
                      <TableRow key={item.get('_id')}>
                        <TableCell>
                          {moment(item.get('addAt')).format('DD-MM-YYYY')}
                        </TableCell>
                        <TableCell>
                          <Button variant="raised" color="primary">
                            {item.get('list').count()}
                          </Button>
                        </TableCell>
                        <TableCell>
                          {item
                            .get('list')
                            .filter(o => o.get('completed') === true)
                            .count()}
                        </TableCell>
                        <TableCell>
                          {(item
                            .get('list')
                            .filter(o => o.get('completed') === true)
                            .count() /
                            item.get('list').count()) *
                            100}%
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </Template>
  )
}

History.propTypes = {
  classes: object.isRequired,
  isLoading: bool,
  items: object,
  generalInfo: object,
}

export default withStyles(styles)(History)
