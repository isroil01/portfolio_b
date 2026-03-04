import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('health')
@Controller('health')
export class HealthController {
    @Get()
    @ApiOperation({ summary: 'Check API connectivity' })
    check() {
        return { status: 'OK', timestamp: new Date().toISOString() };
    }
}
