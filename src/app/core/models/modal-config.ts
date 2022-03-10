export interface ModalConfig {
    name?: string
    modalTitle: string
    dismissButtonLabel?: string
    size: string
    centered: boolean
    header: boolean
    footer: boolean
    closeButtonLabel?: string
    shouldClose?(): Promise<boolean> | boolean
    shouldDismiss?(): Promise<boolean> | boolean
    onClose?(): Promise<boolean> | boolean
    onDismiss?(): Promise<boolean> | boolean
    disableCloseButton?(): boolean
    disableDismissButton?(): boolean
    hideCloseButton?(): boolean
    hideDismissButton?(): boolean
}
