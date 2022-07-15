type RangeGenerator = {
    (to: number, step?: number): number[]
    (from: number, to: number, step?: number): number[]
}

type RESTMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

type DefaultSizes = 'S' | 'M' | 'L'

type ExtendedSizes = DefaultSizes | 'XL'

type Align = 'left' | 'center' | 'right' | 'unset' | 'initial' | 'inherit'

type PaddingValue = string | number

type Padding = {
    x?: PaddingValue,
    y?: PaddingValue,
    top?: PaddingValue,
    bottom?: PaddingValue,
    left?: PaddingValue,
    right?: PaddingValue
}
