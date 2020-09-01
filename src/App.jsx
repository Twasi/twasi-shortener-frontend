import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

import Header from './views/common/Header';
import Content from './views/common/Content';
import Footer from './views/common/Footer';
import PanelContent from './views/common/PanelContent';

import './App.css';

import twasiDarkBlue from './theme/twasi-darkblue/twasi-darkblue';

require('dotenv').config()
const client = new ApolloClient({
  uri: 'https://twa.si/gql',
  cache: new InMemoryCache()
});

console.log(client)

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={twasiDarkBlue}>
        <CssBaseline/>
          <BrowserRouter>
            <Content>
              <Header/>
              <Switch>
                <Route path="/" component={PanelContent} />
              </Switch>
              <Footer/>
            </Content>
          </BrowserRouter>
      </MuiThemeProvider>
    </ApolloProvider>
  );
}

export default App;
