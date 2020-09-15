import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

const DisclaimerDialog = (props) => {

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography className="shortenerHeadline" variant="h4">{props.t('disclaimer')}</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.t('disclaimer_dialog')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{ margin: 'auto' }} variant="contained" onClick={props.onClose} color="primary" autoFocus>
            {props.t('got_it_button')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DisclaimerDialog;
