// @ts-expect-error TS(6142): Module './VolumeControl' was resolved to '/home/us... Remove this comment to see the full error message
export * from './VolumeControl';
// @ts-expect-error TS(6142): Module './PlayButton' was resolved to '/home/user/... Remove this comment to see the full error message
export * from './PlayButton';
// @ts-expect-error TS(6142): Module './NextButton' was resolved to '/home/user/... Remove this comment to see the full error message
export * from './NextButton';
// @ts-expect-error TS(6142): Module './PrevButton' was resolved to '/home/user/... Remove this comment to see the full error message
export * from './PrevButton';
// @ts-expect-error TS(6142): Module './Progress' was resolved to '/home/user/ドキ... Remove this comment to see the full error message
export * from './Progress';
// @ts-expect-error TS(6142): Module './Timer' was resolved to '/home/user/ドキュメン... Remove this comment to see the full error message
export * from './Timer';
// @ts-expect-error TS(6142): Module './Cover' was resolved to '/home/user/ドキュメン... Remove this comment to see the full error message
export * from './Cover';

// workaround for dists
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
export const Icons = require('./Icons');
