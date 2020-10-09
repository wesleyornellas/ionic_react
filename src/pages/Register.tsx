import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton} from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    function regiterUser() {
        console.log(userName, password, confirmPassword)
    }
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Register</IonTitle>
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
              <IonInput  
                  placeholder="confirm password"
                  onIonChange = {(e: any) => setConfirmPassword(e.target.value)}            
              />
              <IonButton onClick={regiterUser}>Login</IonButton>
              <p>
                  Already have a account? <Link to="/login">Login</Link>
              </p>
              <p>
                Back to <Link to="/">home</Link>
            </p>
        </IonContent>
      </IonPage>
    );
};

export default Register;
