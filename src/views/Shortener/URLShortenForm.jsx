import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import LoopIcon from '@material-ui/icons/Loop';
import Alert from '@material-ui/lab/Alert';

import randomWords from 'random-words';

import SuccessPage from './SuccessPage';
import NotFoundDialog from './NotFoundDialog';

import { useMutation, useQuery, gql } from '@apollo/client';

const CREATE_PUBLIC_URL = gql`
  mutation CreatePublicUrl($tag: String!,$url: String!){
    createPublicUrl(tag:$tag,url:$url){
  		short
      tag
      created
      redirection
      createdBy{
        type
        id
        ip
      }
    }
  }
`;

const ALLOWED_TAG_FORMAT = gql`
  query{
    clientValidation{
      validateTag{
        regex
        flags
      }
    }
  }
`;

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

const URLShortenForm = () => {

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if(urlParams.has('404')){
      setOpen404(true);
    }

    const linkArray = [
      "https://mein-megalanger-link.de",
      "https://ich-habe-den-laengsten-link.com",
      "https://lang-laenger-amlaengsten.net",
      "https://das-verlangen-nach-langen-links.de",
      "https://aus-lang-mach-kurz.de",
      "https://in-der-kuerze-liegt-die-wuerze.net",
      "https://wie-kuerze-ich-meinen-link-am-besten.net"
    ]
    var selectedLink = linkArray[Math.floor(Math.random() * linkArray.length)];
    setSelectedLink(selectedLink);

    const buttonArray = [
      "Magie!",
      "Mach kürzer!",
      "Klick mich!",
      "KÜRZER!",
      "Simsala Bim!",
      "Hex Hex!",
      "Schnip Schnap!"
    ]
    var selectedButton = buttonArray[Math.floor(Math.random() * buttonArray.length)];
    setSelectedButton(selectedButton);

  }, []);

  const [createPublicUrl,{ loading: urlLoading, data: urlData }] = useMutation(CREATE_PUBLIC_URL);
  const { loading: regExLoading, error: regExError, data: regExData } = useQuery(ALLOWED_TAG_FORMAT);

  const [url_to_shorten, setUrl_to_shorten] = React.useState("");
  const [create_own_short_tag, setCreate_own_short_tag] = React.useState(false);
  const [own_short_tag, setOwn_short_tag] = React.useState("");
  const [own_short_tag_placeholder, setOwn_short_tag_placeholder] = React.useState("");
  const [error, setError] = React.useState("");
  const [open404, setOpen404] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [selectedLink, setSelectedLink] = React.useState("");
  const [selectedButton, setSelectedButton] = React.useState(false);

  if (urlLoading) return <p>Loading...</p>;
  if (regExLoading) return <p>Loading...</p>;
  if (regExError) return <p>RegEx Endpoint Error!</p>;

  function randomizeShortTag() {
    var randomString = randomWords(3);
    setOwn_short_tag(randomString.join(''))
  }

  function handleCreatePublicUrl() {
    const regex = new RegExp(regExData.clientValidation.validateTag.regex, regExData.clientValidation.validateTag.tags);
    if(!regex.test(url_to_shorten)) {
      createPublicUrl({variables:{tag:own_short_tag,url:url_to_shorten}})
      .then(() => {
        setSuccess(true);
        setUrl_to_shorten("");
        setOwn_short_tag("");
        setError("");
        setCreate_own_short_tag(false)
      })
      .catch(function(error) {
        setError('Fehler: '+error.message)
      })
    } else {
      setError('Fehler: Bitte überprüfe deine zu kürzende URL.')
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

  const handleClose404 = () => {
    setOpen404(false);
    window.location = removeParams('404');
  };

  const handleNewUrl = () => {
    setSuccess(false);
  };

  function renderForm() {
    return (
      <div className="anim">
        <Typography className="shortenerHeadline" variant="h4">URL kürzen</Typography>
        <Paper>
          <TextField
            onChange={(event) => setUrl_to_shorten(event.target.value)}
            value={url_to_shorten}
            placeholder={selectedLink}
            className="shortenerTextfield"
            InputProps={{
              endAdornment:
                <InputAdornment position="end">
                  <Button
                    disabled={!url_to_shorten}
                    onClick={() => handleCreatePublicUrl()}
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
              Eigene Short URL wählen
            </Typography>
          }
        />
        {create_own_short_tag &&
          <Paper style={{ marginBottom: '15px' }}>
            <TextField
              onChange={(event) => setOwn_short_tag(event.target.value)}
              value={own_short_tag}
              placeholder={own_short_tag_placeholder}
              InputProps={{
                startAdornment:
                  <InputAdornment position="start">
                    {process.env.REACT_APP_DOMAIN}
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
      <NotFoundDialog onClose={handleClose404} open={open404}/>
      {success && urlData ? <SuccessPage onNewUrl={handleNewUrl} urlData={urlData}/> : renderForm()}
    </div>
  )
}

export default URLShortenForm;
