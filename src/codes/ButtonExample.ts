export default `<script>
    let isBookmarked = false
    let modal = undefined
    const icons = ['pack/bookmark-outlined', 'pack/bookmark-fill']
</script>

<Modal bind:this={ modal } align="center">
    <Heading size={2} color="var(--blue)">Модальное окно</Heading>
    <Text className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repudiandae numquam sint nobis labore quibusdam.</Text>
    <br />
    <Button variant="blue" on:click={ modal.close }>Закрыть</Button>
    <Rainbow size="L" slot="footer" />
</Modal>

<Button variant="primary" size="S" on:click={ modal.open }>Открыть модальное окно</Button>
<Button variant="blue" size="M" href="/">Вернуться на главную</Button>
<Button variant="primary" size="L" on:click={ () => isBookmarked = !isBookmarked }>
    <Icon name={ isBookmarked ? icons[1] : icons[0] } slot="before" width={ 24 } height={ 24 } />
    <svelte:fragment>
        { isBookmarked ? 'Убрать из закладок' : 'Добавить в закладки' }
    </svelte:fragment>
</Button>`