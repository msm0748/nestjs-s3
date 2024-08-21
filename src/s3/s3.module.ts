// aws.module.ts
import { Module } from '@nestjs/common';
import { S3Service } from './s3.service';
import { ConfigService } from '@nestjs/config';
import { UtilsService } from 'src/utils/utils.service';

@Module({
  providers: [S3Service, ConfigService, UtilsService],
})
export class S3Module {}
