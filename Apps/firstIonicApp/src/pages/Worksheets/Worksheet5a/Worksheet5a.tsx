import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonFooter,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCol,
  IonRow,
  IonGrid,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import "./style.css";

const Worksheet5a: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Worksheet5a</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="custom-background" fullscreen>
        <h1>Welcome to Ionic Layouts</h1>
        <p>Explore the power of Ionic layouts and CSS!</p>

        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="6">
              <IonCard className="custom-card">
                <IonCardHeader>
                  <IonCardTitle className="custom-placeholder">Column 1</IonCardTitle>
                </IonCardHeader>
                <IonCardContent className="custom-placeholder">
                  This is a responsive column.
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeMd="6">
              <IonCard className="custom-card">
                <IonCardHeader>
                  <IonCardTitle className="custom-placeholder">Column 2</IonCardTitle>
                </IonCardHeader>
                <IonCardContent className="custom-placeholder">
                  Another responsive column.
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <div className="styled-section">
          <h2>Styled Section</h2>
          <p>This section has custom styling applied.</p>
        </div>
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

export default Worksheet5a;
