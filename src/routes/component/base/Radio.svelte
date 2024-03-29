<script lang="ts">
    import { Code, Heading, Radio, Text, Tag, ParameterType } from '$lib/components'
    import CodeExample from '$lib/codes/RadioExample'

    let group: string = undefined
</script>

<svelte:head>
    <title>УрФУ UI Kit – Radio</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Radio <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Чекбоксы с удобным синтаксисом и возможностью множественного выбора
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <Radio name="test" bind:group value="hello">
            Click me! (hello)
        </Radio>
        <Radio name="test" bind:group value="bye">
            Click me! (bye)
        </Radio>
        <br />
        Selected: { group || '' }
        <br />
        <br />
        
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
        
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">name <ParameterType value="string" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <Text>Аналог стандартного атрибута <code>name</code></Text>
        <Heading size={4} color="var(--blue)">value <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>value</code></Text>
        <Heading size={4} color="var(--blue)">required <ParameterType value="boolean" /></Heading>
        <Text>
            Аналог стандартного атрибута <code>required</code> <br />
            Значение по умолчанию: <code>false</code>
        </Text>
        <Heading size={4} color="var(--blue)">disabled <ParameterType value="boolean" /></Heading>
        <Text>
            Аналог стандартного атрибута <code>disabled</code> <br />
            Значение по умолчанию: <code>false</code>
        </Text>
        <Heading size={4} color="var(--blue)">group <ParameterType value="object" /></Heading>
        <Text>
            Параметр для объединения нескольких компонентов <code>Radio</code> в группу
        </Text>
        <Heading size={4} color="var(--blue)">inline <ParameterType value="boolean" /></Heading>
        <Text>
            Если этот параметр установлен (имеет значение <code>true</code>), то к компоненту будет применено свойство <code>display: inline-block</code> <br />
            Иначе – <code>display: block</code> <br />
            Значение по умолчанию: <code>false</code>
        </Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>class</code></Text>
        <br />
        
        <Heading size={3} className="underlined-text">Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:focus</Heading>
        <Heading size={4} color="var(--blue)">on:blur</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
        <Heading size={4} color="var(--blue)">on:input</Heading>
        <Heading size={4} color="var(--blue)">on:change</Heading>
        <br />
    </main>
</div>
