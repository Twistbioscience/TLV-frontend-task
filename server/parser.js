import fs from 'fs';
import CsvReadableStream from 'csv-reader';
import {BASE_PATH} from './utils';
import {create, update} from './file';


export const parseFile = (file, cb) => {
  create(file);
  let itemCount = 0;
  const inputStream = fs.createReadStream(`${BASE_PATH}/${file.path}`, 'utf8');
  const csvStream = inputStream.pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true, skipEmptyLines: true }));
  csvStream
    .on('data', function (row) {
        itemCount++;
        csvStream.pause();
        setTimeout(() => {
          csvStream.resume()
        }, 100)
    })
    .on('end', function (data) {
        console.log('done');
        update(file.filename, {status: 'done', rowCount: itemCount});
    });
}