import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

<<<<<<< HEAD
import { ApolloProvider, ApolloLink, concat} from '@apollo/client';
=======
import { ApolloLink, ApolloProvider, concat } from '@apollo/client';
>>>>>>> 80325e1c99d62cb2406314aee463c784827c236f
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { HttpLink } from 'apollo-link-http';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';

import Header from './views/common/Header';
import Content from './views/common/Content';
import Footer from './views/common/Footer';
import PanelContent from './views/common/PanelContent';

import './App.css';

import twasiDarkBlue from './theme/twasi-darkblue/twasi-darkblue';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GQL_API
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
<<<<<<< HEAD
      authorization: localStorage.getItem('JWT') ? localStorage.getItem('JWT') : "",
=======
      authorization: localStorage.getItem('JWT') || null,
>>>>>>> 80325e1c99d62cb2406314aee463c784827c236f
    }
  });

  return forward(operation);
})
const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_GQL_WS,
  options: {
    reconnect: true
  }
});

const splittedHttpLink = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const link = concat(authMiddleware, splittedHttpLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

const App = ({t}) => {
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

export default (App);
