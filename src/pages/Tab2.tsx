import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { qrCode } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning'
import { URL } from '../App';
const Tab2: React.FC = () => {
  var barcode: Barcode[] = [];
  async function startScan() {
    const granted = await BarcodeScanner.checkPermissions();
    if (granted) {
      const barcode = await BarcodeScanner.scan();
      if (barcode.barcodes[0].displayValue != null) {
        console.log(barcode.barcodes[0].displayValue);
        window.location.href = URL.tab1;
      }

      console.log(barcode);
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>SCAN BARCODE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <center>
          <IonTitle className='title'>Mulai Scan :</IonTitle>
          <IonButton size='large' onClick={startScan}>
            <IonIcon icon={qrCode}></IonIcon>
          </IonButton>
        </center>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
