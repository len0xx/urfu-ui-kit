<script lang="ts">
    import { Code, Heading, Tag, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/../codes/HeadingExample'
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
        <Heading size={1} margin={{ top: 0 }}>Heading 1</Heading>
        <Heading size={2} margin={{ top: 0 }}>Heading 2</Heading>
        <Heading size={3} margin={{ top: 0 }}>Heading 3</Heading>
        <Heading size={4} margin={{ top: 0 }}>Heading 4</Heading>
        <Heading size={5} margin={{ top: 0 }}>Heading 5</Heading>
        <Heading size={6} margin={{ top: 0 }}>Heading 6</Heading>
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={CodeExample} />
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
            Поддерживаются любые валидные значения CSS (Например: <code>#0000FF</code>, <code>var(--blue)</code> или <code>magenta</code>) <br />
            Значение по умолчанию: <code>black</code>
        </Text>
        <Heading size={4} color="var(--blue)">margin <ParameterType value="object" /></Heading>
        <Text>
            Объект, описывающий отступы компонента. Имеет следующие свойства: <br />
            <code>x</code> – отступ по горизонтали <br />
            <code>y</code> – отступ по вертикали <br />
            <code>top</code> – отступ сверху <br />
            <code>bottom</code> – отступ снизу <br />
            <code>left</code> – отступ слева <br />
            <code>right</code> – отступ справа <br />
            Все значения могут иметь один из двух типов: <code>string</code> или <code>number</code> <br />
            В случае, если значение одного из свойств имеет тип <code>number</code>, ему будет добавлена единица измерения <code>em</code> <br />
            Пример: <code>margin={ '{{ top: 1, x: \'auto\' }}' }</code> будет преобразовано в <code>margin: 1em auto 0</code>
        </Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
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
