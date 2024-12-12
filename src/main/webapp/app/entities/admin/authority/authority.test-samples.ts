import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '8ff5e3af-8269-4a76-a147-7b7639f59642',
};

export const sampleWithPartialData: IAuthority = {
  name: 'e05d5899-c4a6-4420-ab79-670db4d8133b',
};

export const sampleWithFullData: IAuthority = {
  name: 'b31076f5-f203-465e-9626-076ffa55d16d',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
