// @ts-expect-error TS(2304): Cannot find name 'VolumeControl'.
export * from './VolumeControl';
// @ts-expect-error TS(2304): Cannot find name 'PlayButton'.
export * from './PlayButton';
// @ts-expect-error TS(2304): Cannot find name 'NextButton'.
export * from './NextButton';
// @ts-expect-error TS(2304): Cannot find name 'PrevButton'.
export * from './PrevButton';
// @ts-expect-error TS(2552): Cannot find name 'Progress'. Did you mean 'onprogr... Remove this comment to see the full error message
export * from './Progress';
// @ts-expect-error TS(2304): Cannot find name 'Timer'.
export * from './Timer';
// @ts-expect-error TS(2304): Cannot find name 'Cover'.
export * from './Cover';

// workaround for dists
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
export const Icons = require('./Icons');
