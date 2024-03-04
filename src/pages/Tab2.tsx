import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import { URL } from '../App';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'dark'}>
          <IonTitle>DETAIL RIWAYAT MENGAJAR</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>         
        <IonCard color={'light'} href={URL.tab2}>          
          <IonCardHeader color={'dark'}>
            <IonCardTitle className='JudulJadwal'>
              <IonText color={'light'}><h6>Semester yang dipilih</h6></IonText>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className='Konten'>
            <IonText>Nama_kelas</IonText><br></br>
            <IonText>Matakuliah</IonText><br></br>
            <IonText>Prodi</IonText><br></br>
            <IonText>SKS</IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
