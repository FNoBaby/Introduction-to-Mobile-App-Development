import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonApp,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router";
import { settings, card } from "ionicons/icons";
import Expenses from "./pages/Expenses";
import Preferences from "./pages/Preferences";
const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Redirect exact path="/" to="/expenses" />
            <Route path="/expenses" render={() => <Expenses />} exact={true} />
            <Route
              path="/preferences"
              render={() => <Preferences />}
              exact={true}
            />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="expenses" href="/expenses">
              <IonIcon icon={card} />
              <IonLabel>Expenses</IonLabel>
            </IonTabButton>

            <IonTabButton tab="preferences" href="/preferences">
              <IonIcon icon={settings} />
              <IonLabel>Preferences</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
