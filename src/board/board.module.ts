import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { S3Service } from 'src/s3/s3.service';
import { UtilsService } from 'src/utils/utils.service';

@Module({
  controllers: [BoardController],
  providers: [BoardService, S3Service, UtilsService],
})
export class BoardModule {}
