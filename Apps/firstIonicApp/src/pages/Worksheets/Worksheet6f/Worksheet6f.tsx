import React from 'react';
import {
  IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCard, IonCardContent, IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonRouterOutlet,
  IonFooter,
  IonButton
} from '@ionic/react';
import { airplane, bed, restaurant } from 'ionicons/icons';
import { Route, Redirect, useHistory } from 'react-router';
import './style.css';

const destinations = [
  { id: 1, title: 'Paris', subtitle: 'City of Lights', description: 'Famous for the Eiffel Tower and art museums.' },
  { id: 2, title: 'Rome', subtitle: 'Eternal City', description: 'Home to the Colosseum and Vatican City.' },
  { id: 3, title: 'Tokyo', subtitle: 'Modern Metropolis', description: 'Blend of traditional and future.' }
];

const Flights: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Flights</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      {destinations.map(dest => (
        <IonCard key={dest.id}>
          <IonCardHeader>
            <IonCardTitle>Flight to {dest.title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Available flights to {dest.title}</IonCardContent>
        </IonCard>
      ))}
    </IonContent>
  </IonPage>
);

const Hotels: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Hotels</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      {destinations.map(dest => (
        <IonCard key={dest.id}>
          <IonCardHeader>
            <IonCardTitle>Hotels in {dest.title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Available hotels in {dest.title}</IonCardContent>
        </IonCard>
      ))}
    </IonContent>
  </IonPage>
);

const Restaurants: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Restaurants</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      {destinations.map(dest => (
        <IonCard key={dest.id}>
          <IonCardHeader>
            <IonCardTitle>Restaurants in {dest.title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Popular restaurants in {dest.title}</IonCardContent>
        </IonCard>
      ))}
    </IonContent>
  </IonPage>
);

const Worksheet6f: React.FC = () => {
  const history = useHistory();

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/worksheet6f/flights" component={Flights} />
        <Route exact path="/worksheet6f/hotels" component={Hotels} />
        <Route exact path="/worksheet6f/restaurants" component={Restaurants} />
        <Route exact path="/worksheet6f">
          <Redirect to="/worksheet6f/flights" />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="flights" href="/worksheet6f/flights">
          <IonIcon icon={airplane} />
          <IonLabel>Flights</IonLabel>
        </IonTabButton>
        <IonTabButton tab="hotels" href="/worksheet6f/hotels">
          <IonIcon icon={bed} />
          <IonLabel>Hotels</IonLabel>
        </IonTabButton>
        <IonTabButton tab="restaurants" href="/worksheet6f/restaurants">
          <IonIcon icon={restaurant} />
          <IonLabel>Restaurants</IonLabel>
        </IonTabButton>
      </IonTabBar>
      <IonFooter>
        <IonToolbar>
          <IonButton expand="block" onClick={() => history.push("/")}>Back to Home</IonButton>
        </IonToolbar>
      </IonFooter>
    </IonTabs>
  );
};

export default Worksheet6f;
