import React from "react";
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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import "./style.css";

const Worksheet5b: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Worksheet5b</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="custom-background">

        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeSm="4" sizeMd="4" sizeLg="4" sizeXl="4">
              <IonCard className="custom-card">
                <IonCardHeader>
                  <IonCardTitle>Column 1</IonCardTitle>
                  <IonCardSubtitle color='danger'> This is a responsive column for <b>small, medium, and large screens.</b> </IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeSm="4" sizeMd="4" sizeLg="4" sizeXl="4">
              <IonCard className="custom-card">
                <IonCardHeader>
                  <IonCardTitle>Column 2</IonCardTitle>
                  <IonCardSubtitle> Another responsive column with different sizes. </IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeSm="4" sizeMd="4" sizeLg="4" sizeXl="4">
              <IonCard className="custom-card">
                <IonCardHeader>
                  <IonCardTitle>Column 3</IonCardTitle>
                  <IonCardSubtitle> This column adjusts based on the screen size. </IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* Primary Content Section that appears on scroll */}
        <div className="primary-content">
          <h2>Primary content</h2>
          <p>Here&apos;s a small text description for the content. Nothing more, nothing less.</p>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton expand="block" onClick={() => history.push("/")}>Back to Home</IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Worksheet5b;
