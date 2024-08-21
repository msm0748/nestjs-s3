import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { S3Service } from './s3/s3.service';
import { S3Module } from './s3/s3.module';
import { BoardService } from './board/board.service';
import { BoardController } from './board/board.controller';
import { BoardModule } from './board/board.module';
import { UtilsModule } from './utils/utils.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    S3Module,
    BoardModule,
    UtilsModule,
    ConfigModule.forRoot({
      isGlobal: true, // 환경 변수를 글로벌로 설정
    }),
  ],
  controllers: [AppController, BoardController],
  providers: [AppService, S3Service, BoardService, ConfigService],
})
export class AppModule {}
