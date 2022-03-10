export interface SpecialityModel {
    id: number
    title: string
    titleLang2: string
    parentId?: number
    children: SpecialityModel[]
    expanded: boolean
    centerId: number
    medicalStaffId: number
}
