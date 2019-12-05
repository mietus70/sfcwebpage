import { FirstUppercasePipe } from './first-uppercase.pipe';

describe('FirstUppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new FirstUppercasePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return string with first chara', () => {
    const pipe = new FirstUppercasePipe();
    expect(pipe.transform('hello')).toEqual('Hello');
  });
});
