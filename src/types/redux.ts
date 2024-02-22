export declare type TAction<T = any> = {
  payload?: T;
  type: string;
};

declare const $CombinedState: unique symbol;

export type CombinedState<S> = {
  readonly [$CombinedState]?: undefined;
} & S;
