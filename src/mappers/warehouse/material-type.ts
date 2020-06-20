import {MaterialType} from "../../proto/warehouse_pb";
import {IMaterialType} from "../../graphql/models/warehouse/material-type";

class MaterialTypeMapper {
    toGql(materialType: MaterialType): IMaterialType {
        return {
            id: materialType.getId(),
            name: materialType.getName(),
        };
    }
}

export const materialTypeMapper =  new MaterialTypeMapper();
