import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonText, IonCardContent, useIonViewDidEnter } from '@ionic/react';
import './Tab1.css';
import { URL } from '../App';
import { useState } from 'react';
import axios from 'axios';

interface RiwayatMengajar {
  semid: string;
  sks: number;
}

interface GetSemid {
  semid: number;
}
const Tab1: React.FC = () => {
  const [riwayatMengajar, setRiwayatMengajar] = useState<[RiwayatMengajar]> ([{
    semid: "",
    sks: 0,
  }]);
  
  const[getSemid, setgetSemid] = useState<GetSemid> ({
    semid: 0,
  });

  useIonViewDidEnter(() => {
    axios.get(URL.riwayat).then((res) => {
      if (res.status == 200) {
        if (res.data.code == 200) {
          const resultData = res.data.data;
          setRiwayatMengajar(resultData);
          setgetSemid(resultData);
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
          <IonTitle>RIWAYAT MENGAJAR</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard color={'light'}>
          <IonHeader>
            <IonTitle className='judul' size="small">(Tap semester dibawah ini untuk menampilkan detail riwayat mengajar)</IonTitle>
          </IonHeader>
        </IonCard>
        {riwayatMengajar.map((row: RiwayatMengajar, index: number) =>(          
        <IonCard color={'light'} href={URL.tab2} key={getSemid.semid} onClick={() => setgetSemid(getSemid)}>          
          <IonCardHeader color={'dark'}>
            <IonCardTitle className='JudulJadwal'>
              <IonText color={'light'}><h6>{row.semid}</h6></IonText>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className='Konten'>
            <table>
              <tr>
                <td>
                  Beban SKS
                </td>
                <td align='right'>
                  {row.sks}
                </td>
              </tr>
            </table>
          </IonCardContent>
        </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
