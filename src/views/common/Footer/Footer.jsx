import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import DisclaimerDialog from './DisclaimerDialog';
import DatenschutzDialog from './DatenschutzDialog';

import './_style.css';

const Footer = () => {

  const [openDisclaimer, setOpenDisclaimer] = React.useState(false);
  const [openDatenschutz, setOpenDatenschutz] = React.useState(false);

  const handleCloseDisclaimer = () => {
    setOpenDisclaimer(false);
  };

  const handleOpenDisclaimer = () => {
    setOpenDisclaimer(true);
  };

  const handleCloseDatenschutz = () => {
    setOpenDatenschutz(false);
  };

  const handleOpenDatenschutz = () => {
    setOpenDatenschutz(true);
  };

  return (
    <div className="footer">
      <DisclaimerDialog onClose={handleCloseDisclaimer} open={openDisclaimer}/>
      <DatenschutzDialog onClose={handleCloseDatenschutz} open={openDatenschutz}/>
      <div className="footer-container">
        <Typography>
          <Link target="_blank" href="https://panel-beta.twasi.net/imprint">
            Impressum
          </Link>
          <Link style={{ marginLeft: '25px', cursor: "pointer" }} onClick={handleOpenDisclaimer}>
            Disclaimer
          </Link>
          <Link style={{ marginLeft: '25px', cursor: "pointer" }} onClick={handleOpenDatenschutz}>
            Datenschutz
          </Link>
          <Link style={{ marginLeft: '25px' }} target="_blank" href="https://github.com/Twasi">
            GitHub
          </Link>
        </Typography>
        <Typography variant="caption" style={{ fontSize: "10px", color: "#adbfff" }} display="block" gutterBottom>
          Mit der Nutzung dieses Dienstes stimmst Du unserer Datenschutzbestimmung und unserem Haftungsausschluss (Disclaimer) zu.
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
