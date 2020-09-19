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
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Alert from '@material-ui/lab/Alert';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

import './style.css';

import { useQuery, useMutation, useSubscription, gql } from '@apollo/client';

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

const MY_URL_HITS = gql`
  subscription MyUrlHits($jwt: String!){
    myUrlHits(jwt:$jwt){
      id
      hits
    }
  }
`;

const EDIT_URL = gql`
  mutation EditUrl($id: String!, $newRedirection: String!){
    editUrl(id:$id, newRedirection:$newRedirection){
      redirection
    }
  }
`;

const DELETE_URL = gql`
  mutation DeleteUrl($id: String!){
    deleteUrl(id:$id)
  }
`;

const ManageDialog = (props) => {

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const [userData, setUserData] = React.useState("");
  const [urlToEdit, setUrlToEdit] = React.useState("");
  const [editMode, setEditMode] = React.useState("");
  const [error, setError] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [updatedUrlHits, setUpdatedUrlHits] = React.useState({});

  const { data: myUrlsData, refetch: myUrlsRefetch } = useQuery(MY_URLS, {
    variables:{
      page: page,
      pageSize: 10
    }
  });

  const [editUrl, { data: editUrlData }] = useMutation(EDIT_URL);
  const [deleteUrl, { data: deleteUrlData }] = useMutation(DELETE_URL);
  const { data: myUrlHitsData } = useSubscription(MY_URL_HITS, {
    variables:{
      jwt: localStorage.getItem('JWT'),
    }, onSubscriptionData: ({subscriptionData}) => {
      const {id, hits} = subscriptionData.data.myUrlHits;
      setUpdatedUrlHits({...updatedUrlHits, [id]: {hits}});
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

  const handleToggleEditMode = (id, redirection) => {
    setEditMode(id)
    setUrlToEdit(redirection)
  }

  const handleSaveUrl = (id, redirection) => {
    editUrl({
      variables:{
        id: id,
        newRedirection: redirection.trim()
      }
    }).then(() => {
      myUrlsRefetch()
      setEditMode("")
      setUrlToEdit(editUrlData && editUrlData.editUrl.redirection)
    }).catch(function(error) {
      setError(props.t('error')+": "+error.message)
    })
  }

  const handleDeleteUrl = (id) => {
    deleteUrl({
      variables:{
        id: id,
      }
    }).then(() => {
      myUrlsRefetch()
    }).catch(function(error) {
      setError(props.t('error')+": "+error.message)
    })
  }

  function isInEditMode(id){
    if(editMode === id) {
      return true;
    } else {
      return false;
    }
  }

/*
  function getSubscriptionHits(id) {
    if(myUrlHitsData){
      return myUrlsHitsData.myUrlHits.filter(x => x.id === id).map(x => x.hits)[0];
    }
  }
  */

  function renderItems() {
    return myUrlsData && myUrlsData.myUrls.items.map(item => (
      <TableRow>
        <TableCell><Link href={process.env.REACT_APP_TOP_LEVEL_DOMAIN+"/"+item.short+"/"+item.tag} target="_blank">{process.env.REACT_APP_TOP_LEVEL_DOMAIN+"/"+item.short+"/"+item.tag}</Link></TableCell>
        <TableCell className="overflow">
          <TextField
            size="small"
            disabled={!isInEditMode(item._id)}
            onChange={(event) => {
              setUrlToEdit(event.target.value);
            }}
            value={isInEditMode(item._id) ? urlToEdit : item.redirection}
            className="shortenerTextfield"
            InputProps={{
              endAdornment:
                <InputAdornment position="end">
                  {isInEditMode(item._id) ?
                    <Button
                      size="small"
                      onClick={() => handleSaveUrl(item._id, urlToEdit)}
                      disabled={!urlToEdit}
                      className="shortnerButtonEdit"
                      variant="contained"
                      color="primary"
                      disableElevation
                    >
                      <SaveIcon/>
                    </Button>
                    :
                    <Button
                      size="small"
                      onClick={() => handleToggleEditMode(item._id, item.redirection)}
                      className="shortnerButtonEdit"
                      variant="contained"
                      color="primary"
                      disableElevation
                    >
                      <EditIcon/>
                    </Button>
                  }
                </InputAdornment>
            }}
            variant="outlined"
            fullWidth
          />
          {/*<Link href={item.redirection} target="_blank">{item.redirection}</Link>*/}
        </TableCell>
        <TableCell><Chip label={updatedUrlHits[item._id] ? updatedUrlHits[item._id].hits : item.hits} color="primary"/></TableCell>
        <TableCell>
          <Button
            size="small"
            onClick={() => handleDeleteUrl(item._id)}
            variant="contained"
            color="secondary"
            disableElevation
          >
            <DeleteIcon/>
          </Button>
        </TableCell>
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
        onEnter={() => myUrlsRefetch()}
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
                  <TableCell>Redirection</TableCell>
                  <TableCell>Hits</TableCell>
                  <TableCell>Actions</TableCell>
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
        {error &&
          <Alert variant="outlined" severity="error">
            {error}
          </Alert>
        }
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
