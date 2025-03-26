import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonNavLink,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonFooter,
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

const DestinationDetail: React.FC<{ destination: any }> = ({ destination }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{destination.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="destination-card">
          <IonCardHeader>
            <IonCardTitle>{destination.title}</IonCardTitle>
            <IonCardSubtitle>{destination.subtitle}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>{destination.description}</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

const Worksheet6d: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Travel Guide</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {destinations.map((dest) => (
          <IonNavLink
            key={dest.id}
            routerDirection="forward"
            component={() => <DestinationDetail destination={dest} />}
          >
            <IonCard className="destination-card">
              <IonCardHeader>
                <IonCardTitle>{dest.title}</IonCardTitle>
                <IonCardSubtitle>{dest.subtitle}</IonCardSubtitle>
              </IonCardHeader>
              <IonButton expand="block">View Details</IonButton>
            </IonCard>
          </IonNavLink>
        ))}
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

export default Worksheet6d;
