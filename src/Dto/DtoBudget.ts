export interface DtoBudget {
  Detail:string;
  Budget:number;
}

export interface ResponseBudget {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt?: any;
  detail: string;
  budget: number;
}
