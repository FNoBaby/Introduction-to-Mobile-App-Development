import React from 'react';
import { IonIcon } from '@ionic/react';
import { playSkipBack, play, playSkipForward, pauseCircle } from 'ionicons/icons';
import '../theme/nowPlaying.css';

const NowPlaying: React.FC = () => {
  return (
    <div className="now-playing">
    <div className="song-info">
      <img
        src="https://i.scdn.co/image/ab67616d00001e02d8f40ad88ed77a939b716d19"
        alt="Current song"
      />
      <div>
        <h4>The Ballad of Mona Lisa</h4>
        <p>Panic! At The Disco</p>
      </div>
    </div>
    <div className="controls">
      <IonIcon icon={playSkipBack} />
      <IonIcon icon={pauseCircle} className="play-pause" />
      <IonIcon icon={playSkipForward} />
    </div>
  </div>
  );
};

export default NowPlaying;
