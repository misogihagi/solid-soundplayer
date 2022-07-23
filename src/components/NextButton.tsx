// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'clas... Remove this comment to see the full error message
import ClassNames from 'classnames';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'soun... Remove this comment to see the full error message
import SoundCloudAudio from 'soundcloud-audio';
// @ts-expect-error TS(6142): Module './Icons' was resolved to '/home/user/ドキュメン... Remove this comment to see the full error message
import { NextIconSVG } from './Icons';

type Props = {
    className?: string;
    onNextClick?: (...args: any[]) => any;
    soundCloudAudio?: any; // TODO: PropTypes.instanceOf(SoundCloudAudio)
};

class NextButton extends Component<Props> {
  props: any;

  shouldComponentUpdate() {
    return false;
  }

  handleClick(e: any) {
    const { soundCloudAudio, onNextClick } = this.props;

    soundCloudAudio && soundCloudAudio.next();
    onNextClick && onNextClick(e);
  }

  render() {
    const { className, style } = this.props;
    const classNames = ClassNames('sb-soundplayer-btn sb-soundplayer-next-btn', className);

    return (
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <button type="button" className={classNames} style={style} onClick={::this.handleClick}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <NextIconSVG />
      // @ts-expect-error TS(2304): Cannot find name 'button'.
      </button>
    );
  }
}

export default NextButton;
