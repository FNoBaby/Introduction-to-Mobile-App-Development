import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonFooter,
  IonRange,
  IonLabel,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const Worksheet4f: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Worksheet4f</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRange pin={true} pinFormatter={(value: number) => `${value}%`}>
            <IonLabel slot="start">0</IonLabel>
            <IonLabel slot="end">100</IonLabel>
        </IonRange>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton expand="block" onClick={() => history.push("/")}>Back to Home</IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Worksheet4f;
