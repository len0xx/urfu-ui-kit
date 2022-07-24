<script lang="ts">
    import { Code, Heading, Tag, Link, Document, Grid, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/codes/DocumentExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Document</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Document <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Компонент для удобного отображения списка документов
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <Grid m={2} ratio="1:2" gap={2}>
            <Heading size={2} margin={{ top: 0 }}>Скачайте документацию по компонентам</Heading>
            <div>
                <Document filename="UrFU UI Kit Svelte" extension="pdf" />
                <Document filename="SvelteKit Manual" extension="docx" />
                <Document filename="Svelte components list" extension="xlsx" />
            </div>
        </Grid>
        <br />
        <br />
        
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
        
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">filename <ParameterType value="string" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <Text>Название файла</Text>
        <Heading size={4} color="var(--blue)">link <ParameterType value="string" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <Text>Ссылка для скачивания файла</Text>
        <Heading size={4} color="var(--blue)">extension <ParameterType value="string" /></Heading>
        <Text>Расширение файла</Text>
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
        <Text>Аналог стандартного атрибута class</Text>
        <br />
        
        <Heading size={3} className="underlined-text">Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
    </main>
</div>
