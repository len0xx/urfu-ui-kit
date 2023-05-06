<script lang="ts">
    import { Code, Heading, Section, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/codes/SectionExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Section</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Section <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Кнопки являются неотъемлимой частью современных веб-приложений
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <Section align="left" contentWidth="800px">
            <Heading align="left" size={2}>Пример слева</Heading>
        </Section>
        <Section align="center" contentWidth="800px">
            <Heading align="center" size={2}>Пример посередине</Heading>
        </Section>
        <Section align="right" contentWidth="800px">
            <Heading align="right" size={2}>Пример справа</Heading>
        </Section>
        <br />
    
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
        
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">padding <ParameterType value="object" /></Heading>
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
            Пример: <code>padding={ '{{ top: 1, x: \'auto\' }}' }</code> будет преобразовано в <code>padding: 1em auto 0</code>
        </Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <Heading size={4} color="var(--blue)">contentWidth <ParameterType value="string" /></Heading>
        <Text>Максимальная ширина, которую может занимать компонент</Text>
        <Heading size={4} color="var(--blue)">align <ParameterType value="enum" /></Heading>
        <Text>
            Выравнивание контента внутри компонента <br />
            Поддерживаются 5 значений: <code>unset</code>, <code>initial</code>, <code>left</code>, <code>center</code> и <code>right</code> <br />
            Значение по умолчанию: <code>center</code>
        </Text>
    </main>
</div>
