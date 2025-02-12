import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Worksheet4a from './pages/Worksheets/Worksheet4a/Worksheet4a';
import Worksheet4b from './pages/Worksheets/Worksheet4b/Worksheet4b';
import Worksheet4c from './pages/Worksheets/Worksheet4c/Worksheet4c';

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
        {/* Add more routes as needed */}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
