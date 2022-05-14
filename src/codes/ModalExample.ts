export default `<script>
    let modalVisible = false

    const openModal = () => modalVisible = true
    const hideModal = () => modalVisible = false
</script>

<Modal bind:visible={ modalVisible } align="center">
<Heading size={2} className="blue-text">Модальное окно</Heading>
    <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
    <br />
    <Button variant="blue" on:click={ hideModal }>Закрыть</Button>
    <Rainbow size="L" slot="footer" />
</Modal>`