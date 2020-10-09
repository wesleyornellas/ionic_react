import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonLabel, IonItemOption, IonItemSliding, IonItemOptions, IonButton, IonIcon } from '@ionic/react';
import React from 'react';
import { star, skull, logoIonic, trash, home } from 'ionicons/icons'
import { Plugins, PushNotification, PushNotificationToken } from "@capacitor/core";
// import { FCM } from "capacitor-fcm";

const { PushNotifications } = Plugins;
// const fcm = new FCM();
// const { fcm } = Plugins;

const INITIAL_STATE = {
  notifications: [{ id: 'id', title: '', body: '' }],
};

// const token: any;


export default class Notifications extends React.Component {

  state: any = {};
  props: any = {};
  constructor(props: any) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }


  async componentDidMount() {   
    
    // PushNotifications.addListener('registration', data => {
    //   // alert(JSON.stringify(data));
    //   alert(JSON.stringify(data));
    // });

    PushNotifications.register().then(() => alert(`registered for push`));

    PushNotifications.addListener('registration',
        (token: PushNotificationToken) => {
            alert('Push registration success, token: ' + token.value);
        }
    );

    // PushNotifications.register()
    // .then(() => {
    //   //
    //   // Subscribe to a specific topic
    //   // you can use `FCMPlugin` or just `fcm`
    //   fcm
    //     .subscribeTo({ topic: "test" })
    //     .then(r => alert(`subscribed to topic`))
    //     .catch(err => console.log(err));
    // })
    // .catch(err => alert(JSON.stringify(err)));
  
    // fcm
    //     .getToken()
    //     .then(r => alert(`Token ${r.token}`))
    //     .catch(err => alert(err));
    

    // PushNotifications.addListener('pushNotificationReceived',
    //   (notification: PushNotification) => {
    //     let elem = this.state.notifications;
    //     elem.push({ id: notification.id, title: notification.title, body: notification.body })
    //     this.setState({
    //       notifications: elem
    //     })
    //   }
    // );
  }

  // push() {   

    // // Subscribe to a specific topic
    // // you can use `FCMPlugin` or just `fcm`
    // fcm
    //   .subscribeTo({ topic: "test" })
    //   .then(r => alert(`subscribed to topic`))
    //   .catch(err => console.log(err));
    // //
    // // Unsubscribe from a specific topic
    // fcm
    //   .unsubscribeFrom({ topic: "test" })
    //   .then(() => alert(`unsubscribed from topic`))
    //   .catch(err => console.log(err));

    // //
    // // Remove FCM instance
    // fcm
    //   .deleteInstance()
    //   .then(() => alert(`Token deleted`))
    //   .catch(err => console.log(err));

    // // fcm.   

  // }

  render() {
    
    const { notifications } = this.state;

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Best app ever!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItem>

          </IonItem>
          <IonList>
            {notifications.map((elem: any) => 
              <IonItemSliding>
                <IonItem key={elem.id}>
                  <IonAvatar>
                    <IonIcon slot="end" icon={logoIonic}></IonIcon>
                  </IonAvatar>
                  <IonLabel className="ion-padding">
                    <h2>{elem.title}</h2>
                    <h3>{elem.body}</h3>
                  </IonLabel>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption onClick={() => alert('delete notification')}>
                    <IonIcon slot="end" icon={trash}></IonIcon>
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            )}
          </IonList>
          <IonButton expand="full" color="primary" routerLink="/login">
            <IonIcon slot="end" icon={star}></IonIcon>
          Login
        </IonButton>
          <IonButton expand="full" color="secondary" routerLink="/register">
            <IonIcon slot="end" icon={skull}></IonIcon>
          Register
        </IonButton>
          <IonButton expand="full" color="tertiary" routerLink="/">
            <IonIcon slot="end" icon={home}></IonIcon>
          Home
        </IonButton>
        </IonContent>
      </IonPage>
    );
  }
};

