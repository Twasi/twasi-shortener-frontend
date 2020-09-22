import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { withNamespaces } from 'react-i18next';

const ConfirmRedirection = ({t}) => {

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
          <Typography className="shortenerHeadline" variant="h4">{t('confirmation_headline')}</Typography>
          {t('confirmation_text')}
          <div style={{ textAlign: "center", margin: "20px 0px 20px 0px" }}>
            <Card style={{ marginTop: "20px" }}>
              <CardContent style={{ paddingBottom: "16px" }}>
                {t('confirmation_question')}
                <Typography variant="h5">
                  {urlParams.get('confirmRedirection')}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <Grid container>
            <Grid item xs={6} style={{ padding: "0px 15px 0px 0px" }}>
              <Button fullWidth color="primary" variant ="contained" onClick={handleRedirect}>
                {t('confirmation_accept_button')}
              </Button>
            </Grid>
            <Grid item xs={6} style={{ padding: "0px 0px 0px 15px" }}>
              <Button fullWidth color="secondary" variant ="contained" onClick={handleDecline}>
                {t('confirmation_decline_button')}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  )

}

export default withNamespaces()(ConfirmRedirection);
