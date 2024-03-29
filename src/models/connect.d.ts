import { GlobalModelState } from './app';
import {CardModelState, EggsModelState, shakeModelState } from '@/utils/types';


export { GlobalModelState };

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    app?: boolean;
    eggs?: boolean;
  };
}

export interface ConnectState {
  loading: Loading;
  app: GlobalModelState;
  eggs: EggsModelState;
  card: CardModelState;
  shake: shakeModelState;
  // location: any
}

