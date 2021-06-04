import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './item.interface';

@Injectable()
export class ItemService {
  constructor(@InjectModel('Item') private readonly item: Model<Item>) {}

  async getItem(id: string): Promise<Item> {
    return this.item.findOne({ id });
  }
}
