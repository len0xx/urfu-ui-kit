declare module 'urfu-ui-kit' {
    import type { EasingFunction } from 'svelte/transition'
    
    export interface Padding {
        x?: PaddingValue,
        y?: PaddingValue,
        top?: PaddingValue,
        bottom?: PaddingValue,
        left?: PaddingValue,
        right?: PaddingValue
    }

    export interface RangeGenerator {
        (to: number, step?: number): number[]
        (from: number, to: number, step?: number): number[]
    }
    
    export type RESTMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
    
    export type DefaultSizes = 'S' | 'M' | 'L'
    
    export type ExtendedSizes = DefaultSizes | 'XL'
    
    export type Align = 'left' | 'center' | 'right' | 'unset' | 'initial' | 'inherit' | 'start' | 'end' | 'justify' | 'match-parent' | 'revert' | 'revert-layer'
    
    export type PaddingValue = string | number

    export interface TransitionOptions {
        delay?: number,
        duration?: number,
        easing?: EasingFunction
    }

    export type TransitionFunction = (node: HTMLElement, options: TransitionOptions) => SvelteTransitionReturnType

    export interface Transition {
        func: TransitionFunction,
        options: TransitionOptions
    }

    export interface TransitionReceiver {
        in?: Transition,
        out?: Transition
    }

    export interface TransitionDescriber {
        inFunc: TransitionFunction,
        inOptions: TransitionOptions,
        outFunc: TransitionFunction,
        outOptions: TransitionOptions
    }
}
