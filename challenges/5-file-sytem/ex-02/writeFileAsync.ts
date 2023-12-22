import * as fs from 'fs/promises';

export async function writeFileAsync(filePath: string, data: string): Promise<void>{
   
    try {
        await fs.writeFile(filePath, data, 'utf8');

    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error(`ENOENT: no such file or directory, open '${filePath}'`);
        } else {
            throw error;
        }
    }
};

// return fs.writeFile(filePath, data, 'utf8');