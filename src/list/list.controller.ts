import { Controller, Get } from '@nestjs/common';
import { ListService } from './list.service';

@Controller('list')
export class ListController {
  constructor(private listService: ListService) {
  }

  @Get('/')
  async getList() {
    return this.listService.getList();
  }
}
