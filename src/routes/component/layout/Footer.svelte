<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
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
    <title>УрФУ UI Kit – Footer</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Footer <a href="#" class="page-link">🔗</a></Heading>
        <p class="medium">
            Кнопки являются неотъемлимой частью современных веб-приложений
        </p>
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
        <p>Вариант отображения кнопки (вставляется в атрибут class). Поддерживаются два стандартных значения: <code>primary</code> и <code>blue</code></p>
        <Heading size={4} className="blue-text">className</Heading>
        <p>Аналог стандартного атрибута class</p>
        <Heading size={4} className="blue-text">actionType</Heading>
        <p>Аналог стандартного атрибута action</p>
    </main>
</div>
