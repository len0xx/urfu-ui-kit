<script lang="ts">
    import { Code, Heading, Rainbow, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/codes/RainbowExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Rainbow</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Rainbow <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Декоративный компонент, с градиентным задним фоном
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <Rainbow size="S" />
        <br />
        <Rainbow size="M" />
        <br />
        <Rainbow size="L" />
        <br />
    
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
    
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">size <ParameterType value="enum" /></Heading>
        <Text>
            Размер компонента. <br />
            Поддерживаются три значения: <code>S</code>, <code>M</code> и <code>L</code>. <br />
            Значение по умолчанию: <code>M</code>
        </Text>
        <Heading size={4} color="var(--blue)">fixed <ParameterType value="enum" /></Heading>
        <Text>
            Опциональный атрибут для привязки компонента к верхнему или нижнему краю родительского элемента. <br /> 
            Поддерживаются два значения: <code>top</code> и <code>bottom</code>. <br />
            Значение по умолчанию: <code>null</code>
        </Text>
        <Heading size={4} color="var(--blue)">width <ParameterType value="string" /></Heading>
        <Text>
            Ширина компонента. <br /> 
            Поддерживаются любые валидные значения CSS (Пример: <code>50px</code>, <code>5em</code>, <code>12rem</code>, <code>30%</code>) <br />
            Значение по умолчанию: <code>100%</code>
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
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
    </main>
</div>
