import { createSelector } from 'reselect';

export const getItems = state => state.phonebook.items;
export const getFilter = state => state.filter.value;
export const getLoader = state => state.phonebook.loader;

export const getFilteredContacts = createSelector(
  [getItems, getFilter],
  (items, value) =>
    items.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase()),
    ),
);

export const getTotalContacts = createSelector(
  [getItems],
  items => items.length,
);
