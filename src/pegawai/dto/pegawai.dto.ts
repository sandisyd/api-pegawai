import { IsNotEmpty, IsOptional } from "class-validator";

export class PegawaiDto{
    @IsNotEmpty()
    nip: string;

    @IsNotEmpty()
    nama_lengkap: string;

    @IsNotEmpty()
    jk: string;

    @IsOptional()
    level: string;

    @IsOptional()
    alamat: string;

    @IsOptional()
    divisi: string;

    @IsOptional()
    jabatan: string;
}