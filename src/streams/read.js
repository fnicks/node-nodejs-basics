import { createReadStream } from 'fs';

const read = async () => {
    createReadStream('src/streams/files/fileToRead.txt')
    .on('error', () => {})
    .pipe(process.stdout);
};

await read();