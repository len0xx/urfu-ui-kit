<script lang="ts">
    import { Code, Heading, Grid, Window, Footer, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/codes/FooterExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Footer</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Footer <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
			Подвал, который обычно размещается в конце страниц или других элементов <br>
			(Компонент на основе <code>Section</code>)
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <Window placeholder contentAmount={5} padding={{ bottom: 0 }}>
            <Footer slot="footer" align="center" contentWidth="100%" padding={{ x: 1 }}>
                <Grid m={3} s={1}>
                    <Heading size={3}>This is a Footer</Heading>
                    <Heading size={3}>Footer © 2022</Heading>
                    <Heading size={3}>urfu-ui.len0xx.ru</Heading>
                </Grid>
            </Footer>
        </Window>
        <br />
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
        <Text>Аналог стандартного атрибута <code>class</code></Text>
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
