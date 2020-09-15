import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

const ConnectDialog = (props) => {

  const handleRedirect = () => {
    window.location = process.env.REACT_APP_REDIRECT_URI;
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography className="shortenerHeadline" variant="h4">{props.t('connect')}</Typography>
          <DialogContentText id="alert-dialog-description">
            {props.t('connect_headline')}
          </DialogContentText>
        </DialogTitle>
        <DialogContent>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleRedirect} fullWidth className="twitchButton">
            {props.t('twitch_button')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConnectDialog;
