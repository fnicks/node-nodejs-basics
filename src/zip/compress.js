import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

const compress = async () => {
    await pipeline(
        createReadStream('src/zip/files/fileToCompress.txt'),
        createGzip(),
        createWriteStream('src/zip/files/archive.gz')
    );
};

await compress();