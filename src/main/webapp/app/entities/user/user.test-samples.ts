import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 6294,
  login: 'y@Y\\?MRM\\?C\\[tGWh',
};

export const sampleWithPartialData: IUser = {
  id: 1157,
  login: '5`.7kT@BvYE',
};

export const sampleWithFullData: IUser = {
  id: 28841,
  login: 'hqS',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
