import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonLabel, IonItemOption, IonItemSliding, IonItemOptions, IonButton, IonIcon, IonInput } from '@ionic/react';
import React from 'react';
import './Home.css';
import { star, skull } from 'ionicons/icons'

const arr = [
  {
    name: 'Finn',
    desc: 'This guy rocks!'
  },
  {
    name: 'Han',
    desc: 'Trust me, I am a programmer'
  },
  {
    name: 'Rey',
    desc: 'I am done with it!'
  },

]

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Best app ever!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {arr.map(elem => (
            <IonItemSliding key={elem.name}>
              <IonItem>
                <IonAvatar>
                  <img src={`https://ionicframework.com/docs/demos/api/list/avatar-${elem.name.toLocaleLowerCase()}.png`} />
                </IonAvatar>
                <IonLabel className="ion-padding">
                  <h2>{elem.name}</h2>
                  <h3>{elem.desc}</h3>
                  <p>Some helper text!</p>
                </IonLabel>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption onClick={() => alert('pressed delete')}>Delete</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
        <IonButton expand="full" color="primary" routerLink="/login">
          <IonIcon slot="end" icon={star}></IonIcon>
          Login
        </IonButton>
        <IonButton expand="full" color="secondary" routerLink="/register">
          <IonIcon slot="end" icon={skull}></IonIcon>
          Register
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
