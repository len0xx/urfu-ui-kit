<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
    import Text from '$lib/components/Text.svelte'
    import Modal from '$lib/components/Modal.svelte'
    import Button from '$lib/components/Button.svelte'
    import Rainbow from '$lib/components/Rainbow.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import ParameterType from '$lib/components/ParameterType.svelte'

    import ButtonExample from '$lib/../codes/ButtonExample'

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
    <title>УрФУ UI Kit – Button</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<Modal bind:visible={ modalVisible } align="center">
    <Heading size={2} className="blue-text">Модальное окно</Heading>
    <Text className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repudiandae numquam sint nobis labore quibusdam.</Text>
    <br />
    <Button variant="blue" on:click={ hideModal }>Закрыть</Button>
    <Rainbow size="L" slot="footer" />
</Modal>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Button <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Кнопки являются неотъемлимой частью современных веб-приложений
        </Text>
        <br />
        <Button variant="primary" size="S" on:click={ openModal }>Открыть модальное окно</Button>
        <Button variant="blue" size="S" href="/">Вернуться на главную</Button>
        <br />    <br />
        <Button variant="primary" size="M" on:click={ openModal }>Открыть модальное окно</Button>
        <Button variant="blue" size="M" href="/">Вернуться на главную</Button>
        <br />    <br />
        <Button variant="primary" size="L" on:click={ openModal }>Открыть модальное окно</Button>
        <Button variant="blue" size="L" href="/">Вернуться на главную</Button>
        <br />
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={ButtonExample} />
        <br />
        
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">variant <ParameterType value="enum" /></Heading>
        <Text>
            Вариант отображения кнопки.  <br />
            Поддерживаются два значения: <code>primary</code> и <code>blue</code>.<br />
            Значение по умолчанию: <code>primary</code>
        </Text>
        <Heading size={4} className="blue-text">size <ParameterType value="enum" /></Heading>
        <Text>
            Размер кнопки.  <br />
            Поддерживаются три значения: <code>S</code>, <code>M</code> и <code>L</code>. <br />
            Значение по умолчанию: <code>M</code>
        </Text>
        <Heading size={4} className="blue-text">type <ParameterType value="string" /></Heading>
        <Text>
            Аналог стандартного атрибута type. <br />
            Значение по умолчанию: <code>submit</code>
        </Text>
        <Heading size={4} className="blue-text">href <ParameterType value="string" /></Heading>
        <Text>Используется для добавления кнопке функционала ссылки (переход по страницам по нажатию)</Text>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
        <Heading size={4} className="blue-text">on:focus</Heading>
        <Heading size={4} className="blue-text">on:blur</Heading>
        <Heading size={4} className="blue-text">on:mouseover</Heading>
        <Heading size={4} className="blue-text">on:mouseleave</Heading>
        <Heading size={4} className="blue-text">on:mouseup</Heading>
        <Heading size={4} className="blue-text">on:mousedown</Heading>
    </main>
</div>
