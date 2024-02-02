import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);

const savePlayTime = localStorage.getItem('videoplayer-current-time');

player.on(
  'timeupdate',
  throttle(time => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time.seconds));
  }, 1000),
);

player
  .setCurrentTime(savePlayTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
