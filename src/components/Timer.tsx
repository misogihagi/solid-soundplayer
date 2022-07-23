// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'clas... Remove this comment to see the full error message
import ClassNames from 'classnames';

type OwnProps = {
    className?: string;
    duration?: string | number;
    currentTime?: string | number;
};

type Props = OwnProps & typeof Timer.defaultProps;

class Timer extends Component<Props> {
  static defaultProps = {
    duration: 0,
    currentTime: 0
  };

  props: any;

  static prettyTime(time: any) {
    let hours = Math.floor(time / 3600);
    let mins = '0' + Math.floor((time % 3600) / 60);
    let secs = '0' + Math.floor((time % 60));

    mins = mins.substr(mins.length - 2);
    secs = secs.substr(secs.length - 2);

    // @ts-expect-error TS(2345): Argument of type 'string' is not assignable to par... Remove this comment to see the full error message
    if (!isNaN(secs)) {
      if (hours) {
        return `${hours}:${mins}:${secs}`;
      }
      return `${mins}:${secs}`;
    }
    return '00:00';
  }

  render() {
    const { currentTime, className, style, soundCloudAudio } = this.props;
    let { duration } = this.props;
    const classNames = ClassNames('sb-soundplayer-timer', className);

    if (!duration && soundCloudAudio && soundCloudAudio.duration) {
      duration = soundCloudAudio.duration;
    }

    return (
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <div className={classNames} style={style}>
        {Timer.prettyTime(currentTime)} / {Timer.prettyTime(duration)}
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
    );
  }
}

export default Timer;
