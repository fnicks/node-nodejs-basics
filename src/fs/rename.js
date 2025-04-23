import { rename as fsRename } from 'fs/promises';
import { exists } from './utils.js'

const rename = async () => {
    const renameFile = 'src/fs/files/wrongFilename.txt';
    const renameToFile = 'src/fs/files/properFilename.md5';
    if (!await exists(renameFile) || await exists(renameToFile)) {
            throw new Error('FS operation failed');
        }
    await fsRename(renameFile, renameToFile);
};

await rename();