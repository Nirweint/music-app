import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import 'dotenv/config';

@Module({
  imports: [
    TrackModule,
    FileModule,
    MongooseModule.forRoot(
      `mongodb+srv://nirweint:${process.env.DATA_BASE_PASSWORD}@cluster0.29ihm.mongodb.net/spotify-clone?retryWrites=true&w=majority`,
    ),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
  ],
})
export class AppModule {}
