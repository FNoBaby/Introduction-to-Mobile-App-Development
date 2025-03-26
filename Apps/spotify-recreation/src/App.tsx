import React from "react";
import { setupIonicReact } from '@ionic/react';
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, search, library, playSkipBack, pauseCircle, playSkipForward } from "ionicons/icons";
import SpotifyHomepage from "./pages/spotifyHomepage";
import SpotifyLibrary from "./pages/SpotifyLibrary";
import SpotifySearch from "./pages/SpotifySearch";
import NowPlaying from './components/NowPlaying';

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS imports */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import "./theme/variables.css";

setupIonicReact({
  mode: 'md'
});

const App: React.FC = () => {
  const albums = [
    {
      title: "Liked Songs",
      image: "https://misc.scdn.co/liked-songs/liked-songs-640.png",
    },
    {
      title: "Daily Mix 1",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb5b685456413fc96b946fc2f2/1/en/default",
    },
    {
      title: "Discover Weekly",
      image:
        "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ==",
    },
    // ... more albums
  ];

  return (
    <IonApp>
      <NowPlaying />
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <SpotifyHomepage albums={albums} />
            </Route>
            <Route exact path="/search">
              <SpotifySearch />
            </Route>
            <Route exact path="/library">
              <SpotifyLibrary albums={albums} />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>

          <IonTabBar slot="bottom" className="spotify-tabs">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="search" href="/search">
              <IonIcon icon={search} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>

            <IonTabButton tab="library" href="/library">
              <IonIcon icon={library} />
              <IonLabel>Library</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
