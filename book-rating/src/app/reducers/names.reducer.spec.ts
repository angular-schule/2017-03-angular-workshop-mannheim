import { reducer } from './names.reducer';
import * as Immutable from 'seamless-immutable';

fdescribe('names reducer', () => {
  it('should count names', () => {

    const names = [
      'Erich', 'Richard',
      'Ralph', 'John',
      'Richard'];

    const saveAcc = Immutable({});

    const expected = names.reduce(reducer, saveAcc);

    expect(expected).toEqual({
      'Erich': 1,
      'Richard': 2,
      'Ralph': 1,
      'John': 1 }
    );
  });
});
