import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  const data = await readContacts();
  return data;
};

console.log(await getAllContacts());
