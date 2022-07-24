export default `<script>
    let modal = undefined
</script>

<Button on:click={ modal.open }>Открыть модальное окно</Button>

<Modal bind:this={ modal } align="center">
    <Heading size={2} color="var(--blue)">Модальное окно</Heading>
    <Text className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit...</Text>
    <br />
    <Button variant="blue" on:click={ modal.close }>Закрыть</Button>
    <Rainbow size="L" slot="footer" />
</Modal>`
