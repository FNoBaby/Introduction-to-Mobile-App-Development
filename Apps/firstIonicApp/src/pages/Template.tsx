import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonFooter,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const Template: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Template</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton expand="block" onClick={() => history.push("/")}>Back to Home</IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Template;
