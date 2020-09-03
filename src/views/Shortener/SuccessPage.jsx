import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';


function handleRedirect(uri, blank){
  window.open(encodeURI(uri), blank);
}

const SuccessPage = (props) => {
  const [copied, setCopied] = React.useState(false);
  return(
    <div className="anim">
      <Typography className="shortenerHeadline" variant="h4">
        Deine URL
      </Typography>
      <Paper>
        <TextField
          value={'https://twa.si/'+props.urlData.createPublicUrl.short+'/'+props.urlData.createPublicUrl.tag}
          className="shortenerTextfield"
          InputProps={{
            endAdornment:
              <InputAdornment position="end">
                <Button
                  onClick={e => {
                    navigator.clipboard.writeText('https://twa.si/'+props.urlData.createPublicUrl.short+'/'+props.urlData.createPublicUrl.tag);
                    setCopied(true)
                    e.stopPropagation();
                  }}
                  className="shortnerButton"
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  {copied ? 'Kopiert!' : 'Kopieren'}
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
          Weitere URL kürzen
        </Button>
        <Button
          onClick={() => { handleRedirect("https://twitter.com/intent/tweet?text=Schaut euch meinen coolen neuen Link an, der mit dem @TwasiNet Link-Shortener erstellt wurde! https://twa.si/"+props.urlData.createPublicUrl.short+"/"+props.urlData.createPublicUrl.tag+" Auf https://twa.si kannst du deinen eigenen Shortlink erstellen! 👀", "_blank") }}
          className="newUrlButton"
          style={{ marginLeft: '10px' }}
          variant="outlined"
          color="primary"
          disableElevation
        >
          Auf Twitter teilen
        </Button>
        <Button
          disabled
          className="newUrlButton"
          style={{ marginLeft: '10px' }}
          variant="outlined"
          disableElevation
        >
          Link Nummer: 1.338
        </Button>
      </div>
    </div>
  )
}

export default SuccessPage;
