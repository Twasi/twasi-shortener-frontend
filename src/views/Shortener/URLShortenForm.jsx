import React from 'react';
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

import { useMutation, useQuery, gql } from '@apollo/client';

const CREATE_PUBLIC_URL = gql`
  mutation{
    createPublicUrl(tag: $tag, url: $url) {
      tag
      url
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

const URLShortenForm = () => {
  //const [createPublicUrl, { data }] = useMutation(CREATE_PUBLIC_URL);
  const { loading, error, data } = useQuery(ALLOWED_TAG_FORMAT);

  const [url_to_shorten, setUrl_to_shorten] = React.useState("");
  const [create_own_short_tag, setCreate_own_short_tag] = React.useState(false);
  const [own_short_tag, setOwn_short_tag] = React.useState("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  function randomizeShortTag() {
    var randomString = Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);
    setOwn_short_tag(randomString)
  }

  function handleCreatePublicUrl() {
    //createPublicUrl({ variables: { tag: own_short_tag, url: url_to_shorten } });
    setUrl_to_shorten("");
    setOwn_short_tag("");
    setCreate_own_short_tag(false)
  }

  return(
    <div>
      <Typography className="shortenerHeadline" variant="h4">URL kürzen</Typography>
      <Paper>
        <TextField
          onChange={(event) => setUrl_to_shorten(event.target.value)}
          value={url_to_shorten}
          placeholder="https://mein-megalanger-link.de"
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
                  Mach ihn kurz!
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
            onChange={(event) => setCreate_own_short_tag(event.target.checked)}
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
        <Paper>
          <TextField
            onChange={(event) => setOwn_short_tag(event.target.value)}
            value={own_short_tag}
            placeholder="s3xy"
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  twa.si/r/
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
      {data &&
        <Alert variant="outlined" severity="info">
          {data.clientValidation.validateTag.regex}
        </Alert>
      }
      {error &&
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      }
    </div>
  )
}

export default URLShortenForm;
