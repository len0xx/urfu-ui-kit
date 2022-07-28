import { ajax } from 'jquery'
import axios from 'axios'
import type { AxiosResponse } from 'axios'
import type { RESTMethod, ExtendedSizes, RangeGenerator, Padding, PaddingValue, TransitionDescriber, TransitionReceiver } from 'urfu-ui-kit'


// Create slug from the title
export function formatSlug(input: string): string {
    const date = new Date()
    const tokens = input.trim()
        .toLocaleLowerCase()
        .replace(/([^a-z0-9 ])/g, '')
        .replace(/ {2}/g, ' ')
        .trim()
        .split(' ')

    tokens.splice(8)
    tokens.push(
        date.getDate().toString(),
        (date.getMonth() + 1).toString(),
        date.getFullYear().toString()
    )

    return tokens.join('-')
}

// Cut the long text into short version
export function cutPostText(text: string): string {
    const maxTextLength = 100
    const maxWordsLength = 30

    if (text.length < maxTextLength)
        return text

    const words: string[] = text.split(' ')
    words.splice(maxWordsLength)
    const result: string = words.join(' ')
    return result + '...'
}

// Create a plain JSON from FormData
export function transformFormData(form: FormData): Record<string, unknown> {
    const object: Record<string, unknown> = {}
    form.forEach((value, key) => object[key] = value)
    return object
}

type AJAXOptions = {
    method: RESTMethod,
    data?: FormData | Record<string, string> | null,
    csrfToken?: string,
    headers?: JQuery.PlainObject<string> | null
}

// Функция для отправки AJAX запросов с клиента
export function sendWindowAJAX(
    url: string,
    options: AJAXOptions = { method: 'GET' },
    callbackSuccess?: (res: Record<string, unknown>) => void,
    callbackError?: (res: string) => void
): void {
    let finalData: Record<string, unknown> = {}

    if (options.data instanceof FormData) {
        finalData = transformFormData(options.data)
    }
    else if (options.data) {
        finalData = options.data
    }

    if (!options.headers) options.headers = {}

    if (options.csrfToken) finalData.csrf = options.csrfToken

    const request = ajax({
        url: url,
        contentType: 'application/x-www-form-urlencoded',
        headers: options.headers || {},
        type: options.method,
        data: finalData,
        dataType: 'json'
    })

    request.done((res) => {
        if (res.ok === true) {
            if (callbackSuccess) callbackSuccess(res)
        }
        else if (res.ok === false) {
            if (callbackError) callbackError(res)
            console.error(res)
        }
        else {
            if (callbackSuccess) callbackSuccess(res)
        }
    })

    request.fail((_, res) => {
        if (callbackError) callbackError(res)
        console.error(res)
    })
}

// Функция для отправки AJAX запросов с сервера
export async function sendNodeAJAX(
    url: string,
    method: RESTMethod,
    data?: Record<string, string>,
    headers?: Record<string, string>
): Promise<Record<string, string>> {
    if (!headers) headers = {}
    type Response = AxiosResponse<string, unknown> & { data: Record<string, string> }
    const response: Response = await axios({ method, url, headers, data })
    return response.data
}

const redirectDelay = 500
export const redirect = (location: string) => setTimeout(() => { window.location.href = location }, redirectDelay)

const doubleDigit = (num: number): string => num < 10 ? `0${num}` : num.toString()

export const formatDate = (date: Date): string => `${doubleDigit(date.getDate())}.${doubleDigit(date.getMonth() + 1)}.${date.getFullYear()}`

export function encodeQuery(data: Record<string, string>): string {
    delete data['page']
    const ret = []
    for (const d in data) {
        if (data[d] && data[d] !== '')
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]))
    }
    return ret.join('&')
}

export function filterPropsOut(props: Record<string, unknown>, filter: string[]): Record<string, unknown> {
    const result: Record<string, unknown> = {}
    for (const key in props) {
        if (!filter.includes(key)) {
            result[key] = props[key]
        }
    }
    return result
}

export const rangeFrom: RangeGenerator = (from: number, to: number, step: number = 1) => {
    const result = []
    for (let i = from; i < to; i += step) result.push(i)
    return result
}

export const range: RangeGenerator = (to: number, step = 1) => rangeFrom(0, to, step)

// Just the basic random generator
export const random = (min = 0, max = 1) => Math.floor(Math.random() * (max - min) + min)

// Transform the padding value from PaddingValue type to actual CSS
export const applyPadding = (value: PaddingValue): string => (typeof value == 'number') ? value + 'em' : value || '0'

// Transform padding values from JS style to CSS (eg. "2em 4em 2em 4em")
// where the order is from top to left clockwise
export const computePadding = (padding: Padding): string => {
    if (
        padding.top === undefined &&
        padding.bottom === undefined &&
        padding.left === undefined &&
        padding.right === undefined &&
        padding.x === undefined &&
        padding.y === undefined
    ) return undefined

    return [
        applyPadding(padding.top !== undefined ? padding.top : padding.y),
        applyPadding(padding.right !== undefined ? padding.right : padding.x),
        applyPadding(padding.bottom !== undefined ? padding.bottom : padding.y),
        applyPadding(padding.left !== undefined ? padding.left : padding.x)
    ].join(' ')
}

const extendedSizes = ['S', 'M', 'L', 'XL'] as const
const extendedSizeNames = ['small', 'medium', 'large', 'xlarge'] as const

export const getSizeIndex = (size: ExtendedSizes) => extendedSizes.indexOf(size)

export const getSizeName = (size: ExtendedSizes) => extendedSizeNames[getSizeIndex(size)]

export const applyTransitions = (transitions: TransitionReceiver): TransitionDescriber => {
    return {
        inFunc: transitions.in ? transitions.in.func : () => undefined,
        inOptions: transitions.in ? transitions.in.options : undefined,
        outFunc: transitions.out ? transitions.out.func : () => undefined,
        outOptions: transitions.out ? transitions.out.options : undefined,
    }
}
