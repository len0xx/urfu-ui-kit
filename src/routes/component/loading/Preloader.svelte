<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
    import Text from '$lib/components/Text.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Button from '$lib/components/Button.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import ParameterType from '$lib/components/ParameterType.svelte'

    import ButtonExample from '$lib/../codes/ButtonExample'

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – Preloader</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Preloader <a href="#" class="page-link">🔗</a></Heading>
        <Text className="medium">
            Кнопки являются неотъемлимой частью современных веб-приложений
        </Text>
        <br />
        <Button variant="primary">Открыть модальное окно</Button>
        <a href="/"><Button variant="blue">Вернуться на главную</Button></a>
        <br />
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={ButtonExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">variant</Heading>
        <Text>Вариант отображения кнопки (вставляется в атрибут class). Поддерживаются два стандартных значения: <code>primary</code> и <code>blue</code></Text>
        <Heading size={4} className="blue-text">className</Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <Heading size={4} className="blue-text">actionType</Heading>
        <Text>Аналог стандартного атрибута action</Text>
        <br />
    
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
    </main>
</div>
