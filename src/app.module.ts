import { Module } from '@nestjs/common';
import { ListModule } from './list/list.module';
import { ItemModule } from './item/item.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://oleh-shev:vafobe05@coins-cluster.sginq.mongodb.net/coins?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
    ),
    ListModule,
    ItemModule,
  ],
})
export class AppModule {}
