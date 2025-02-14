import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Worksheet4a from './pages/Worksheets/Worksheet4a/Worksheet4a';
import Worksheet4b from './pages/Worksheets/Worksheet4b/Worksheet4b';
import Worksheet4c from './pages/Worksheets/Worksheet4c/Worksheet4c';
import Worksheet4d from './pages/Worksheets/Worksheet4d/Worksheet4d';
import Worksheet4e from './pages/Worksheets/Worksheet4e/Worksheet4e';
import Worksheet4f from './pages/Worksheets/Worksheet4f/Worksheet4f';
import Worksheet4g from './pages/Worksheets/Worksheet4g/Worksheet4g';
import Worksheet5a from './pages/Worksheets/Worksheet5a/Worksheet5a';
import Worksheet5b from './pages/Worksheets/Worksheet5b/Worksheet5b';
// ...import other screens as needed...

import Home from './pages/Home';
// ...import other screens as needed...

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={Home} exact={true} />
        <Route path="/Worksheets/Worksheet4a" component={Worksheet4a} exact={true} />
        <Route path="/Worksheets/Worksheet4b" component={Worksheet4b} exact={true} />
        <Route path="/Worksheets/Worksheet4c" component={Worksheet4c} exact={true} />
        <Route path="/Worksheets/Worksheet4d" component={Worksheet4d} exact={true} />
        <Route path="/Worksheets/Worksheet4e" component={Worksheet4e} exact={true} />
        <Route path="/Worksheets/Worksheet4f" component={Worksheet4f} exact={true} />
        <Route path="/Worksheets/Worksheet4g" component={Worksheet4g} exact={true} />
        <Route path="/Worksheets/Worksheet5a" component={Worksheet5a} exact={true} />
        <Route path="/Worksheets/Worksheet5b" component={Worksheet5b} exact={true} />
        {/* Add more routes as needed */}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
