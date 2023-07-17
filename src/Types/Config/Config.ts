import { existsSync, readFileSync, writeFileSync } from 'fs';

export default (write: any = null): any => {
    if (!existsSync('./config.json')) writeFileSync('./config.json', '{}');

    if (write) writeFileSync('./config.json', JSON.stringify(write));

    return JSON.parse(readFileSync('./config.json', 'utf-8'));
};
