import { rename as fsRename } from 'fs/promises';
import { exists, getCurrentDir } from '../utils.js'

const rename = async () => {
    const renameFile = getCurrentDir(import.meta.url) + '/files/wrongFilename.txt';
    const renameToFile = getCurrentDir(import.meta.url) + '/files/properFilename.md5';
    if (!await exists(renameFile) || await exists(renameToFile)) {
            throw new Error('FS operation failed');
        }
    await fsRename(renameFile, renameToFile);
};

await rename();