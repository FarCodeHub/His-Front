export interface MenuItemModel {

      roleTitle: string
      roleId: number
      menuItemId: number
      menuTitle: string
      children: MenuItemModel[]
      parentId: number
      iconUrl: string
      routePath: string
}
