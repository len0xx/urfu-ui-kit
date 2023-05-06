<script lang="ts">
    import { Code, Heading, VideoCard, Link, Text, ParameterType, Grid } from '$lib/components'
    import CodeExample from '$lib/codes/VideoCardExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – VideoCard</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>VideoCard <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Карточка с видео, которое воспроизводится по нажатию на него
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <Grid m={4} className="mobile-horizontal-scroll">
            { #each [0, 1, 2, 3] as _ }
                <VideoCard src="/video/first.mp4" />
            { /each }
        </Grid>
        <br />
    
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
    
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">name <ParameterType value="string" /></Heading>
        <Text>Отображаемое имя</Text>
        <Heading size={4} color="var(--blue)">src <ParameterType value="string" /></Heading>
        <Text>Ссылка на видео</Text>
        <Heading size={4} color="var(--blue)">position <ParameterType value="string" /></Heading>
        <Text>Подпись первого порядка</Text>
        <Heading size={4} color="var(--blue)">description <ParameterType value="string" /></Heading>
        <Text>Подпись второго порядка</Text>
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
        <Heading size={4} color="var(--blue)">on:focus</Heading>
        <Heading size={4} color="var(--blue)">on:blur</Heading>
        <Heading size={4} color="var(--blue)">on:play</Heading>
        <Heading size={4} color="var(--blue)">on:pause</Heading>
    </main>
</div>
