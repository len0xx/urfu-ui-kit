export default `<script>
    let modal: {
        open: () => void,
        close: () => void
    }
</script>

<Button on:click={ modal.open }>Открыть модальное окно</Button>

<Modal bind:this={ modal } align="center">
    <Heading size={2} className="blue-text">Модальное окно</Heading>
    <Text className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit...</Text>
    <br />
    <Button variant="blue" on:click={ () => modal.close() }>Закрыть</Button>
    <Rainbow size="L" slot="footer" />
</Modal>`
