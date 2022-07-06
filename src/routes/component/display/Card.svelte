<script lang="ts">
    import { Code, Heading, Card, Text, ParameterType } from '$lib/components'
    import CardExample from '$lib/../codes/CardExample'
    import Grid from '$lib/components/Grid.svelte'
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
        <br />
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
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={CardExample} />
        <br />
        
        <Heading size={3}>Параметры:</Heading>
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
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
        
        <Heading size={3}>Слоты:</Heading>
        <Heading size={4} color="var(--blue)">text</Heading>
        <Text>Текст внутри карточки</Text>
        <Heading size={4} color="var(--blue)">left</Heading>
        <Text>Текст, располагающийся в левой половине подвала карточки</Text>
        <Heading size={4} color="var(--blue)">right</Heading>
        <Text>Текст, располагающийся в правой половине подвала карточки (по умолчанию синего цвета)</Text>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
    </main>
</div>
