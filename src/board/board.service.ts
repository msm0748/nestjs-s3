import { Injectable } from '@nestjs/common';
import { S3Service } from 'src/s3/s3.service';
import { UtilsService } from 'src/utils/utils.service';

@Injectable()
export class BoardService {
  constructor(
    private readonly s3Service: S3Service,
    private readonly utilsService: UtilsService,
  ) {}
  //...

  async saveImage(file: Express.Multer.File) {
    return await this.imageUpload(file);
  }

  async imageUpload(file: Express.Multer.File) {
    const imageName = this.utilsService.getUUID();
    const ext = file.originalname.split('.').pop();

    const imageUrl = await this.s3Service.imageUploadToS3(
      `${imageName}.${ext}`,
      file,
      ext,
    );

    return { imageUrl };
  }
}
