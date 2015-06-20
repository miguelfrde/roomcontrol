// TODO: connect to the RPI, instead of using example values

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
    return arr;
  }
}

// Example data, maps a track spotify id to the needed data
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
  0: {
    name: 'Svenska rock',
    tracks: [
      0, 1, 2
    ]
  },
  1: {
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
  constructor() {
    this.currentPlaylist = 0;
    this.playlists = examplePlaylists;
    this.tracks = examplePlaylists[0].tracks
    shuffle(this.tracks);
    this.currTrack = 0;
  }

  set playlist(p) {
    if (this.playlists[p] == undefined) {
      throw "Unknown playlist";
    }
    if (this.currentPlaylist != p) {
      this.currentPlaylist = p;
      this.tracks = this.playlists[p].tracks
      shuffle(this.tracks);
      this.currTrack = 0;
    }
  }

  get playlist() {
    return examplePlaylists[this.currentPlaylist];
  }

  get currentTrack() {
    return exampleTracks[this.tracks[this.currTrack]];
  }

  nextTrack() {
    this.currTrack = (this.currTrack + 1) % this.tracks.length;
    return exampleTracks[this.tracks[this.currTrack]];
  }
}
