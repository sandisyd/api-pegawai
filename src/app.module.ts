import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PegawaiModule } from './pegawai/pegawai.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/orm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      typeOrmConfig
    ),
    PegawaiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
