import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { getCurrentDir } from '../utils.js';

const compress = async () => {
    const currentDir = getCurrentDir(import.meta.url)
    await pipeline(
        createReadStream(currentDir + '/files/fileToCompress.txt'),
        createGzip(),
        createWriteStream(currentDir + '/files/archive.gz')
    );
};

await compress();