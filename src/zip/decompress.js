import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { getCurrentDir } from '../utils.js';

const decompress = async () => {
    const currentDir = getCurrentDir(import.meta.url)
    await pipeline(
            createReadStream(currentDir + '/files/archive.gz'),
            createGunzip(),
            createWriteStream(currentDir + '/files/fileToCompress.txt')
        );
};

await decompress();