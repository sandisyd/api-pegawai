import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pegawai } from './pegawai.entity';
import { JsonContains, Repository } from 'typeorm';
import { PegawaiDto } from './dto/pegawai.dto';

@Injectable()
export class PegawaiService {
  constructor(
    @InjectRepository(Pegawai) private pegawaiRepo: Repository<Pegawai>,
  ) {}

  // get data
  async getPegawai() {
    return this.pegawaiRepo.find();
  }

  // get data by id
  async getPegawaiById(id: string) {
    return this.pegawaiRepo.findOne({ where: { id: parseInt(id) } });
  }

  // create data pegawai
  async createPegawai(dPegawai: PegawaiDto) {
    const pegawaiNew = this.pegawaiRepo.create(dPegawai);
    await this.pegawaiRepo.save(pegawaiNew);
    return pegawaiNew;
  }

  // update data pegawai
  async updatePegawai(id: string, udPegawai: PegawaiDto) {
    await this.pegawaiRepo.update({ id: parseInt(id) }, udPegawai);
    return await this.pegawaiRepo.findOne({ where: { id: parseInt(id) } });
  }

  // delete data pegawai
  async deletePegawai(id: string){
    
    return await this.pegawaiRepo.delete(parseInt(id));
  }
}
