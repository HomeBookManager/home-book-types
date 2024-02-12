import { TObject } from './generic';

export type TModificators = TObject<string>;

export type TClassName = string | { name: string; modificators: TModificators };

export type TClassNames = TObject<TClassName>;
