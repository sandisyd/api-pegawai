import { Body, Controller, Get, Post } from '@nestjs/common';
import { PegawaiService } from './pegawai.service';
import { PegawaiDto } from './dto/pegawai.dto';

@Controller('pegawai')
export class PegawaiController {
  constructor(private pegawaiService: PegawaiService) {}
  @Get()
  async getPegawai() {
    return await this.pegawaiService.getPegawai();
  }

  @Post('add_data')
  async createPegawai(@Body() cPegawai: PegawaiDto
  ) {
    return this.pegawaiService.createPegawai(cPegawai)
  }
}
