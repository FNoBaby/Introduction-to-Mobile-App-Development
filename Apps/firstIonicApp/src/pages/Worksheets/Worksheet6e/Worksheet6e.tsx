import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonList,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonFooter,
  IonButton,
} from "@ionic/react";
import "./style.css";
import { useHistory } from "react-router";

const destinations = [
  {
    id: 1,
    title: "Paris",
    subtitle: "City of Lights",
    description: "Famous for the Eiffel Tower and art museums.",
  },
  {
    id: 2,
    title: "Rome",
    subtitle: "Eternal City",
    description: "Home to the Colosseum and Vatican City.",
  },
  {
    id: 3,
    title: "Tokyo",
    subtitle: "Modern Metropolis",
    description: "Blend of traditional and future.",
  },
];

const Worksheet6e: React.FC = () => {
  const [selectedDest, setSelectedDest] = useState(destinations[0]);
  const history = useHistory();

  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Destinations</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {destinations.map((dest) => (
              <IonItem
                key={dest.id}
                button
                onClick={() => setSelectedDest(dest)}
              >
                <IonLabel>{dest.title}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Travel Guide</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{selectedDest.title}</IonCardTitle>
              <IonCardSubtitle>{selectedDest.subtitle}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{selectedDest.description}</IonCardContent>
          </IonCard>
        </IonContent>
        <IonFooter>
          <IonToolbar>
            <IonButton expand="block" onClick={() => history.push("/")}>
              Back to Home
            </IonButton>
          </IonToolbar>
        </IonFooter>
      </IonPage>
    </>
  );
};

export default Worksheet6e;
