<script lang="ts">
    export let name: string
    export let required = false
    export let value = ''
    export let group: string = undefined
    export let disabled = false
    export let id: string = undefined
    export let className = ''
    export let node: HTMLElement = undefined
</script>

<label class={ className } on:click on:mouseover on:mouseleave on:focus on:blur>
    <input type="radio" bind:group { id } bind:this={ node } { name } { disabled } { required } { value } on:change on:input />
    <span>
        <slot />
    </span>
</label>

<style>
    label > input[type="radio"] {
        display: none;
    }

    label > input[type="radio"] + span {
        display: flex;
        flex-flow: row;
        cursor: pointer;
        align-items: start;
    }

    label > input[type="radio"] + span::before {
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

    label > input[type="radio"] + span::before {
        background-image: url('/img/icons/radio-deselected.svg');
    }

    label > input[type="radio"]:checked + span::before {
        background-image: url('/img/icons/radio-selected.svg');
    }
</style>