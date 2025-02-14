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
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const Worksheet4g: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Worksheet4g</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonImg
            src="path/to/profile-picture.jpg"
            alt="600 x 400"
            style={{
              backgroundColor: "lightgray",
              height: "400px",
              width: "600px",
            }}
          />
          <IonCardHeader>
            <IonCardTitle>User Name</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Brief bio about the user.</p>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Favourite Hobbies</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton expand="block">Hobby 1</IonButton>
            <IonButton expand="block">Hobby 2</IonButton>
            <IonButton expand="block">Hobby 3</IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Photo Gallery</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="4">
                  <IonImg
                    src="path/to/photo1.jpg"
                    alt="200 x 50"
                    style={{
                      backgroundColor: "lightgray",
                      height: "50px",
                      width: "200px",
                    }}
                  />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="4">
                  <IonImg
                    src="path/to/photo2.jpg"
                    alt="200 x 50"
                    style={{
                      backgroundColor: "lightgray",
                      height: "50px",
                      width: "200px",
                    }}
                  />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="4">
                  <IonImg
                    src="path/to/photo3.jpg"
                    alt="200 x 50"
                    style={{
                      backgroundColor: "lightgray",
                      height: "50px",
                      width: "200px",
                    }}
                  />
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
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
  );
};

export default Worksheet4g;
