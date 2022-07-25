<script lang="ts">
    export let name: string
    export let required = false
    export let checked = false
    export let value = ''
    export let group: string[] = []
    export let disabled = false
    export let inline = false
    export let id: string = undefined
    export let className = ''
    export let node: HTMLElement = undefined

    $: inlineClass = inline ? 'inline-checkbox' : ''
    $: updateChekbox(group)
    $: updateGroup(checked)

    const updateChekbox = (group: string[]) => checked = group.indexOf(value) >= 0

    function updateGroup(checked: boolean) {
        const index = group.indexOf(value)

        if (checked) {
            if (index < 0) {
                group.push(value)
                group = group
            }
        } else {
            if (index >= 0) {
                group.splice(index, 1)
                group = group
            }
        }
}
</script>

<label
    class={ [className, inlineClass].join(' ') }
    on:click
    on:mouseover
    on:mouseleave
    on:focus
    on:blur
>
    <input type="checkbox" { id } bind:this={ node } { name } { disabled } { required } bind:checked { value } on:change on:input />
    <span>
        <slot />
    </span>
</label>

<style>
    label {
        display: block;
        position: relative;
    }

    label.inline-checkbox {
        display: inline-block;
    }

    label > input[type="checkbox"] {
        display: none;
    }

    label > input[type="checkbox"] + span {
        display: flex;
        flex-flow: row;
        cursor: pointer;
        align-items: start;
    }

    label > input[type="checkbox"] + span::before {
        display: inline-block;
        content: '';
        vertical-align: middle;
        height: 1em;
        padding-left: 1em;
        margin-top: 0.25em;
        width: 0;
        margin-right: .8em;
        background-repeat: no-repeat;
        background-position-x: 0%;
        background-position-y: 0%;
        background-position: left center;
        background-size: auto 100%;
    }

    label > input[type="checkbox"] + span::before {
        background-image: url('/img/icons/unchecked.svg');
    }

    label > input[type="checkbox"]:checked + span::before {
        background-image: url('/img/icons/checked.svg');
    }
</style>