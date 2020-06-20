
export interface IWarehouse {
    id: number;
    name: string;
    capacity: number;
}

export interface InputAddWarehouse {
    warehouse: IAddWarehouseDto;
}

export interface IAddWarehouseDto {
    name: string;
    capacity: number;
}

export const typeDef = `
  type Warehouse {
    id: Int!
    name: String!
    capacity: Int!
  }
  
  input InputAddWarehouseDto {
    name: String!
    capacity: Int!
  }

  input InputAddWarehouse {
    warehouse: InputAddWarehouseDto!
  }   
`;
