import { Module } from '@nestjs/common';
import { S3Module } from 'src/s3/s3.module';
import { UtilsModule } from 'src/utils/utils.module';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';

@Module({
  controllers: [BoardController],
  providers: [BoardService],
  imports: [UtilsModule, S3Module],
})
export class BoardModule {}
