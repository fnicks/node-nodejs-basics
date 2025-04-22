import { writeFile } from 'fs/promises';
import { exists } from './utils.js'

const create = async () => {
    const path = 'fresh.txt';
    if (await exists(path)) {
        throw new Error('FS operation failed');
    }

    await writeFile(path, 'I am fresh and young');
};

await create();
