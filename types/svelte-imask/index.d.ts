declare module 'svelte-imask' {
    import IMask from 'imask'

    type Update = (options: IMask.AnyMaskedOptions) => void
    type Destroy = () => void

    export function imask(node: IMask.MaskElement | IMask.HTMLMaskingElement, options: IMask.AnyMaskedOptions): { update: Update, destroy: Destroy }
}