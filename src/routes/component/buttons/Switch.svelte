<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
    import Switch from '$lib/components/Switch.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import ParameterType from '$lib/components/ParameterType.svelte'

    import SwitchExample from '$lib/../codes/SwitchExample'

    let loaded = false
    let showPreloader = true
    let currentState = false
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)

    const handleSwitch = (e: CustomEvent) => {
        const { state } = e.detail
        currentState = state
    }
</script>

<svelte:head>
    <title>УрФУ UI Kit – Switch</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Switch <a href="#" class="page-link">🔗</a></Heading>
        <p class="medium">
            Переключатель с двумя состояниями и опциональными подписями с каждой стороны
        </p>
        <br />
        
        <Switch on:change={ handleSwitch } left="False" right="True" />
        <br />
        <p>Текущее состояние: { currentState }</p>
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={SwitchExample} />
        <br />
        
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">left <ParameterType value="string" /></Heading>
        <p>Текст с левой стороны от переключателя</p>
        <Heading size={4} className="blue-text">right <ParameterType value="string" /></Heading>
        <p>Текст с правой стороны от переключателя</p>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <p>Аналог стандартного атрибута class</p>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:change</Heading>
        <p>Передаваемый параметр: <code>&lbrace; state: boolean &rbrace;</code></p>
        <Heading size={4} className="blue-text">on:focus</Heading>
        <Heading size={4} className="blue-text">on:mouseover</Heading>
        <Heading size={4} className="blue-text">on:mouseleave</Heading>
        <Heading size={4} className="blue-text">on:mouseup</Heading>
        <Heading size={4} className="blue-text">on:mousedown</Heading>
    </main>
</div>
