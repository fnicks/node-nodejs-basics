import { access } from 'fs/promises';
import { constants } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const exists = async (path) => {
    return await access(path, constants.F_OK)
        .then(() => true)
        .catch(() => false);
};

export const getCurrentDir = (importMetaUrl) =>
    dirname(fileURLToPath(importMetaUrl));