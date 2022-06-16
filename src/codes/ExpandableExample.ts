export default `<script>
    let expandables = {
        open: () => void,
        close: () => void,
        toggle: () => void
    }[] = []

    const toggleExpandable = (index) => {
        expandables[index].toggle()
    }
</script>

<Expandable bind:this={ expandables[0] } on:click={ () => toggleExpandable(0) }>
    <svelte:fragment slot="header">Нажми на меня</svelte:fragment>
    <svelte:fragment slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit...</svelte:fragment>
</Expandable>
<Expandable bind:this={ expandables[1] } on:click={ () => toggleExpandable(1) }>
    <svelte:fragment slot="header">Нажми на меня</svelte:fragment>
    <svelte:fragment slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit...</svelte:fragment>
</Expandable>`
