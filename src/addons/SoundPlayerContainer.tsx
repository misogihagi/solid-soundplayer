// IMPORTANT NOTE!
// This container is deprecated, please use `withSoundCloudAudio` instead
// HOC pattern docs - https://reactjs.org/docs/higher-order-components.html

// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, { Component } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'soun... Remove this comment to see the full error message
import SoundCloudAudio from 'soundcloud-audio';
// @ts-expect-error TS(6142): Module './withSoundCloudAudio' was resolved to '/h... Remove this comment to see the full error message
import withSoundCloudAudio from './withSoundCloudAudio';

type Props = {
    streamUrl?: string;
    resolveUrl?: string;
    clientId?: string;
    soundCloudAudio?: any; // TODO: PropTypes.instanceOf(SoundCloudAudio)
    onStartTrack?: (...args: any[]) => any;
    onStopTrack?: (...args: any[]) => any;
    onPauseTrack?: (...args: any[]) => any;
    onVolumeChange?: (...args: any[]) => any;
    onReady?: (...args: any[]) => any;
};

class SoundPlayerContainer extends Component<Props> {
  props: any;

  wrapChild(child: any) {
    return React.cloneElement(child, this.props);
  }

  componentWillMount() {
    console.warn(`
      <SoundPlayerContainer /> is deprecated! Please use HOC addons/withSoundCloudAudio instead.
      https://reactjs.org/docs/higher-order-components.html
      https://labs.voronianski.dev/react-soundplayer/#Containers
    `);
  }

  render() {
    const { children } = this.props;

    if (!children) {
      return;
    }

    if (!Array.isArray(children)) {
      return this.wrapChild(children);
    }

    return (
      // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <span>
        {React.Children.map(children, ::this.wrapChild)}
        {/* @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      </span>
    );
  }
}

export default withSoundCloudAudio(SoundPlayerContainer);
