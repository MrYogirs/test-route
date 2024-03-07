import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { person, home, calendarNumber, folder } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();
const URL = {
  tab1: "/tab1",
  tab2: "/tab2",

  riwayat: "https://apis.uinsi.ac.id/api/v1/saku/riwayatMengajar?key=b7162f79269d91cb13826c7e2b408ff8d8643873e3d1f495d265fcf74836fc51&nip=198708212022031002",
  detailRiwayat: "https://apis.uinsi.ac.id/api/v1/saku/detailRiwayatMengajar?key=b7162f79269d91cb13826c7e2b408ff8d8643873e3d1f495d265fcf74836fc51&nip=197707062011011006"
}

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <Route exact path={URL.tab1}>
          <Tab1 />
        </Route>
        <Route exact path="/">
          <Redirect to={URL.tab1} />
        </Route>
      <IonRouterOutlet>
        <IonTabs>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href={URL.tab1}>
              <IonIcon aria-hidden="true" icon={home} />
              <IonLabel>Dashboard</IonLabel>
            </IonTabButton>
          </IonTabBar>
          <IonRouterOutlet>
            <Route exact path={URL.tab1}>
              <Tab1 />
            </Route>
            <Route exact path={URL.tab2}>
              <Tab2 />
            </Route>
          </IonRouterOutlet>
        </IonTabs>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
export {URL};
