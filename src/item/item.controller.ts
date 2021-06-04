import { Controller, Get, Param } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private itemService: ItemService) {
  }

  @Get('/:id')
  async getItem(@Param('id') id: string) {
    return this.itemService.getItem(id);
  }
}
