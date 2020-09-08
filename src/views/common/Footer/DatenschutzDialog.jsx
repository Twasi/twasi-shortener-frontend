import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

const DatenschutzDialog = (props) => {

  return (
    <div>
      <Dialog
        open={props.open}
        scroll={"body"}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography className="shortenerHeadline" variant="h4">Datenschutzerklärung gemäß der DSGVO</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Der twa.si URL-Shortener bietet einen kostenfreien, ohne Anmeldung nutzbaren Dienst zur Kürzung von Links an.<br/>
            Hierzu werden einige wenige Daten gesammelt und dauerhaft gespeichert.<br/>
            Im Folgenden wird erklärt, was gespeichert wird, wann Daten gespeichert werden und warum die Daten gespeichert werden müssen.<br/><br/>

            Erstellt man einen Kurzlink mithilfe des URL-Shorteners, werden folgende Daten gespeichert:<br/><br/>
            <ul>
              <li>Genauer Zeitpunkt der Erstellung</li>
              <li>Die URL, an die weitergeleitet werden soll</li>
              <li>Der gewählte "Tag" der URL (twa.si/r/tag) falls gesetzt</li>
              <li>Die IP-Adresse von der aus der Link erstellt wurde.</li>
            </ul>
            <br/>

            Die URL sowie der "Tag" werden zur Funktionalität des Shorteners gespeichert, da ohne eine Speicherung und spätere Abfrage keine Weiterleitung erfolgen kann.<br/>
            Die IP-Adresse des Nutzers sowie der Zeitpunkt der Erstellung dienen einerseits statistischen und andererseits moderatorischen Zwecken.<br/>
            So soll bei einer Ausnutzung des URL-Shorteners um beispielsweise auf Computerviren o. Ä. zu verlinken die URL entfernt werden können.<br/>
            Um etwaige andere Ausnutzungen desselben Nutzers zu finden wird hierzu eine IP-Adresse gespeichert.<br/>
            Außerdem verhindert das System eine zu großen Menge an erstellten Kurzlinks in kurzer Zeit anhand der IP-Adresse.<br/><br/>

            Außer der IP-Adresse werden keine Daten erhoben, welche eine Verbindung zwischen dem erstellenden Nutzer eines Kurzlinks und dem Kurzlink selbst eine Verbindung herstellen können.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{ margin: 'auto' }} variant="contained" onClick={props.onClose} color="primary" autoFocus>
            Verstanden, danke!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DatenschutzDialog;
