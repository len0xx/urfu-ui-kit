import { ajax } from 'jquery'
import axios from 'axios'
import type { RESTMethod } from './types'


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

    request.fail((jqXHR, res) => {
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
    const response = await axios({ method, url, headers, data })
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

export type RangeGenerator = {
    (to: number, step?: number): number[]
    (from: number, to: number, step?: number): number[]
}

export const range: RangeGenerator = (to: number, step = 1) => {
    const result = []
    for (let i = 0; i < to; i += step) result.push(i)
    return result
}

export const random = (min = 0, max = 1) => Math.floor(Math.random() * (max - min) + min)
