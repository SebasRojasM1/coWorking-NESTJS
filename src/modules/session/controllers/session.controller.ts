import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SessionService } from '../services/session.service';
import { CreateSessionDto } from '../dto/create-session.dto';
import { UpdateSessionDto } from '../dto/update-session.dto';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post("/create")
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionService.create(createSessionDto);
  }

  @Get("all")
  findAll() {
    return this.sessionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sessionService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateSessionDto: CreateSessionDto) {
    return this.sessionService.update(+id, updateSessionDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.sessionService.remove(+id);
  }
}
