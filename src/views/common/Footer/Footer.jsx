import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import DisclaimerDialog from './DisclaimerDialog';
import DatenschutzDialog from './DatenschutzDialog';

import { withNamespaces } from 'react-i18next';

import './_style.css';

const Footer = ({t}) => {

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
      <DisclaimerDialog onClose={handleCloseDisclaimer} open={openDisclaimer} t={t}/>
      <DatenschutzDialog onClose={handleCloseDatenschutz} open={openDatenschutz} t={t}/>
      <div className="footer-container">
        <Typography>
          <Link target="_blank" href="https://panel-beta.twasi.net/imprint">
            {t('imprint')}
          </Link>
          <Link style={{ marginLeft: '25px', cursor: "pointer" }} onClick={handleOpenDisclaimer}>
            {t('disclaimer')}
          </Link>
          <Link style={{ marginLeft: '25px', cursor: "pointer" }} onClick={handleOpenDatenschutz}>
            {t('privacy')}
          </Link>
          <Link style={{ marginLeft: '25px' }} target="_blank" href="https://github.com/Twasi">
            GitHub
          </Link>
        </Typography>
        <Typography variant="caption" style={{ fontSize: "10px", color: "#adbfff" }} display="block" gutterBottom>
          {t('disclaimer_text')}
        </Typography>
      </div>
    </div>
  );
}

export default withNamespaces()(Footer);
