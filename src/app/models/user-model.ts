import { RoleModel } from "./role-model";


export interface UserModel {
    // firstName: string;
    // lastName: string;
    // roleName: string;
    // avaterImage: string;

    userName: string;
    password: string;
    email: string;
    token: string;
    fullName: string;
    role: string;
    personId: number;
    id: number;
    mobile :string;
    nationalCode : string;
    roles : RoleModel[]
    lastPassword : string
    changePassword : boolean
    avatar:string
}
