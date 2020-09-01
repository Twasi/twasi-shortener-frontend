import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import './_style.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="impress">
          <Typography>
            <Link href="https://panel-beta.twasi.net/imprint">
              Impressum
            </Link>
          </Typography>
        </div>
      </div>
    );
  }
}

export default Footer;
