import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  const [counter, setCounter] = React.useState(0);
  
  const counterIncrease = () => {
    setCounter(counter + 1);
  };

  const counterDecrease = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Counter</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="ion-text-center">Counter App</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-center">
            <IonText color="primary">
              <h1>Counter: {counter}</h1>
            </IonText>

            <div className="ion-padding">
              <IonButton onClick={counterIncrease}>Increment</IonButton>
              <IonButton onClick={counterDecrease}>Decrement</IonButton>
              <IonButton onClick={resetCounter}>Reset</IonButton>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
