# Room Control Mobile App

**WARNING: Under development... WIP!**

Allows to control a room's lights, set up alarms, play music and take pictures
of people who enter the room. Connects to the
[Room Control Raspberry Pi](https://github.com/miguelfrde/roomcontrol_backend).

Built with [Ionic](http://ionicframework.com/).

## Screenshots

![Room Control App screens](https://www.dropbox.com/s/qkuw9pomj2utn1z/screens.png?raw=true)

## Data saved to the device local storage

```
settings: {
  serverip: ip,
  notify: boolean,
  sendpic: boolean
}

device: {
  id: hexadecimal,
  clientsecret: base-64,
  activeSpotify: boolean
}

light: {
  intensity: int,
  status: boolean,
  color: hexadecimal
}

alarm: {
  hour: int (epochs),
  sound: int (id),
  light: int (id),
  active: boolean
}

music: {
  playlist: int (id),
  track: int (id),
  volume: int 
}
```
