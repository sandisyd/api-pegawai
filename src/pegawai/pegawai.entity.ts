import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pegawai{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nip: string;

    @Column({length: 255})
    nama_lengkap: string;

    @Column()
    jk: string;

    @Column()
    level: string;

    @Column()
    alamat: string;

    @Column()
    divisi: string;

    @Column()
    jabatan: string;
}