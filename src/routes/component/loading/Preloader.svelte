<script lang="ts">
    import { Code, Heading, Progress, Text, ParameterType, Window, Link } from '$lib/components'
    import CodeExample from '$lib/codes/PreloaderExample'
    import { onMount } from 'svelte'
    import { slide } from 'svelte/transition'

    let loaderVisible = true

    const hide = () => loaderVisible = false
    const show = () => loaderVisible = true
    
    const replay = () => {
        show()
        setTimeout(hide, 1200)
    }

    onMount(() => {
        setTimeout(hide, 1000)
    })
</script>

<svelte:head>
    <title>УрФУ UI Kit – Preloader</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Preloader <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Экран с анимацией загрузки, который пропадает после того, как страница полностью загружена
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <Window placeholder>
            <div class="loader-holder" class:loaderVisible>
                <Progress />
            </div>
        </Window>
        { #if !loaderVisible }
            <div transition:slide="{{ duration: 200 }}" class="align-center" style:margin-top="2em">
                <Link variant="interactive" on:click={ replay } lineWidth={ 3 }>Воспроизвести сначала</Link>
            </div>
        { /if }
        <br />
    
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
    
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">size <ParameterType value="enum" /></Heading>
        <Text>
            Размер анимированной иконки. <br />
            Поддерживаются три стандартных значения: <code>S</code>, <code>M</code> и <code>L</code> <br />
            Значение по умолчанию: <code>M</code>
        </Text>
        <Heading size={4} color="var(--blue)">hideOnLoad <ParameterType value="boolean" /></Heading>
        <Text>Флаг, отвечающий за то, скрывать ли компонент после загрузки страницы или нет. <br /> Значение по умолчанию: <code>true</code> </Text>
        <Heading size={4} color="var(--blue)">delay <ParameterType value="number" /></Heading>
        <Text>Задержка перед тем, как компонент будет скрыт после загрузки страницы (в мс). <br /> Значение по умолчанию: <code>0</code></Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
    
        <Heading size={3} className="underlined-text">Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
    </main>
</div>

<style>
    .loader-holder {
        display: grid;
        place-content: center;
        place-items: center;
        min-height: 500px;
        background-color: white;
        transition: 0.2s ease-in-out;
        opacity: 0;
    }

    .loader-holder.loaderVisible {
        opacity: 1;
    }
</style>
