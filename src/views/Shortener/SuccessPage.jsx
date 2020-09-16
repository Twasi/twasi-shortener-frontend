import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import QRCode from 'qrcode.react';

import isLoggedIn from '../../jwtContents'

function handleRedirect(uri, blank){
  window.open(encodeURI(uri), blank);
}

const SuccessPage = (props) => {

  const [copied, setCopied] = React.useState(false);
  const shortUrl = isLoggedIn() ? process.env.REACT_APP_TOP_LEVEL_DOMAIN+"/"+props.urlData.createUrl.short+'/'+props.urlData.createUrl.tag:
    process.env.REACT_APP_TOP_LEVEL_DOMAIN+"/"+props.urlData.createPublicUrl.short+'/'+props.urlData.createPublicUrl.tag;
  const urlCount = isLoggedIn() ? props.urlData.createUrl.urlNumber : props.urlData.createPublicUrl.urlNumber;
  const shareText = props.t('share_text').replace('%shortlink%',shortUrl).replace('%top_level_domain%',process.env.REACT_APP_TOP_LEVEL_DOMAIN);

  return(
    <div className="anim">
      <QRCode
        className="QRCode"
        bgColor="transparent"
        fgColor="#2f80ed"
        value={shortUrl}
      />
      <Typography className="shortenerHeadline" variant="h4">
        {props.t('your_url')}
      </Typography>
      <Paper>
        <TextField
          value={shortUrl}
          className="shortenerTextfield"
          InputProps={{
            endAdornment:
              <InputAdornment position="end">
                <Button
                  onClick={e => {
                    navigator.clipboard.writeText(shortUrl);
                    setCopied(true)
                    e.stopPropagation();
                  }}
                  className="shortnerButton"
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  {copied ? props.t('copied') : props.t('copy')}
                </Button>
              </InputAdornment>,
          }}
          variant="outlined"
          fullWidth
        />
      </Paper>
      <div className="newUrl">
        <Button
          onClick={props.onNewUrl}
          className="newUrlButton"
          variant="outlined"
          color="primary"
          disableElevation
        >
          {props.t('shorten_another_url')}
        </Button>
        <Button
          onClick={() => { handleRedirect("https://twitter.com/intent/tweet?text="+shareText, "_blank") }}
          className="newUrlButton"
          style={{ marginLeft: '10px' }}
          variant="outlined"
          color="primary"
          disableElevation
        >
          {props.t('share_on_twitter')}
        </Button>
        <Button
          disabled
          className="newUrlButton"
          style={{ marginLeft: '10px', float: 'right' }}
          variant="outlined"
          disableElevation
        >
          {props.t('link_number')}: {urlCount}
        </Button>
      </div>
    </div>
  )
}

export default SuccessPage;
