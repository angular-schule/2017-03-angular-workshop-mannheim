import { reducer } from './names.reducer';

fdescribe('names reducer', () => {
  it('should count names', () => {

    const names = [
      'Erich', 'Richard',
      'Ralph', 'John',
      'Richard'];

    const expected = names.reduce(reducer, {});

    expect(expected).toEqual({
      'Erich': 1,
      'Richard': 2,
      'Ralph': 1,
      'John': 1 }
    );
  });
});
