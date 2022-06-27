<script lang="ts">
    import { Code, Heading, Rainbow, Text, ParameterType } from '$lib/components'
    import RainbowExample from '$lib/../codes/RainbowExample'
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
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
    
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
    </main>
</div>
