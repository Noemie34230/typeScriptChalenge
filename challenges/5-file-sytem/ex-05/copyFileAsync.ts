
import * as fs from "fs";

export function copyFileAsync(sourcePath: string, destinationPath : string): Promise<void> {
    try {
        return Promise.resolve(fs.unlinkSync(sourcePath));
    } catch (error) {
        return Promise.reject(error);
    }
    

};