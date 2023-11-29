import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    port: 3306,
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'db_pegawai',
    synchronize: true,
    logging: true,
    entities: [__dirname + '/../**/*.entity.{ts,js}']
}