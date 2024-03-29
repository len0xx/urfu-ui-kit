<script lang="ts">
    import { Code, Link, Heading, Div, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/codes/DivExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Div</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Div <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Универсальный блок для упрощения вёрстки
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <Div align="center" margin={{ y: 1 }} padding={{ y: 1, x: 1 }} className="bordered-div">
            Текст внутри <code>Div</code>
        </Div>
        <br />
    
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
    
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">color <ParameterType value="string" /></Heading>
        <Text>
            Цвет текста в компоненте. <br />
            Поддерживаются любые валидные значения CSS (Например: <code>#0000FF</code>, <code>var(--blue)</code> или <code>magenta</code>) <br />
            Значение по умолчанию: <code>black</code>
        </Text>
        <Heading size={4} color="var(--blue)">margin <ParameterType value="object" /></Heading>
        <Text>
            Объект, описывающий внешние отступы компонента. Имеет следующие свойства: <br />
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
        <Heading size={4} color="var(--blue)">padding <ParameterType value="object" /></Heading>
        <Text>
            Объект, описывающий внутренние отступы компонента. Имеет следующие свойства: <br />
            <code>x</code> – отступ по горизонтали <br />
            <code>y</code> – отступ по вертикали <br />
            <code>top</code> – отступ сверху <br />
            <code>bottom</code> – отступ снизу <br />
            <code>left</code> – отступ слева <br />
            <code>right</code> – отступ справа <br />
            Все значения могут иметь один из двух типов: <code>string</code> или <code>number</code> <br />
            В случае, если значение одного из свойств имеет тип <code>number</code>, ему будет добавлена единица измерения <code>em</code> <br />
            Пример: <code>padding={ '{{ top: 1, x: \'auto\' }}' }</code> будет преобразовано в <code>padding: 1em auto 0</code>
        </Text>
        <Heading size={4} color="var(--blue)">align <ParameterType value="enum" /></Heading>
        <Text>
            Выравнивание текста внутри компонента <br />
            Поддерживаются 5 значений: <code>unset</code>, <code>initial</code>, <code>left</code>, <code>center</code> и <code>right</code> <br />
            Значение по умолчанию: <code>unset</code>
        </Text>
        <Heading size={4} color="var(--blue)">inline <ParameterType value="boolean" /></Heading>
        <Text>
            Если этот параметр установлен (имеет значение <code>true</code>), то к компоненту будет применено свойство <code>display: inline-block</code> <br />
            Иначе – <code>display: block</code> <br />
            Значение по умолчанию: <code>false</code>
        </Text>
        <Heading size={4} color="var(--blue)">transition <ParameterType value="object" /></Heading>
        <Text>
            Объект, описывающий переходы для компонента. Имеет следующие свойства: <br />
            <code>in</code> – переход при монтировании компонента <br />
            <code>out</code> – переход при демонтировании компонента <br /> <br />
            Каждое из этих свойств может содержать в себе объект со следующими свойствами: <br />
            <code>func</code> – функция, выполняющая переход от начального состояния к конечному <br />
            <code>options</code> – опциональный объект с опциональными свойствами <code>delay</code>, <code>duration</code> и <code>easing</code> <br />
            Подробнее: <Link href="https://svelte.dev/docs#template-syntax-element-directives-transition-fn" target="_BLANK">Документация по Svelte</Link>
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

<style>
    :global(.bordered-div) {
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
</style>
