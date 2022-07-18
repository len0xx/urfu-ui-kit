<script lang="ts">
    import { Code, Heading, RoundButton, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/../codes/RoundButtonExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – RoundButton</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>RoundButton <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Круглые кнопки с иконкой внутри
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <RoundButton variant="plus" size="L" />
        <RoundButton variant="left" size="L" />
        <RoundButton variant="right" size="L" />
    
        <RoundButton variant="plus" size="M" />
        <RoundButton variant="left" size="M" />
        <RoundButton variant="right" size="M" />
    
        <RoundButton variant="plus" size="S" />
        <RoundButton variant="left" size="S" />
        <RoundButton variant="right" size="S" />
        <br />
        <br />
    
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
    
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">variant <ParameterType value="enum" /></Heading>
        <Text>
            Иконка, отображаемая внутри кнопки.  <br />
            Поддерживаются три стандартных значения: <code>left</code>, <code>right</code> и <code>plus</code>. <br />
            Значение по умолчанию: <code>plus</code>
        </Text>
        <Heading size={4} color="var(--blue)">size <ParameterType value="enum" /></Heading>
        <Text>
            Размер кнопки <br />
            Поддерживаются четыре стандартных значения: <code>S</code>, <code>M</code>, <code>L</code> и <code>XL</code>. <br />
            Значение по умолчанию: <code>M</code>
        </Text>
        <Heading size={4} color="var(--blue)">animate <ParameterType value="boolean" /></Heading>
        <Text>
            Анимация кнопки при нажатии <br />
            Значение по умолчанию: <code>true</code>
        </Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
    
        <Heading size={3} className="underlined-text">Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:focus</Heading>
        <Heading size={4} color="var(--blue)">on:blur</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
    </main>
</div>
