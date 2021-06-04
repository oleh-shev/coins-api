import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './item.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
