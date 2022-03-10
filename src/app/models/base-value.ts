export interface BaseValue {
    id: number;
    title: string;
    titleLang2: string;
    icon: string;
    selected: boolean
    baseValueTypeId : number
}

const enum BaseValueEnum {
  Marriage = 2,
  Expertise = 3,
  Sex = 1002,
  Job = 1003,
  Education = 1004,
  BloodGroup = 1005,
  Ownership = 1006,
  ScientificLevels = 2007
};
