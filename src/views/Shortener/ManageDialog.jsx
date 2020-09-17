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
import Pagination from '@material-ui/lab/Pagination';

import './style.css';

import { useQuery, gql } from '@apollo/client';

const MY_URLS = gql`
  query MyUrls($page: Int,$pageSize: Int){
    myUrls(page:$page, pageSize:$pageSize){
      page
      pages
      total
      items{
        _id
        short
        tag
        created
        redirection
        hits
        createdBy{
          type
          id
          ip
        }
        urlNumber
      }
    }
  }
`;

const ManageDialog = (props) => {

  const [userData, setUserData] = React.useState("");
  const [page, setPage] = React.useState(1);

  const { data: myUrlsData } = useQuery(MY_URLS, {
    variables:{
      page: page,
      pageSize: 10
    }
  });

  const mount = () => {
    setUserData(props.meData.me)
  }
  useEffect(mount, [])

  const handleTwitchLogout = () => {
    if(props.isLoggedIn) {
      localStorage.removeItem('JWT');
      window.location.reload();
    }
  }

  const handleChangePage = (event, value) => {
    setPage(value)
  };

  function renderItems() {
    return myUrlsData && myUrlsData.myUrls.items.map(item => (
      <TableRow>
        <TableCell><Link href={process.env.REACT_APP_TOP_LEVEL_DOMAIN+"/"+item.short+"/"+item.tag} target="_blank">{process.env.REACT_APP_TOP_LEVEL_DOMAIN+"/"+item.short+"/"+item.tag}</Link></TableCell>
        <TableCell className="overflow"><Link href={item.redirection} target="_blank">{item.redirection}</Link></TableCell>
        <TableCell><Chip label={item.hits} color="primary"/></TableCell>
      </TableRow>
    ))
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
                </TableRow>
              </TableHead>
              <TableBody>
                {renderItems()}
              </TableBody>
            </Table>
          </TableContainer>
          {myUrlsData && myUrlsData.myUrls.pages > 1 &&
          <div className="paginationWrapper" style={{ marginTop: '25px' }}>
            <Pagination count={myUrlsData && myUrlsData.myUrls.pages} page={page} onChange={handleChangePage} color="primary" />
          </div>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleTwitchLogout} fullWidth color="secondary">
            {props.t('disconnect_button')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ManageDialog;
