import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';

import getJwtContents from '../../jwtContents';

const ManageDialog = (props) => {

  const [userData, setUserData] = React.useState("");

  const mount = () => {
    setUserData(getJwtContents())
  }
  useEffect(mount, [])

  const handleLogout = () => {
    localStorage.removeItem('JWT');
    window.location.reload();
  }

  return (
    <div>
      <Dialog
        maxWidth="md"
        scroll={"body"}
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography className="shortenerHeadline" variant="h4">{ userData.displayName + "´s Shortlinks" }</Typography>
          <DialogContentText id="alert-dialog-description">
            {props.t('manage_headline')}
          </DialogContentText>
        </DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Shortlink</TableCell>
                  <TableCell>Links to</TableCell>
                  <TableCell>Hits</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Link href="https://twa.si/r/extension" target="_blank">https://twa.si/r/extension</Link>
                  </TableCell>
                  <TableCell>
                    <Link href="https://chrome.google.com/webstore/detail/twasi-url-shortener/lngjokdnklohagplfpcpjjmmkcehiabm?hl=de&authuser=1" target="_blank">
                      https://chrome.google.com/webstore/detail/twasi-url-shortener/lngjokdnklohagplfpcpjjmmkcehiabm?hl=de&authuser=1
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Chip color="primary" label="1.337"/>
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Link href="https://twa.si/r/extension" target="_blank">https://twa.si/r/extension</Link>
                  </TableCell>
                  <TableCell>
                    <Link href="https://chrome.google.com/webstore/detail/twasi-url-shortener/lngjokdnklohagplfpcpjjmmkcehiabm?hl=de&authuser=1" target="_blank">
                      https://chrome.google.com/webstore/detail/twasi-url-shortener/lngjokdnklohagplfpcpjjmmkcehiabm?hl=de&authuser=1
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Chip color="primary" label="1.337"/>
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogout} fullWidth color="secondary">
            {props.t('disconnect_button')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ManageDialog;
