declare module 'urfu-ui-kit' {
    export type Padding = {
        x?: PaddingValue,
        y?: PaddingValue,
        top?: PaddingValue,
        bottom?: PaddingValue,
        left?: PaddingValue,
        right?: PaddingValue
    }

    export type RangeGenerator = {
        (to: number, step?: number): number[]
        (from: number, to: number, step?: number): number[]
    }
    
    export type RESTMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
    
    export type DefaultSizes = 'S' | 'M' | 'L'
    
    export type ExtendedSizes = DefaultSizes | 'XL'
    
    export type Align = 'left' | 'center' | 'right' | 'unset' | 'initial' | 'inherit'
    
    export type PaddingValue = string | number
}