import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class ConfirmRedirection extends Component {

render (props) {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const handleRedirect = () => {
    window.open(urlParams.get('confirmRedirection'), '_self');
  }

  const handleDecline = () => {
    window.open(process.env.REACT_APP_TOP_LEVEL_DOMAIN, '_self');
  }

  return (
    <div className="contentWrapper">
      <div className="centeredContentBox">
        <Paper style={{ padding: "15px" }}>
          <Typography className="shortenerHeadline" variant="h4">GEFAHR!!!</Typography>
          Du bist in Gefahr bla bla willst du fortfahren?
          <br/>
          <br/>
          <Grid container>
            <Grid item xs={6}>
              <Button color="primary" variant ="contained" onClick={handleRedirect}>
                Ich bin mir der Gefahr bewusst!
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button color="secondary" variant ="contained" onClick={handleDecline}>
                Ne man, lass mal..
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  )
}

}

export default ConfirmRedirection;
