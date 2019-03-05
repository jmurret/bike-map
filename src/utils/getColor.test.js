import getColor from './getColor';
import {STATUS_COLORS} from './constants';

describe('getColor', ()=> {
  it('should return havePlenty when value is gte 6', ()=>{
    expect(getColor(6)).toEqual(STATUS_COLORS.havePlenty);
    expect(getColor(Number.MAX_SAFE_INTEGER)).toEqual(STATUS_COLORS.havePlenty);
  });
  it('should return runningLow when value is between 1 and 5', ()=>{
    expect(getColor(1)).toEqual(STATUS_COLORS.runningLow);
    expect(getColor(5)).toEqual(STATUS_COLORS.runningLow);
  });
  it('should return empty when value is lte to 0', ()=>{
    expect(getColor(0)).toEqual(STATUS_COLORS.empty);
  });
});
