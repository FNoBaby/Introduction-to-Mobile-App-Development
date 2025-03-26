import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const SpotifySearch: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>Search Page</h2>
      </IonContent>
    </IonPage>
  );
};

export default SpotifySearch;
