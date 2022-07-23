// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'soun... Remove this comment to see the full error message
import SoundCloudAudio from 'soundcloud-audio';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'clas... Remove this comment to see the full error message
import ClassNames from 'classnames';
// @ts-expect-error TS(6142): Module './Icons' was resolved to '/home/user/ドキュメン... Remove this comment to see the full error message
import { VolumeIconLoudSVG, VolumeIconMuteSVG } from './Icons';

type OwnProps = {
    className?: string;
    buttonClassName?: string;
    rangeClassName?: string;
    volume?: number;
    onVolumeChange?: (...args: any[]) => any;
    onToggleMute?: (...args: any[]) => any;
    soundCloudAudio?: any; // TODO: PropTypes.instanceOf(SoundCloudAudio)
};

type Props = OwnProps & typeof VolumeControl.defaultProps;

class VolumeControl extends Component<Props> {
  static defaultProps = {
    volume: 1,
    isMuted: 0
  };

  props: any;

  handleVolumeChange(e: any) {
    const {
      onVolumeChange,
      onToggleMute,
      soundCloudAudio,
      isMuted
    } = this.props;
    const xPos = (e.target.value / 100);
    const mute = (xPos <= 0 && !isMuted);

    if (soundCloudAudio && !isNaN(soundCloudAudio.audio.volume)) {
      soundCloudAudio.audio.volume = xPos;
      soundCloudAudio.audio.muted = mute;
    }

    if (mute !== isMuted) {
      onToggleMute && onToggleMute.call(this, mute, e);
    }

    onVolumeChange && onVolumeChange.call(this, xPos, e);
  }

  handleMute(e: any) {
    const { onToggleMute, soundCloudAudio } = this.props;

    if (soundCloudAudio && !isNaN(soundCloudAudio.audio.muted)) {
      soundCloudAudio.audio.muted = !soundCloudAudio.audio.muted;
    }

    onToggleMute && onToggleMute.call(this, !this.props.isMuted, e);
  }

  render() {
    const { className, buttonClassName, rangeClassName, volume, isMuted } = this.props;

    let value = volume * 100 || 0;

    if (value < 0 || isMuted) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    const classNames = ClassNames('sb-soundplayer-volume', className);
    const buttonClassNames = ClassNames('sb-soundplayer-btn sb-soundplayer-volume-btn', buttonClassName);
    const rangeClassNames = ClassNames('sb-soundplayer-volume-range', rangeClassName);

    return (
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <div className={classNames}>
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <button className={buttonClassNames} onClick={::this.handleMute}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          {isMuted ? <VolumeIconMuteSVG /> : <VolumeIconLoudSVG />}
          {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </button>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div>
          {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <input className={rangeClassNames} type="range" min="0" max="100" step="1" value={value} onChange={::this.handleVolumeChange} />
          {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
      // @ts-expect-error TS(2304): Cannot find name 'div'.
      </div>
    );
  }
}

export default VolumeControl;
