import { Right } from '@shared/models/';

export enum RolesCode {
  SUPER_ADMINISTRATOR = 'SUPER_ADMINISTRATOR',
  COMPANY_ADMINISTRATOR = 'COMPANY_ADMINISTRATOR',
  COMPANY_OPERATOR = 'COMPANY_OPERATOR',
  COMPANY_SERVICE_USER = 'COMPANY_SERVICE_USER'
}

export interface Role {
  id: number;
  name: string;
  code: RolesCode;
  rights: Right[];
}
