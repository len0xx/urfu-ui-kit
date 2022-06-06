<script lang="ts">
    import { onMount } from 'svelte'
    import { Code, Heading, Rainbow, Text, Preloader, ParameterType } from '$lib/components'

    import RainbowExample from '$lib/../codes/RainbowExample'

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – Rainbow</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Rainbow <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Декоративный компонент, с градиентным задним фоном
        </Text>
        <br />
        <Rainbow size="S" />
        <br />
        <Rainbow size="M" />
        <br />
        <Rainbow size="L" />
        <br />
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={RainbowExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">size <ParameterType value="enum" /></Heading>
        <Text>Размер компонента. Поддерживаются три значения: <code>S</code>, <code>M</code> и <code>L</code>. <br />
            Значение по умолчанию: <code>M</code></Text>
        <Heading size={4} className="blue-text">fixed <ParameterType value="enum" /></Heading>
        <Text>Опциональный атрибут для привязки компонента к верхнему или нижнему краю родительского элемента. Поддерживаются два значения: <code>top</code> и <code>bottom</code>. <br />
            Значение по умолчанию: <code>null</code></Text>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
    
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
    </main>
</div>
