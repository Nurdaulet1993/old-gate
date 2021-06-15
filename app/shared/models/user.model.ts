import { Role } from '@shared/models/';

export interface User {
  id: number;
  birthday: string;
  dateDeleted: string;
  dateRegistration: string;
  email: string;
  iin: string;
  isDeleted: boolean;
  name: string;
  patronymic: string;
  phone: string;
  surname: string;
  systemId: number;
  rolesList?: Role[];
}
