
export enum MaterialStateEnum {
    available,
    taken,
    usedUp,
}

export interface IMaterialItem {
    id: number;
    serial: string;
    materialTypeId: number;
    warehouseId: number;
    orderSerial: string;
    materialState: MaterialStateEnum
}

export interface IAddMaterialItemDto {
    materialState: MaterialStateEnum,
    materialTypeId: number;
    warehouseId: number;
}

export interface InputAddMaterialItems {
    materialItems: IMaterialItem[];
}

export interface InputSetOrderForMaterialItems {
    materialItemIds: number[];
    orderSerial: string;
}

export const typeDef = `
    type MaterialItem {
        id: Int!
        serial: String!
        materialTypeId: Int!
        warehouseId: Int!
        orderSerial: String
        materialState: Int!
    }
    
    input InputSetOrderForMaterialItems {
        materialItemIds: [Int!]!
        orderSerial: String!
    }   
    
    input InputAddMaterialItems {
       materialItems: [InputMaterialItemDto!]!
    }
    
    input InputGetMaterialItems {
       warehouseId: Int!
    }
    
    input InputMaterialItemDto {
       materialState: Int!
       materialTypeId: Int!
       warehouseId: Int!
    }
`;
