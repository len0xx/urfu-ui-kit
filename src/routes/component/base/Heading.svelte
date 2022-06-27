<script lang="ts">
    import { Code, Heading, Tag, Text, ParameterType } from '$lib/components'
    import HeadingExample from '$lib/../codes/HeadingExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Заголовки</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Heading <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Аналог стандратных тегов h1 - h6 в HTML
        </Text>
        <br />
        <Heading size={1} marginTop={0}>Heading 1</Heading>
        <Heading size={2} marginTop={0}>Heading 2</Heading>
        <Heading size={3} marginTop={0}>Heading 3</Heading>
        <Heading size={4} marginTop={0}>Heading 4</Heading>
        <Heading size={5} marginTop={0}>Heading 5</Heading>
        <Heading size={6} marginTop={0}>Heading 6</Heading>
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={HeadingExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} color="var(--blue)">size <ParameterType value="enum" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <Text>
            Размер заголовка. <br />
            Поддерживаются значения от <code>1</code> до <code>6</code>
        </Text>
        <Heading size={4} color="var(--blue)">color <ParameterType value="string" /></Heading>
        <Text>
            Цвет текста в компоненте. <br />
            Поддерживаются любые валидные значения CSS (Например: <code>#0000FF</code>, <code>var(--blue)</code> или <code>magenta</code>) <br /> Значение по умолчанию: <code>black</code>
        </Text>
        <Heading size={4} color="var(--blue)">marginX <ParameterType value="number" /></Heading>
        <Text>Отступ по горизонтали. (Устанавливается в <code>em</code>)</Text>
        <Heading size={4} color="var(--blue)">marginY <ParameterType value="number" /></Heading>
        <Text>Отступ по вертикали. (Устанавливается в <code>em</code>)</Text>
        <Heading size={4} color="var(--blue)">marginTop <ParameterType value="number" /></Heading>
        <Text>Отступ сверху. (Устанавливается в <code>em</code>)</Text>
        <Heading size={4} color="var(--blue)">marginBottom <ParameterType value="number" /></Heading>
        <Text>Отступ снизу. (Устанавливается в <code>em</code>)</Text>
        <Heading size={4} color="var(--blue)">marginLeft <ParameterType value="number" /></Heading>
        <Text>Отступ слева. (Устанавливается в <code>em</code>)</Text>
        <Heading size={4} color="var(--blue)">marginRight <ParameterType value="number" /></Heading>
        <Text>Отступ справа. (Устанавливается в <code>em</code>)</Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>class</code></Text>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:focus</Heading>
        <Heading size={4} color="var(--blue)">on:blur</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
    </main>
</div>
