// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'clas... Remove this comment to see the full error message
import ClassNames from 'classnames';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'soun... Remove this comment to see the full error message
import SoundCloudAudio from 'soundcloud-audio';
// @ts-expect-error TS(6142): Module './Icons' was resolved to '/home/user/ドキュメン... Remove this comment to see the full error message
import { PlayIconSVG, PauseIconSVG } from './Icons';

type OwnProps = {
    className?: string;
    seeking?: boolean;
    playing?: boolean;
    onTogglePlay?: (...args: any[]) => any;
    seekingIcon?: React.ReactNode;
    soundCloudAudio?: any; // TODO: PropTypes.instanceOf(SoundCloudAudio)
};

type Props = OwnProps & typeof PlayButton.defaultProps;

class PlayButton extends Component<Props> {
  static defaultProps = {
    playing: false,
    seeking: false
  };

  props: any;

  shouldComponentUpdate(nextProps: Props) {
    const { playing, seeking } = this.props;

    return (
      playing !== nextProps.playing || seeking !== nextProps.seeking
    );
  }

  handleClick(e: any) {
    const { playing, soundCloudAudio, onTogglePlay } = this.props;

    if (!playing) {
      soundCloudAudio && soundCloudAudio.play({
        playlistIndex: soundCloudAudio._playlistIndex
      });
    } else {
      soundCloudAudio && soundCloudAudio.pause();
    }

    onTogglePlay && onTogglePlay(e);
  }

  render() {
    const { playing, seekingIcon, seeking, className, style } = this.props;

    let iconNode;

    if (seeking && seekingIcon) {
      iconNode = React.cloneElement(seekingIcon);
    } else if (playing) {
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      iconNode = <PauseIconSVG />;
    } else {
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      iconNode = <PlayIconSVG />;
    }

    const classNames = ClassNames('sb-soundplayer-btn sb-soundplayer-play-btn', className);

    return (
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <button type="button" className={classNames} style={style} onClick={::this.handleClick}>
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {iconNode}
      // @ts-expect-error TS(2304): Cannot find name 'button'.
      </button>
    );
  }
}

export default PlayButton;
