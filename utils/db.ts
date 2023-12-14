'use server';

import { fakeData } from './fake-data';

export const getSearchResults = async (searchTerm: string) => {
  return fakeData;
};
