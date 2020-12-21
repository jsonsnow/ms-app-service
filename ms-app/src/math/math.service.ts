import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
    calculateWordCount(str: string): { [key: string] : number} {
        const words = str.trim().split(/\s+/)
        return words.reduce((a, c) => ((a[c] = (a[c] || 0) + 1), a), {})
    }
}
