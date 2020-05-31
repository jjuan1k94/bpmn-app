import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { URL_HOME, URL_DIAGRAMA} from './components/layout/types';
import Diagram from './pages/Diagram'
import './assets/css/App.css';

function App() {
  return (
    <div id="bpm-app">
      <Layout>
        <Switch>
          <Route exact path={URL_HOME} component={''} />
          <Route exact path={URL_DIAGRAMA} component={Diagram} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
