<script lang="ts">
    import { onMount } from 'svelte'
    import { Code, Heading, Switch, Text, Preloader, ParameterType } from '$lib/components'

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
        <Heading size={1}>Switch <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Переключатель с двумя состояниями и опциональными подписями с каждой стороны
        </Text>
        <br />
        
        <Switch on:change={ handleSwitch } left="False" right="True" />
        <br />
        <Text>Текущее состояние: { currentState }</Text>
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={SwitchExample} />
        <br />
        
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">left <ParameterType value="string" /></Heading>
        <Text>Текст с левой стороны от переключателя</Text>
        <Heading size={4} className="blue-text">right <ParameterType value="string" /></Heading>
        <Text>Текст с правой стороны от переключателя</Text>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:change</Heading>
        <Text>Передаваемый параметр: <code>&lbrace; state: boolean &rbrace;</code></Text>
        <Heading size={4} className="blue-text">on:focus</Heading>
        <Heading size={4} className="blue-text">on:blur</Heading>
        <Heading size={4} className="blue-text">on:mouseover</Heading>
        <Heading size={4} className="blue-text">on:mouseleave</Heading>
        <Heading size={4} className="blue-text">on:mouseup</Heading>
        <Heading size={4} className="blue-text">on:mousedown</Heading>
    </main>
</div>
