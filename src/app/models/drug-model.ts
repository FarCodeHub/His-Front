import { List } from "echarts";
import { DrugDetailsModel } from "./drug-detail-model";

export interface DrugModel {

     brandTitle :string
     quantity : number
     code :string
     id: number
     drugDetails :  DrugDetailsModel
}
