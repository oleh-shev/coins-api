import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { List } from './list.interface';

@Injectable()
export class ListService {
  constructor(@InjectModel('List') private readonly list: Model<List>) {}

  async getList(): Promise<any> {
    return this.list.find();
  }
}
