<script lang="ts">
    import { Code, Heading, Link, Card, Grid, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/codes/CardExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Card</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Card <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Карточки – один из самых популярных способов представления контента в интерфейсах
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <Grid m={2} l={3}>
            <a target="_BLANK" href="https://svelte.dev">
                <Card variant="white" color="red-1">
                    <svelte:fragment slot="title">Svelte</svelte:fragment>
                    <svelte:fragment slot="text">Svelte is a radical new approach to building user interfaces</svelte:fragment>
                    <svelte:fragment slot="right">Перейти</svelte:fragment>
                </Card>
            </a>
            <a target="_BLANK" href="https://reactjs.org/">
                <Card variant="white" color="blue-2">
                    <svelte:fragment slot="title">React</svelte:fragment>
                    <svelte:fragment slot="text">A JavaScript library for building user interfaces</svelte:fragment>
                    <svelte:fragment slot="right">Перейти</svelte:fragment>
                </Card>
            </a>
            <a target="_BLANK" href="https://vuejs.org">
                <Card variant="white" color="red-2">
                    <svelte:fragment slot="title">Vue</svelte:fragment>
                    <svelte:fragment slot="text">The Progressive JavaScript Framework</svelte:fragment>
                    <svelte:fragment slot="right">Перейти</svelte:fragment>
                </Card>
            </a>
        </Grid>
        <br />
        
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
        
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">variant <ParameterType value="enum" /></Heading>
        <Text>
            Вариант заднего фона карточки (белый или серый). <br />
            Поддерживаются два значения: <code>white</code> и <code>grey</code>. <br />
            Значение по умолчанию: <code>grey</code>
        </Text>
        <Heading size={4} color="var(--blue)">color <ParameterType value="enum" /></Heading>
        <Text>
            Изображение градиента (в правом углу карточки). <br />
            Поддерживаются четыре значения: <code>red-1</code>, <code>red-2</code>, <code>blue-1</code> и <code>blue-2</code>. <br />
            Значение по умолчанию: <code>red-1</code>
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
        <Text>Аналог стандартного атрибута class</Text>
        <br />
        
        <Heading size={3} className="underlined-text">Слоты:</Heading>
        <Heading size={4} color="var(--blue)">title</Heading>
        <Text>Заголовок карточки</Text>
        <Heading size={4} color="var(--blue)">text</Heading>
        <Text>Текст внутри карточки</Text>
        <Heading size={4} color="var(--blue)">left</Heading>
        <Text>Текст, располагающийся в левой половине подвала карточки</Text>
        <Heading size={4} color="var(--blue)">right</Heading>
        <Text>Текст, располагающийся в правой половине подвала карточки (по умолчанию синего цвета)</Text>
        <br />
        
        <Heading size={3} className="underlined-text">Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
    </main>
</div>
