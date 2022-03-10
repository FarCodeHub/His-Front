import { BaseValue } from "./base-value";

export interface BaseValueType {
    id: number;
    typeName: string;
    uniqueName: string;
    icon: string;
    selected: boolean
    baseValues: BaseValue[]
}
