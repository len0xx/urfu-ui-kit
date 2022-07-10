<script lang="ts">
    import { Code, Heading, Switch, Text, ParameterType } from '$lib/components'
    import SwitchExample from '$lib/../codes/SwitchExample'

    let currentValue = false
</script>

<svelte:head>
    <title>УрФУ UI Kit – Switch</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Switch <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Переключатель с двумя состояниями и опциональными подписями с каждой стороны
        </Text>
        <br />
        
        <Switch bind:value={ currentValue } left="False" right="True" />
        <br />
        <Text>Текущее состояние: { currentValue }</Text>
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={SwitchExample} />
        <br />
        
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} color="var(--blue)">left <ParameterType value="string" /></Heading>
        <Text>Текст с левой стороны от переключателя</Text>
        <Heading size={4} color="var(--blue)">right <ParameterType value="string" /></Heading>
        <Text>Текст с правой стороны от переключателя</Text>
        <Heading size={4} color="var(--blue)">value <ParameterType value="boolean" /></Heading>
        <Text>Состояние переключателя</Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:change</Heading>
        <Text>Передаваемый параметр: <code>&lbrace; value: boolean &rbrace;</code></Text>
        <Heading size={4} color="var(--blue)">on:focus</Heading>
        <Heading size={4} color="var(--blue)">on:blur</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
    </main>
</div>
