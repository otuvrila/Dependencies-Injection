import IoCContainer from 'ioc-lite';
import { Users } from '../services/users';
import { HTTP } from '../services/http';
import { ApiConfig, ILogger } from '../types';
import { Logger } from '../services/logger';

export interface IoCResources {
  logger: ILogger;
  apiConfig: ApiConfig;
  users: typeof Users;
  http: typeof HTTP;
}

export const ioc = new IoCContainer<IoCResources>();

ioc.register('logger', new Logger());
ioc.registerClass('http', HTTP);
ioc.registerClass('users', Users);