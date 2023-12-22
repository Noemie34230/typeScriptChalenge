import * as fs from 'fs/promises';

export async function readFileAsync(path: string): Promise<string>{
    
    try {
        return await fs.readFile(path, 'utf8');
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error(`ENOENT: no such file or directory, open '${path}'`);
        } else {
            throw error;
        }
    }
        
    
};


