import low from 'lowdb';
import FileSync from'lowdb/adapters/FileSync';
import find from 'lodash/find';

const adapter = new FileSync('./mockdb.json')
const db = low(adapter);

db.defaults({files: []}).write();

export const create = (file) => {
  db.get('files').push({id: file.filename, originalname: file.originalname, path: file.path, status: 'working'}).write();
}

export const update = (id, patch) => db.get('files').find({id}).assign(patch).write();
export const list = () => db.get('files');
export const get = (id) => db.get('files').find({id});