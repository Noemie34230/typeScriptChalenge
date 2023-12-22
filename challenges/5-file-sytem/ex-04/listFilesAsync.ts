import * as fs from 'fs/promises';

export async function listFilesAsync(path: string): Promise<string[]> {
    console.log(path)
    
    try {
        return await fs.readdir(path, 'utf8');
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('ENOENT');
        } else {
            throw error;
        }
    }

    
}