"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const register_1 = require("@react-ssr/nestjs-express/register");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await register_1.default(app);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map