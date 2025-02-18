import React from "react";
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { settings, card } from "ionicons/icons";

const Expenses: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Expenses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Add content here */}
        
      </IonContent>
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
    </IonPage>
  );
};

export default Expenses;
