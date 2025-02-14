import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonFooter,
  IonList,
  IonItemSliding,
  IonLabel,
  IonItemOption,
  IonItemOptions,
  IonItem,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const Worksheet4e: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Worksheet4e</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption color="danger" onClick={() => alert("Delete")}>
                Delete
              </IonItemOption>
            </IonItemOptions>

            <IonItem>
              <IonLabel>Slide me left or right!</IonLabel>
            </IonItem>

            <IonItemOptions side="end">
              <IonItemOption color="danger" onClick={() => alert("Delete")}>
                Delete
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
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

export default Worksheet4e;
