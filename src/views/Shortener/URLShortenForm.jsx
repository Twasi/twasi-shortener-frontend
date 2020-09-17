import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import LoopIcon from '@material-ui/icons/Loop';
import Alert from '@material-ui/lab/Alert';

import { withNamespaces } from 'react-i18next';

import randomWords from 'random-words';

import SuccessPage from './SuccessPage';
import NotFoundDialog from './NotFoundDialog';
import ConnectDialog from './ConnectDialog';
import ManageDialog from './ManageDialog';

import { useMutation, useQuery, useSubscription, gql } from '@apollo/client';

const CREATE_PUBLIC_URL = gql`
  mutation CreatePublicUrl($tag: String!,$redirection: String!){
    createPublicUrl(tag:$tag,redirection:$redirection){
  		short
      tag
      created
      redirection
      createdBy{
        type
        id
        ip
      }
      urlNumber
    }
  }
`;

const CREATE_AUTHENTICATED_URL = gql`
  mutation CreateUrl($tag: String!,$short: String!,$redirection: String!){
    createUrl(tag:$tag,short:$short,redirection:$redirection){
  		short
      tag
      created
      redirection
      createdBy{
        type
        id
        ip
      }
      urlNumber
    }
  }
`;

const ALLOWED_FORMAT = gql`
  query{
    clientValidation{
      validateTag{
        regex
        flags
      }
      validateRedirectUrl{
        regex
        flags
      }
    }
  }
`;

const PUBLIC_STATS = gql`
  query {
    publicStats {
      urlsCreated
    }
  }
`;

const GLOBAL_STATS = gql`
  query GlobalStats($shorts: [String]!){
    globalStats(shorts: $shorts) {
      urlsCreated
    }
  }
`;

const PUBLIC_STATS_SUBSCRIPTION = gql`
  subscription {
    publicStats {
      urlsCreated
    }
  }
`;

const ME = gql`
  query {
    me {
      _id
      userName
      displayName
      twitchId
      avatar
      email
    }
  }
`;

/*
const CHECK_TAG = gql`
  query checkTag($tag: String!){
    existsPublic(tag: $tag)
  }
`;
*/

function removeParams(sParam)
{
    var url = window.location.href.split('?')[0]+'?';
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] !== sParam) {
            url = url + sParameterName[0] + '=' + sParameterName[1] + '&'
        }
    }
    return url.substring(0,url.length-1);
}

const URLShortenForm = ({t}) => {

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if(urlParams.has('404')){
      setOpen404(true);
    }

    const linkArray = t('link_array', { returnObjects: true });
    var selectedLink = linkArray[Math.floor(Math.random() * linkArray.length)];
    setSelectedLink(selectedLink);

    const buttonArray = t('button_array', { returnObjects: true });
    var selectedButton = buttonArray[Math.floor(Math.random() * buttonArray.length)];
    setSelectedButton(selectedButton);

  }, [t]);

  const [url_to_shorten, setUrl_to_shorten] = React.useState("");
  const [create_own_short_tag, setCreate_own_short_tag] = React.useState(false);
  const [own_short_tag, setOwn_short_tag] = React.useState("");
  const [own_short_tag_placeholder, setOwn_short_tag_placeholder] = React.useState("");
  const [error, setError] = React.useState("");
  const [open404, setOpen404] = React.useState(false);
  const [openConnect, setOpenConnect] = React.useState(false);
  const [openManage, setOpenManage] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [selectedLink, setSelectedLink] = React.useState("");
  const [selectedButton, setSelectedButton] = React.useState(false);

  const [createPublicUrl, { data: urlData }] = useMutation(CREATE_PUBLIC_URL);
  const [createAuthUrl, { data: authUrlData }] = useMutation(CREATE_AUTHENTICATED_URL);
  const { data: regExData, loading: regExLoading } = useQuery(ALLOWED_FORMAT);
  //const { data: publicStatsData, loading: publicStatsLoading } = useQuery(PUBLIC_STATS);
  const { loading: globalStatsLoading, data: globalStatsData } = useQuery(GLOBAL_STATS, {
    variables:{
      shorts: ["r","c"],
    }
  });
  //const { data: publicStatsSubscriptionData } = useSubscription(PUBLIC_STATS_SUBSCRIPTION);
  const { data: meData } = useQuery(ME);
  //const [checkTag, { loading: tagLoading, data: tagData }] = useLazyQuery(CHECK_TAG);

  if(regExLoading) return (<p>Loading...</p>);
  //if(publicStatsLoading) return (<p>Loading...</p>);
  if(globalStatsLoading) return (<p>Loading...</p>);

  function randomizeShortTag() {
    var randomString = randomWords(3);
    setOwn_short_tag(randomString.join(''))
  }

  function handleCreateUrl() {
    const regexUrl = new RegExp(regExData.clientValidation.validateRedirectUrl.regex, regExData.clientValidation.validateRedirectUrl.tags);
    //const regexTag = new RegExp(regExData.clientValidation.validateTag.regex, regExData.clientValidation.validateTag.tags);
    if(regexUrl.test(url_to_shorten)) {
      // check if authenticated
      if(isLoggedIn()) {
        createAuthUrl({
          variables:{
            tag: own_short_tag.trim(),
            short: '',
            redirection: url_to_shorten.trim()
          }
        })
        .then(() => {
          setSuccess(true);
          setUrl_to_shorten("");
          setOwn_short_tag("");
          setError("");
          setCreate_own_short_tag(false)
        })
        .catch(function(error) {
          setError(t('error')+": "+error.message)
        })
      } else {
        createPublicUrl({
          variables:{
            tag: own_short_tag.trim(),
            redirection: url_to_shorten.trim()
          }
        })
        .then(() => {
          setSuccess(true);
          setUrl_to_shorten("");
          setOwn_short_tag("");
          setError("");
          setCreate_own_short_tag(false)
        })
        .catch(function(error) {
          setError(t('error')+": "+error.message)
        })
      }
    } else {
      setError(t('error')+": "+t('url_error'))
    }
  }

  function handleSetOwnTag(event) {
    setCreate_own_short_tag(event.target.checked)
    if(!create_own_short_tag){
      setOwn_short_tag("");
    }
    var randomString = randomWords(3);
    setOwn_short_tag_placeholder(randomString.join(''))
  }

  const isLoggedIn = () => {
    if(meData && meData.me){
      return true;
    } else {
      return false;
    }
  }

  const handleClose404 = () => {
    setOpen404(false);
    window.location = removeParams('404');
  };

  const handleOpenConnect = () => {
    setOpenConnect(true);
  };

  const handleCloseConnect = () => {
    setOpenConnect(false);
  };

  const handleOpenManage = () => {
    setOpenManage(true);
  };

  const handleCloseManage = () => {
    setOpenManage(false);
  };

  const handleNewUrl = () => {
    setSuccess(false);
    setUrl_to_shorten("");
    setOwn_short_tag("");
    setError("");
    setCreate_own_short_tag(false)
  };

  function renderForm() {

    return (
      <div className="anim">
        <Grid container>
          <Grid item xs={9}>
            <Typography className="shortenerHeadline" variant="h4">
              {t('shorten_url')}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Button style={{ marginRight: '12px', float: 'right' }} onClick={isLoggedIn() ? handleOpenManage : handleOpenConnect}>
              <Typography variant="caption" display="block">
                {isLoggedIn() ? t('manage') : t('connect')}
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Paper>
          <TextField
            onChange={(event) => {
              setUrl_to_shorten(event.target.value);
              setError("");
            }}
            value={url_to_shorten}
            placeholder={selectedLink}
            className="shortenerTextfield"
            InputProps={{
              endAdornment:
                <InputAdornment position="end">
                  <Button
                    disabled={!url_to_shorten}
                    onClick={() => handleCreateUrl()}
                    className="shortnerButton"
                    variant="contained"
                    color="primary"
                    disableElevation
                  >
                    {selectedButton}
                  </Button>
                </InputAdornment>,
            }}
            variant="outlined"
            fullWidth
          />
        </Paper>
        <Grid container>
          <Grid item xs={6}>
            <FormControlLabel
              className="shortenerCheckbox"
              control={
                <Checkbox
                  onChange={(event) => handleSetOwnTag(event)}
                  checked={create_own_short_tag}
                  name="createOwnShortTag"
                  color="primary"
                />
              }
              label={
                <Typography style={{ marginTop: "6px" }} variant="caption" display="block" gutterBottom>
                  {t('choose_own_tag')}
                </Typography>
              }
            />
          </Grid>
          <Grid item xs={6}>
            <Typography style={{ marginTop: "16px", marginRight: "12px", color: "#afb6c5", textAlign: "right" }} variant="caption" display="block" gutterBottom>
              {t('created_urls')}: {globalStatsData && globalStatsData.globalStats.urlsCreated}
            </Typography>
          </Grid>
        </Grid>
        {create_own_short_tag &&
          <Paper style={{ marginBottom: '15px' }}>
            <TextField
              onChange={(event) => setOwn_short_tag(event.target.value)}
              value={own_short_tag}
              placeholder={own_short_tag_placeholder}
              InputProps={{
                startAdornment:
                  <InputAdornment position="start">
                    {process.env.REACT_APP_TOP_LEVEL_DOMAIN + (isLoggedIn() ? process.env.REACT_APP_AUTHENTICATED_SHORT : process.env.REACT_APP_PUBLIC_SHORT) + "/"}
                  </InputAdornment>,
                endAdornment:
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="randomize short tag"
                      onClick={() => randomizeShortTag()}
                      edge="end"
                    >
                      <LoopIcon />
                    </IconButton>
                  </InputAdornment>,
              }}
              variant="outlined"
              fullWidth
            />
          </Paper>
        }
        {error &&
          <Alert variant="outlined" severity="error">
            {error}
          </Alert>
        }
      </div>
    )
  }

  return (
    <div>
      <NotFoundDialog t={t} onClose={handleClose404} open={open404}/>
      {isLoggedIn() ?
        <ManageDialog t={t} onClose={handleCloseManage} isLoggedIn={isLoggedIn()} meData={isLoggedIn() && meData} open={openManage}/> :
        <ConnectDialog t={t} onClose={handleCloseConnect} isLoggedIn={isLoggedIn()} open={openConnect}/>
      }
      {success && (urlData || authUrlData) ? <SuccessPage t={t} onNewUrl={handleNewUrl} isLoggedIn={isLoggedIn()} urlData={isLoggedIn() ? authUrlData : urlData}/> : renderForm()}
    </div>
  )
}

export default withNamespaces()(URLShortenForm);
