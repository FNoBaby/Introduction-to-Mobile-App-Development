import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const Worksheet4a: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Worksheet 4a</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen style={{ backgroundColor: 'white' }}>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton expand="block"> CLICK ME </IonButton>
            </IonCol>
          </IonRow>
          <IonItem lines="none" style={{ backgroundColor: 'white' }} />
          <IonRow>
            <IonCol>
              <IonButton expand="block"> ❤ LIKE </IonButton>
            </IonCol>
          </IonRow>
          <IonItem lines="none" style={{ backgroundColor: 'white' }} />
          <IonRow>
            <IonCol>
              <IonInput placeholder="Enter your name"></IonInput>
            </IonCol>
          </IonRow>
          <IonItem lines="none" style={{ backgroundColor: 'white' }} />
          <IonRow>
            <IonCol>
              <IonItem style={{ backgroundColor: 'white' }}>
                <IonLabel>I agree to the terms and conditions</IonLabel>
                <IonCheckbox slot="end" />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton expand="block" onClick={() => history.push("/")}>Back to Home</IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Worksheet4a;
