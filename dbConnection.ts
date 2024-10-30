import { DataSource } from 'typeorm';
import config from 'config';
import {Employee} from '../models/Employee';
import {LoggerUtil} from '../utils/Logger';
import { EmployeeEntity } from '../entity/EmployeeEntity';
import { fileURLToPath } from 'url';
import path from 'path';
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: config.get('db.host'),
    port: config.get('db.port'),
    username: config.get('db.username'),
    password: config.get('db.password'),
    database: config.get('db.database'),
    synchronize: config.get('db.synchronize'),
    logging: config.get('db.logging'),
    entities: [EmployeeEntity],
    });