// TODO: connect to the RPI, instead of using example values

// Example data, maps a track spotify id to the needed data
// This should be fetched from the server shuffled
const exampleTracks = {
  0: {
    name: 'Hisigen Blues',
    artist: 'Graveyard',
    albumCoverUrl: 'http://ecx.images-amazon.com/images/I/81ataWrZmvL._SL1417_.jpg',
  },
  1: {
    name: 'Tainted Water',
    artist: 'Troubled Horse',
    albumCoverUrl: 'http://www.roadburn.com/wp-content/uploads/2012/12/Troubled-Horse-Step-Inside.jpg',
  },
  2: {
    name: 'High Class Woman',
    artist: 'Blues Pills',
    albumCoverUrl: 'http://www.bluespills.com/images/releases/bluespills.jpg',
  },
  3: {
    name: 'Who Is There?',
    artist: 'Infected Mushroom',
    albumCoverUrl: 'http://www.dimmak.com/wp-content/uploads/2014/06/DM592.InfectedMushroom.FriendsOnMushroomsVol3_800px.jpg',
  },
  4: {
    name: 'Mutiny',
    artist: 'Pendulum',
    albumCoverUrl: 'http://images.junostatic.com/full/CS1869155-02A-BIG.jpg',
  },
  5: {
    name: 'Happy People Happy Music',
    artist: 'Sesto Sento',
    albumCoverUrl: 'http://www.plusquam-records.net/wp-content/uploads/2012/02/PBR134_Cover_1440x1440-1024x1024.jpg',
  },
  6: {
    name: 'La Estampida',
    artist: 'Ska-P',
    albumCoverUrl: 'http://images1.buymusichere.net/images/w/274/5840274.jpg',
  },
  7: {
    name: 'Pasos de Acero',
    artist: 'Vendetta',
    albumCoverUrl: 'http://www.inforock.net/wp-content/uploads/2011/02/vendetta-puro-infierno.jpg',
  },
  8: {
    name: 'Boogie Stop Shuffle',
    artist: 'Charles Mingus',
    albumCoverUrl: 'http://bullmurph.com/wp-content/uploads/2012/04/au.jpg',
  },
  9: {
    name: 'Take Five',
    artist: 'Dave Brubeck Quartet',
    albumCoverUrl: 'http://www.losslessjazz.net/wp-content/uploads/2010/09/The-Dave-Brubeck-Quartet-Time-Out.jpg',
  }
};

// Example data, maps the spotify playlist id to the playlist needed data
const examplePlaylists = {
  1: {
    name: 'Svenska rock',
    tracks: [
      0, 1, 2
    ]
  },
  0: {
    name: 'Cool electronic',
    tracks: [
      3, 4, 5
    ]
  },
  2: {
    name: 'Ska',
    tracks: [
      6, 7
    ]
  },
  3: {
    name: 'Jazz',
    tracks: [
      8, 9
    ]
  },
};

export class Music {
  constructor(LocalStorage) {
    this._playlist = LocalStorage.getObjectProperty('music', 'playlist') || 0;
    this.playlists = examplePlaylists;
    this.tracks = examplePlaylists[this._playlist].tracks
    this.currTrack = LocalStorage.getObjectProperty('music', 'track') || 0;
    this.LocalStorage = LocalStorage;
  }

  set playlist(p) {
    if (this.playlists[p] == undefined) {
      throw "Unknown playlist";
    }
    if (this._playlist != p) {
      this._playlist = p;
      this.LocalStorage.setObjectProperty('music', 'playlist', p)
      this.tracks = this.playlists[p].tracks
      this.currTrack = 0;
    }
  }

  get playlist() {
    return examplePlaylists[this._playlist];
  }

  get currentTrack() {
    return exampleTracks[this.tracks[this.currTrack]];
  }

  get previousTrack() {
    this.currTrack = (this.currTrack - 1) % this.tracks.length;
    if (this.currTrack < 0) {
      this.currTrack = this.tracks.length + this.currTrack;
    }
    this.LocalStorage.setObjectProperty('music', 'track', this.currTrack);
    return exampleTracks[this.tracks[this.currTrack]];
  }

  get nextTrack() {
    this.currTrack = (this.currTrack + 1) % this.tracks.length;
    this.LocalStorage.setObjectProperty('music', 'track', this.currTrack);
    return exampleTracks[this.tracks[this.currTrack]];
  }
}

Music.$inject = ['LocalStorage'];
