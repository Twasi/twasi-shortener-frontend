import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class NotFound extends Component {

  render() {
    return (
      <div className="pageContent">
        <Paper className="pageContainer">
          <Typography component={'span'}>
            <h4 className="pageContainerTitle">
              Diese Seite existiert nicht.
            </h4>
            <small>
              Entweder diese Seite existiert nicht oder Sie haben keinen Zugriff auf diese Seite.
            </small>
          </Typography>
        </Paper>
      </div>
    )
  }
}

export default NotFound;
