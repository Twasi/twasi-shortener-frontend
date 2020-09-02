import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';

const SuccessPage = (props) => {
  return(
    <div>
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
                <Button className="shortnerButton" variant="contained" color="primary" disableElevation>
                  Kopieren
                </Button>
              </InputAdornment>,
          }}
          variant="outlined"
          fullWidth
        />
      </Paper>
      <div className="newUrl">
        <Button className="newUrlButton" variant="outlined" color="primary" disableElevation>
          Weitere URL kürzen
        </Button>
        <Button className="newUrlButton" style={{ marginLeft: '10px' }} variant="outlined" color="primary" disableElevation>
          Auf Twitter teilen
        </Button>
      </div>
    </div>
  )
}

export default SuccessPage;
