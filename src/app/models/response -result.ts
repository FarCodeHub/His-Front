export interface ResponseResult<T> {
    data: T
    status: number
    errors: any
    message: any
    page: number
    totalItems: number
}