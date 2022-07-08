export type RESTMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

const sizes = ['S', 'M', 'L'] as const
export type DefaultSizes = typeof sizes[number]
const sizeNames = ['small', 'medium', 'large'] as const

const extendedSizes = [...sizes, 'XL'] as const
export type ExtendedSizes = typeof extendedSizes[number]
const extendedSizeNames = [...sizeNames, 'xlarge']

export const getSizeIndex = (size: ExtendedSizes) => extendedSizes.indexOf(size)

export const getSizeName = (size: ExtendedSizes) => extendedSizeNames[getSizeIndex(size)]

export type Align = 'left' | 'center' | 'right' | 'unset' | 'initial' | 'inherit'

export type PaddingValue = string | number

export type Padding = {
    x?: PaddingValue,
    y?: PaddingValue,
    top?: PaddingValue,
    bottom?: PaddingValue,
    left?: PaddingValue,
    right?: PaddingValue
}
