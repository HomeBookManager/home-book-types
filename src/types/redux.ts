export declare type TAction<T = any> = {
  payload?: T;
  type: string;
};

declare const $CombinedState: unique symbol;

export type TCombinedState<S> = {
  readonly [$CombinedState]?: undefined;
} & S;

export type TEmptyObject = {
  readonly [$CombinedState]?: undefined;
};
