<script lang="ts">
    import { Tag } from '$lib/components/'

    const types = ['enum', 'string', 'number', 'object', 'boolean', 'function' , 'HTMLElement'] as const
    type Parameter = typeof types[number]

    export let value: Parameter = 'string'
    const descriptions = [
        'Перечисляемое поле, которое может принимать одно из значений из списка',
        'Строковое значение',
        'Числовое значение',
        'Объект',
        'Логическое значение',
        'Функция',
        'HTML-Элемент'
    ]

    let title = descriptions[types.indexOf(value)]
</script>

<Tag {title}>{ value }</Tag>
