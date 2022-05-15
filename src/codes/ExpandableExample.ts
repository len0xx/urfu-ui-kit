export default `<script>
    let expand = [false, false]

    const toggleExpandable = (index) => {
        expand[index] = !expand[index]
    }
</script>

<Expandable bind:active={ expand[0] } on:click={ () => toggleExpandable(0) }>
    <svelte:fragment slot="header">Нажми на меня</svelte:fragment>
    <svelte:fragment slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, in dolore itaque nemo rerum quos numquam nostrum. Dignissimos nihil, eius quibusdam harum, voluptate sed nam, rerum earum aperiam eaque dolorum.</svelte:fragment>
</Expandable>
<Expandable bind:active={ expand[1] } on:click={ () => toggleExpandable(1) }>
    <svelte:fragment slot="header">Нажми на меня</svelte:fragment>
    <svelte:fragment slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, in dolore itaque nemo rerum quos numquam nostrum. Dignissimos nihil, eius quibusdam harum, voluptate sed nam, rerum earum aperiam eaque dolorum.</svelte:fragment>
</Expandable>`
