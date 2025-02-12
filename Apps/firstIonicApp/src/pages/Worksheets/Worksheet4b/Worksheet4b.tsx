import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonToast,
  IonText,
  IonBadge,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const Worksheet4b: React.FC = () => {
  const history = useHistory();
  const [showToast, setShowToast] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Toast and Badges</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={() => setShowToast(true)}>
                Click Me
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonText>
                This Toast example uses triggers to automatically open a toast
                when the button is clicked.
              </IonText>
            </IonCol>
          </IonRow>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonText>Followers</IonText>
              </IonCol>

              <IonCol className="ion-text-right">
                <IonBadge color="primary">22k</IonBadge>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonText>Likes</IonText>
              </IonCol>

              <IonCol className="ion-text-right">
                <IonBadge color="secondary">118k</IonBadge>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonText>Stars</IonText>
              </IonCol>

              <IonCol className="ion-text-right">
                <IonBadge color="tertiary">34k</IonBadge>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonText>Completed</IonText>
              </IonCol>

              <IonCol className="ion-text-right">
                <IonBadge color="success">80</IonBadge>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonText>Warnings</IonText>
              </IonCol>

              <IonCol className="ion-text-right">
                <IonBadge color="warning">118k</IonBadge>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonText>Notifications</IonText>
              </IonCol>

              <IonCol className="ion-text-right">
                <IonBadge color="danger">1000</IonBadge>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonGrid>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="This toast will disappear after 5 seconds"
          duration={5000}
        />
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

export default Worksheet4b;
