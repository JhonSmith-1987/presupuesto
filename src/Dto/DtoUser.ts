export interface DtoUser {
  Name:string;
  User:string;
  Password:string;
}

export interface UserRes {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt?: any;
  name: string;
  user: string;
  password: string;
}

export interface ResponseUser {
  message: string;
  response: UserRes;
}

export interface ResponseDtoUser {
  messages:string;
  response:DtoUser[];
}

export interface ResponseDtoUserUnit {
  Messages:string;
  Response:DtoUser;
}

export interface UserPost {
  User:string;
  Password:string;
}

export interface ResSpent {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt?: any;
  detail: string;
  spent: number;
}

export interface ResBudget {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt?: any;
  detail: string;
  budget: number;
}

export interface ResTotal {
  message: string;
  sumSpent: number;
  sumBudget: number;
  diferencia: number;
  resSpent: ResSpent[];
  resBudget: ResBudget[];
}

