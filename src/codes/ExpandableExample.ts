export default `<script>
    let expand = [false, false]

    const toggleExpandable = (index) => {
        expand[index] = !expand[index]
    }
</script>

<Expandable bind:active={ expand[0] } on:click={ () => toggleExpandable(0) }>
    <Heading size={3} className="blue-text" slot="header">Нажми на меня</Heading>
    <p slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, in dolore...</p>
</Expandable>
<Expandable bind:active={ expand[1] } on:click={ () => toggleExpandable(1) }>
    <Heading size={3} className="blue-text" slot="header">Нажми на меня</Heading>
    <p slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, in dolore...</p>
</Expandable>`
