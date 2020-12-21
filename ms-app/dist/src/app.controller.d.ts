import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private client;
    constructor(appService: AppService, client: ClientProxy);
    getHello(): string;
    wordCount({ text }: {
        text: string;
    }): Observable<{
        [key: string]: number;
    }>;
}
