import * as si from 'seamless-immutable';

export interface IAppState {
  counter?: Counter;
  // TODO: mehr reducer :-)
};

export type Counter = si.Immutable<{
  current: number
}>;
