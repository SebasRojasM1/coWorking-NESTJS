import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkspaceService } from '../services/workspace.service';
import { CreateWorkspaceDto, UpdateWorkspaceDto} from '../dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Workspace")
@Controller('workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Post("create")
  @ApiOperation({ summary: 'Create a workspace to the system.', description: 'Create a workspace to access the system.' })
  @ApiResponse({status: 201, description: 'Workspace created successfully.'})
  @ApiResponse({status: 400, description: 'The data entered to create the workspace is invalid.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while creating the workspace.'})
  create(@Body() createWorkspaceDto: CreateWorkspaceDto) {
    return this.workspaceService.create(createWorkspaceDto);
  }

  @Get("all")
  @ApiOperation({ summary: 'Find all the workspaces of the system.', description: 'View all workspace registered in the system.' })
  @ApiResponse({status: 200, description: 'All workspaces were found successfully.'})
  @ApiResponse({status: 404, description: 'No workspaces were found in the system.'})
  @ApiResponse({status: 500,description: 'An internal server error occurred while searching for the workspace.'})
  findAll() {
    return this.workspaceService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find the workspace by ID of the system.', description: 'View a specific workspace registered in the database.' })
  @ApiResponse({status: 200, description: 'workspace found successfully.',})
  @ApiResponse({status: 404, description: 'workspace with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while searching for the workspace.'})
  findOne(@Param('id') id: number) {
    return this.workspaceService.findOne(+id);
  }

  @Patch('update/:id')
  @ApiOperation({ summary: 'Update a workspace to the system.', description: 'Update a specific workspace registered in the database.' })
  @ApiResponse({status: 200, description: 'Workspace updated successfully.'})
  @ApiResponse({status: 404, description: 'Workspace with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while updating the workspace.'})
  update(@Param('id') id: number, @Body() updateWorkspaceDto: CreateWorkspaceDto) {
    return this.workspaceService.update(+id, updateWorkspaceDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Delete a workspace to the system.', description: 'Delete a workspace of the system.' })
  @ApiResponse({status: 200, description: 'Workspace deleted successfully.'})
  @ApiResponse({status: 404, description: 'Workspace with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while deleting the workspace.'})
  remove(@Param('id') id: number) {
    return this.workspaceService.remove(+id);
  }
}
