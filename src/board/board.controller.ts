import {
  Controller,
  HttpCode,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @UseInterceptors(FileInterceptor('file'))
  @HttpCode(200)
  @Post('image')
  async saveImage(@UploadedFile() file: Express.Multer.File) {
    console.log('욧총');

    console.log(file, 'file');
    return await this.boardService.imageUpload(file);
  }
}
