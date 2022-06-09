<script lang="ts">
    import { onMount, SvelteComponent } from 'svelte'
    import { Code, Heading, Modal, Button, Rainbow, Text, Preloader, ParameterType } from '$lib/components'

    import ModalExample from '$lib/../codes/ModalExample'

    let modal: SvelteComponent
    
    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – Modal</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<Modal bind:this={ modal } align="center">
    <Heading size={2} className="blue-text">Модальное окно</Heading>
    <Text className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repudiandae numquam sint nobis labore quibusdam.</Text>
    <br />
    <Button variant="blue" on:click={ () => modal.close() }>Закрыть</Button>
    <Rainbow size="L" slot="footer" />
</Modal>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Modal <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Модальное окно с полностью кастомизируемым контентом и кнопкой закрытия
        </Text>
        <br />
        <Button variant="primary" on:click={ () => modal.open() }>Открыть модальное окно</Button>
        <br />
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={ModalExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">visible <ParameterType value="boolean" /></Heading>
        <Text><code>true</code> – модальное окно отображается, <code>false</code> – не отображается</Text>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
    
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
    </main>
</div>
