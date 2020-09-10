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
            Twasi-Shortener ist ein Dienst zur Generierung kurzer Webadressen, <br/>
            welche den aufrufenden Nutzer zu anderen Webadressen weiterleiten können. <br/><br/>
            Der Service ist kostenfrei nutzbar und die Adressen sind von jedem frei erstellbar. <br/>
            Aus diesem Grund kann und wird sowohl vom Bereitsteller als auch vom Entwickler (Twasi-Team) keine Gewähr für verlinkte Inhalte übernommen. <br/>
            Erstellte Adressen werden von uns zum Zeitpunkt der Erstellung nicht untersucht. <br/><br/>
            Sollte eine Beschwerde über einen verlinkten Inhalt erfolgen, <br/>
            kann dies eine Sperrung der Verlinkung oder einen Warnhinweise für aufrufende Nutzer nach sich ziehen, <br/>
            der Betreiber des Dienstes verpflichtet sich hierzu jedoch nicht. <br/>
            Über die Verlinkung von pornografischen, politischen, potenziell gefährlichen (z.B. Computerviren) o. Ä. Inhalten haben wir keinen Einfluss. <br/>
            Ein verlinkter Inhalt ist in keinster Weise repräsentativ für die öffentliche Meinung des Entwicklers oder des Betreibers des Dienstes.
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
