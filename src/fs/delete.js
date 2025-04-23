import { unlink } from 'fs/promises';
import { exists } from './utils.js';

const remove = async () => {
    const deleteFile = 'src/fs/files/fileToRemove.txt';
    if (!await exists(deleteFile)) {
        throw new Error('FS operation failed');
    }
    await unlink(deleteFile);
};

await remove();