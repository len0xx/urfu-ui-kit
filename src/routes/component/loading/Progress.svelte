<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Progress from '$lib/components/Progress.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import ParameterType from '$lib/components/ParameterType.svelte'

    import ProgressExample from '$lib/../codes/ProgressExample'

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – Progress</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Progress <a href="#" class="page-link">🔗</a></Heading>
        <p class="medium">
            Анимированная иконка, отображающая состояние загрузки
        </p>
        <br />
        <Progress size="S" />
        <Progress size="M" />
        <Progress size="L" />
        <br />
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={ProgressExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">size <ParameterType value="enum" /></Heading>
        <p>Размер загрузчика. Поддерживаются три значения: <code>S</code>, <code>M</code> и <code>L</code>. <br />
            Значение по умолчанию: <code>M</code></p>
        <Heading size={4} className="blue-text">speed <ParameterType value="enum" /></Heading>
        <p>Скорость вращения иконки. Поддерживаются три значения: <code>1</code>, <code>2</code> и <code>3</code>. <br />
            Значение по умолчанию: <code>2</code></p>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <p>Аналог стандартного атрибута class</p>
        <br />
    
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
    </main>
</div>
