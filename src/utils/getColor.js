import {STATUS_COLORS} from './constants';
export default (val) => val >= 6 ? STATUS_COLORS.havePlenty
    : val > 0 ? STATUS_COLORS.runningLow
    : STATUS_COLORS.empty;
