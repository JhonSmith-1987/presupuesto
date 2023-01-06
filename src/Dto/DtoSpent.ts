export interface DtoSpent {
  Detail:string;
  Spent:number;
}

export interface ResponseSpent {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt?: any;
  detail: string;
  spent: number;
}
