<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
    import Button from '$lib/components/Button.svelte'
    import Modal from '$lib/components/Modal.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Rainbow from '$lib/components/Rainbow.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import ParameterType from '$lib/components/ParameterType.svelte'

    import ModalExample from '$lib/../codes/ModalExample'

    let modalVisible = false

    const openModal = () => modalVisible = true
    const hideModal = () => modalVisible = false
    
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

<Modal bind:visible={ modalVisible } align="center">
    <Heading size={2} className="blue-text">Модальное окно</Heading>
    <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repudiandae numquam sint nobis labore quibusdam.</p>
    <br />
    <Button variant="blue" on:click={ hideModal }>Закрыть</Button>
    <Rainbow size="L" slot="footer" />
</Modal>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Modal <a href="#" class="page-link">🔗</a></Heading>
        <p class="medium">
            Модальное окно с полностью кастомизируемым контентом и кнопкой закрытия
        </p>
        <br />
        <Button variant="primary" on:click={ openModal }>Открыть модальное окно</Button>
        <br />
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={ModalExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">visible <ParameterType value="boolean" /></Heading>
        <p><code>true</code> – модальное окно отображается, <code>false</code> – не отображается</p>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <p>Аналог стандартного атрибута class</p>
        <br />
    
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
    </main>
</div>
