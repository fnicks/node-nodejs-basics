import { pipeline } from 'stream/promises';
import { Transform } from 'stream';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, _, cb) {
            cb(null, chunk.toString().split('').reverse().join(''));
        }
    });
    
    await pipeline(
        process.stdin,
        reverse,
        process.stdout
    );
};

await transform();