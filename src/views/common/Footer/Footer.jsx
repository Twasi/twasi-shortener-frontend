import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import DisclaimerDialog from './DisclaimerDialog';

import './_style.css';

const Footer = () => {

  const [openDisclaimer, setOpenDisclaimer] = React.useState(false);

  const handleCloseDisclaimer = () => {
    setOpenDisclaimer(false);
  };

  const handleOpenDisclaimer = () => {
    setOpenDisclaimer(true);
  };

  return (
    <div className="footer">
      <DisclaimerDialog onClose={handleCloseDisclaimer} open={openDisclaimer}/>
      <div className="impress">
        <Typography>
          <Link target="_blank" href="https://panel-beta.twasi.net/imprint">
            Impressum
          </Link>
          <Link style={{ marginLeft: '25px' }} onClick={handleOpenDisclaimer} href="#">
            Disclaimer
          </Link>
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
