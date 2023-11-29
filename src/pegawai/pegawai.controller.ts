import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PegawaiService } from './pegawai.service';
import { PegawaiDto } from './dto/pegawai.dto';
import { JsonContains } from 'typeorm';

@Controller('pegawai')
export class PegawaiController {
  constructor(private pegawaiService: PegawaiService) {}

  //   get all data pegawai
  @Get()
  async getPegawai() {
    return await this.pegawaiService.getPegawai();
  }

  //   Insert data pegawai
  @Post('add_data')
  async createPegawai(@Body() cPegawai: PegawaiDto) {
    return this.pegawaiService.createPegawai(cPegawai);
  }

  //   get pegawai by id
  @Get(':id')
  async getPegawaiById(@Param('id') id: string) {
    return this.pegawaiService.getPegawaiById(id);
  }

  //   update data pegawai
  @Post('updatePegawai/:id')
  async updateDataPegawai(
    @Param('id') id: string,
    @Body() uPegawai: PegawaiDto,
  ) {
    await this.pegawaiService.updatePegawai(id, uPegawai);
    return "Data Berhasil di update"
  }

  // delete data
  @Delete('deletePegawai/:id')
  async deleteData(@Param('id') id: string){
    await this.pegawaiService.deletePegawai(id);
    return JsonContains({
        message: "Data berhasil dihapus"
    });
  }
}
