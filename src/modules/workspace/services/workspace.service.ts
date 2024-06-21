import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkspaceDto, UpdateWorkspaceDto } from '../dto';
import { WorkspaceEntity } from '../entities/workspace.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WorkspaceService {
  constructor(
    @InjectRepository(WorkspaceEntity) private readonly workspaceRepository: Repository<WorkspaceEntity>,
  ) {}

  async create(createWorkspaceDto: CreateWorkspaceDto): Promise<WorkspaceEntity> {
    try {
      const workspace = this.workspaceRepository.create(createWorkspaceDto);
      return await this.workspaceRepository.save(workspace);
    } catch (error) {
      throw new ConflictException(`Workspace creation failed: ${error.message}`);
    }
  }

  async findAll(): Promise<WorkspaceEntity[]> {
    try {
      return await this.workspaceRepository.find();
    } catch (error) {
      throw new Error(`Error fetching workspaces: ${error.message}`);
    }
  }

  async findOne(workspace_id: number): Promise<WorkspaceEntity> {
    const workspace = await this.workspaceRepository.findOne({ where: { workspace_id } });

    if (!workspace) {
      throw new NotFoundException('Workspace not found. Try again.');
    }

    return workspace;
  }

  async update(workspace_id: number, updateWorkspaceDto: CreateWorkspaceDto): Promise<WorkspaceEntity> {
    const workspace = await this.workspaceRepository.preload({
      workspace_id,
      ...updateWorkspaceDto,
    });

    if (!workspace) {
      throw new NotFoundException('Workspace not found. Try again.');
    }

    try {
      return await this.workspaceRepository.save(workspace);
    } catch (error) {
      throw new ConflictException(`Workspace update failed: ${error.message}`);
    }
  }

  async remove(workspace_id: number): Promise<void> {
    const workspace = await this.workspaceRepository.findOne({ where: { workspace_id } });

    if (!workspace) {
      throw new NotFoundException('Workspace not found. Try again.');
    }

    try {
      await this.workspaceRepository.remove(workspace);
    } catch (error) {
      throw new Error(`Error deleting workspace: ${error.message}`);
    }
  }
}
