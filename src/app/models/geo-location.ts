
export interface GeoLocation {
    id: number
    level?: number
    parentId?: number
    title: string
    titleLang2: string
    type?: number
    provinceId?: number
    provinceTitle?: string
    children: GeoLocation[]
}
