import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './controllers/session.controller';

@Module({
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule {}
