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
  const [display, setDisplay] = React.useState('0');
  const [firstNumber, setFirstNumber] = React.useState('');
  const [operation, setOperation] = React.useState('');
  const [newNumber, setNewNumber] = React.useState(true);

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperation = (op: string) => {
    setFirstNumber(display);
    setOperation(op);
    setNewNumber(true);
  };

  const calculate = () => {
    if (!firstNumber || !operation) return;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(display);
    let result = 0;

    switch (operation) {
      case '+': result = num1 + num2; break;
      case '-': result = num1 - num2; break;
      case '×': result = num1 * num2; break;
      case '÷': result = num1 / num2; break;
    }

    setDisplay(result.toString());
    setFirstNumber('');
    setOperation('');
    setNewNumber(true);
  };

  const clear = () => {
    setDisplay('0');
    setFirstNumber('');
    setOperation('');
    setNewNumber(true);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="ion-text-center">Calculator</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText color="primary"> 
              <h1 className="ion-text-end">{display}</h1>
            </IonText>

            <div className="calculator-grid">
              <IonButton color="secondary" expand="block" onClick={() => handleNumber('7')}>7</IonButton>
              <IonButton color="secondary" expand="block" onClick={() => handleNumber('8')}>8</IonButton>
              <IonButton color="secondary" expand="block" onClick={() => handleNumber('9')}>9</IonButton>
              <IonButton color="tertiary" expand="block" onClick={() => handleOperation('÷')}>÷</IonButton>

              <IonButton color="secondary" expand="block" onClick={() => handleNumber('4')}>4</IonButton>
              <IonButton color="secondary" expand="block" onClick={() => handleNumber('5')}>5</IonButton>
              <IonButton color="secondary" expand="block" onClick={() => handleNumber('6')}>6</IonButton>
              <IonButton color="tertiary" expand="block" onClick={() => handleOperation('×')}>×</IonButton>

              <IonButton color="secondary" expand="block" onClick={() => handleNumber('1')}>1</IonButton>
              <IonButton color="secondary" expand="block" onClick={() => handleNumber('2')}>2</IonButton>
              <IonButton color="secondary" expand="block" onClick={() => handleNumber('3')}>3</IonButton>
              <IonButton color="tertiary" expand="block" onClick={() => handleOperation('-')}>-</IonButton>

              <IonButton color="secondary" expand="block" onClick={() => handleNumber('0')}>0</IonButton>
              <IonButton color="danger" expand="block" onClick={clear}>C</IonButton>
              <IonButton color="success" expand="block" onClick={calculate}>=</IonButton>
              <IonButton color="tertiary" expand="block" onClick={() => handleOperation('+')}>+</IonButton>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
