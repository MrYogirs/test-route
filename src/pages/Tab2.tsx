import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import './Tab2.css';
import { URL } from '../App';
import { useState } from 'react';
import axios from 'axios';

interface DetailRiwayat {
  matakuliah: string;
  nama_kelas: string;
  prodi: string;
  sks: number;
}

const Tab2: React.FC = () => {
  const [detailRiwayat, setDetailRiwayat] = useState<[DetailRiwayat]> ([{
    matakuliah: "",
    nama_kelas: "",
    prodi: "",
    sks: 0,
  }]);

  useIonViewDidEnter(() => {
    axios.get(`${URL.detailRiwayat}&semid=20231`).then((res) => {
      if (res.status == 200) {
        if (res.data.code == 200) {
          const resultData = res.data.data;
          setDetailRiwayat(resultData);
        }
      }
    }).catch((err) => {
      console.log(err);
    }
    );
  })
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'dark'}>
          <IonTitle>DETAIL RIWAYAT MENGAJAR</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen> 
        {detailRiwayat.map((row: DetailRiwayat, index: number) =>(          
          <IonCard color={'light'}>          
            <IonCardHeader color={'dark'}>
              <IonCardTitle className='JudulJadwal'>
                <IonText color={'light'}><h6>{row.nama_kelas}</h6></IonText>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className='Konten'>
              <IonText>{row.matakuliah}</IonText><br></br>
              <IonText>{row.prodi}</IonText><br></br>
              <IonText>{row.sks} SKS</IonText>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
