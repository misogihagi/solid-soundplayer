// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'clas... Remove this comment to see the full error message
import ClassNames from 'classnames';
// @ts-expect-error TS(6142): Module './Icons' was resolved to '/home/user/ドキュメン... Remove this comment to see the full error message
import { SoundCloudLogoSVG } from './Icons';

type OwnProps = {
    className?: string;
    backgroundUrl: string;
    trackName: string;
    artistName: string;
};

type Props = OwnProps & typeof Cover.defaultProps;

class Cover extends Component<Props> {
  static defaultProps = {
    style: {}
  };

  props: any;

  render() {
    const { backgroundUrl, trackName, artistName, className, style, children } = this.props;
    const classNames = ClassNames('sb-soundplayer-cover', className);

    return (
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <div
        className={classNames}
        style={Object.assign({}, style, {backgroundImage: `url(${backgroundUrl})`})}>
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <div>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <SoundCloudLogoSVG />
          {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <div>
          {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <span className="sb-soundplayer-track sb-soundplayer-info-box">{trackName}</span>
          {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <div>
          {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <span className="sb-soundplayer-artist sb-soundplayer-info-box">by {artistName}</span>
          {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
        {React.Children.map(children, React.cloneElement)}
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </div>
    );
  }
}

export default Cover;
