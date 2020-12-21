import { Controller, Render, Res,Get } from '@nestjs/common';

@Controller('ssr')
export class SsrController {
    
    @Get('/ssr/index')
    @Render('/pages/index')
    public async renderIndex() {
        const user = {name: 'jsonsnow'}
        return {user}
    }
}
