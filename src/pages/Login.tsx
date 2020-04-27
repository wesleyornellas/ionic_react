import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
 
  const [userName ,setUserName] = useState('')
  const [password ,setPassword] = useState('')
  
  function loginUser() {
      console.log(userName, password)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Example of fucking world!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
            <IonInput 
                placeholder="username" 
                onIonChange = {(e: any) => setUserName(e.target.value)}
            />
            <IonInput  
                placeholder="password"
                onIonChange = {(e: any) => setPassword(e.target.value)}            
            />
            <IonButton onClick={loginUser}>Login</IonButton>
            <p>
                New here? <Link to="/register">Register</Link>
            </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
