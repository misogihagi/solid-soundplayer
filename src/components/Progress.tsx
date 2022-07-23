// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'soun... Remove this comment to see the full error message
import SoundCloudAudio from 'soundcloud-audio';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'clas... Remove this comment to see the full error message
import ClassNames from 'classnames';

type OwnProps = {
    className?: string;
    innerClassName?: string;
    innerStyle?: any;
    value?: number;
    onSeekTrack?: (...args: any[]) => any;
    soundCloudAudio?: any; // TODO: PropTypes.instanceOf(SoundCloudAudio)
};

type Props = OwnProps & typeof Progress.defaultProps;

class Progress extends Component<Props> {
  static defaultProps = {
    value: 0
  };

  props: any;

  handleSeekTrack(e: any) {
    const { onSeekTrack, soundCloudAudio } = this.props;
    const xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;

    if (soundCloudAudio && !isNaN(soundCloudAudio.audio.duration)) {
      soundCloudAudio.audio.currentTime = (xPos * soundCloudAudio.audio.duration);
    }

    onSeekTrack && onSeekTrack.call(this, xPos, e);
  }

  render() {
    const { className, innerClassName, style, currentTime, duration } = this.props;
    let { value, innerStyle } = this.props;

    if (!value && currentTime && duration) {
      value = (currentTime / duration) * 100 || 0;
    }

    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    const classNames = ClassNames('sb-soundplayer-progress-container', className);
    const innerClassNames = ClassNames('sb-soundplayer-progress-inner', innerClassName);

    if (!innerStyle) {
      innerStyle = {};
    }

    innerStyle = Object.assign({}, innerStyle, {width: `${value}%`});

    return (
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <div className={classNames} style={style} onClick={::this.handleSeekTrack}>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className={innerClassNames} style={innerStyle} />
      // @ts-expect-error TS(2304): Cannot find name 'div'.
      </div>
    );
  }
}

export default Progress;
