import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
    const hash = (path) => {
        return new Promise((resolve, reject) => {
            const hash = createHash('sha256');
            const stream = createReadStream(path);

            stream.on('error', reject);
            hash.on('error', reject);

            stream.on('end', () => {
                const result = hash.digest('hex');
                resolve(result);
            });

            stream.pipe(hash);
        });
    };

    const sha = await hash('src/hash/files/fileToCalculateHashFor.txt');
    console.log(sha);
};

await calculateHash();