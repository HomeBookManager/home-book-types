export type TNestedKeyOf<OBJECT_TYPE extends object> = {
  [KEY in keyof OBJECT_TYPE &
    (string | number)]: OBJECT_TYPE[KEY] extends object
    ? `${KEY}` | `${KEY}.${TNestedKeyOf<OBJECT_TYPE[KEY]>}`
    : `${KEY}`;
}[keyof OBJECT_TYPE & (string | number)];

export type TObject<T> = { [key: string]: T };

export type TObjectArray<T> = Array<keyof T>;

export type TPickAliases<
  T,
  PropMap extends Partial<Record<keyof T, string>>
> = {
  [K in keyof PropMap as K extends keyof T
    ? PropMap[K] extends string
      ? PropMap[K]
      : never
    : never]: K extends keyof T ? T[K] : never;
};
