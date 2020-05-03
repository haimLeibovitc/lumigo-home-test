import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './home/Home';
import theme from '../theme';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: white;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
