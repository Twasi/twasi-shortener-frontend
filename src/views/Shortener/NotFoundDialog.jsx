import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const NotFoundDialog = (props) => {

  const sadGifArray = [
    "https://media0.giphy.com/media/lp8Bchlpia9mQnhj9o/giphy.gif?cid=ecf05e4771uvaxm99l2hk05oyfjazwmr33423uk4zaad8p4b&rid=giphy.gif",
    "https://media4.giphy.com/media/2WxWfiavndgcM/giphy.gif?cid=ecf05e47wp2k7f3rihwrlo5xpuusmr7a7arglscu3n8pz7p2&rid=giphy.gif",
    "https://media2.giphy.com/media/KDRv3QggAjyo/giphy.gif?cid=ecf05e471b051b2e86ea59359cdb381ef2bcc13055d03dca&rid=giphy.gif",
    "https://media2.giphy.com/media/d2lcHJTG5Tscg/giphy.gif?cid=ecf05e47849d00fc2dc6d7271cbcb2301763bbc1f4547395&rid=giphy.gif",
    "https://media2.giphy.com/media/k61nOBRRBMxva/giphy.gif?cid=ecf05e4744e4b9bb965b6431a9af8f934b1b66667584bc66&rid=giphy.gif",
    "https://media2.giphy.com/media/5WmyaeDDlmb1m/giphy.gif?cid=ecf05e470d14a62da5a205e34350e43ca50e36f339659283&rid=giphy.gif",
    "https://media1.giphy.com/media/a9xhxAxaqOfQs/giphy.gif?cid=ecf05e47fd2f23d344e43612b9e5b81830a0dab129d93f0f&rid=giphy.gif"
  ]

  var selectedGif = sadGifArray[Math.floor(Math.random() * sadGifArray.length)];

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography className="shortenerHeadline" variant="h4">404</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Unter der angegebenen Adresse befindet sich keine Weiterleitung :(
            <div className="notFoundGifWrapper">
              <img alt="sad gif" className="notFoundGif" src={selectedGif}/>
              <Typography style={{ marginTop: "6px" }} variant="caption" display="block" gutterBottom>
                Quelle: <Link color="inherit">https://giphy.com/</Link>
              </Typography>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{ margin: 'auto' }} variant="contained" onClick={props.onClose} color="primary" autoFocus>
            Eigenen Shortlink erstellen
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NotFoundDialog;
