// handling multiple audio on the page helpers
let _playedAudios: any = [];

function each (arr: any, cb: any) {
  if (arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] && cb(arr[i], i, arr)) {
        break;
      }
    }
  }
}

export function stopAllOther (playing: any) {
  each(_playedAudios, (soundCloudAudio: any) => {
    if (soundCloudAudio.playing && soundCloudAudio.playing !== playing) {
      soundCloudAudio.stop();
    }
  });
}

export function addToPlayedStore (soundCloudAudio: any) {
  let isPresent = false;

  each(_playedAudios, (_soundCloudAudio: any) => {
    if (_soundCloudAudio.playing === soundCloudAudio.playing) {
      isPresent = true;
      return true;
    }
  });

  if (!isPresent) {
    _playedAudios.push(soundCloudAudio);
  }
}

export function resetPlayedStore () {
  each(_playedAudios, (soundCloudAudio: any) => {
    soundCloudAudio.stop();
  });

  _playedAudios = [];
}
