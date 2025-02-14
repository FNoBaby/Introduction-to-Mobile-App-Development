import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonFooter,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const Worksheet4d: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Worksheet4d</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSegment value="segment1">
          <IonSegmentButton value="segment1">
            <IonLabel>Segment 1</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="segment2">
            <IonLabel>Segment 2</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton expand="block" onClick={() => history.push("/")}>
            Back to Home
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Worksheet4d;
