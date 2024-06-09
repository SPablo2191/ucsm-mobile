export interface Student {
  id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  second_last_name: string;
  birth_date: Date;
  register_date: Date;
  email: string;
  phone_number: string;
  address: string;
  identification_document: string;
  password: string;
  status: string;
  role: string;
}

export type PartialStudent = Partial<Student>;

export interface StudentWithToken {
  user: Student;
  expires_in: string;
  token: string;
}
