<script lang="ts">
    import { Tag } from '$lib/components/'

    export let value: 'enum' | 'string' | 'number' | 'object' | 'boolean' | 'function' = 'string'
    const types = ['enum', 'string', 'number', 'object', 'boolean', 'function']
    const descriptions = [
        'Перечисляемое поле, которое может принимать одно из значений из списка',
        'Строковое значение',
        'Числовое значение',
        'Объект',
        'Логическое значение',
        'Функция'
    ]

    let title = descriptions[types.indexOf(value)]
</script>

<Tag {title}>{ value }</Tag>
