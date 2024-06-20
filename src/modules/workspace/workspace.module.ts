import { Module } from '@nestjs/common';
import { WorkspaceService } from './services/workspace.service';
import { WorkspaceController } from './controllers/workspace.controller';

@Module({
  controllers: [WorkspaceController],
  providers: [WorkspaceService],
})
export class WorkspaceModule {}
