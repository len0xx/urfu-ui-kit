<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
    import Card from '$lib/components/Card.svelte'
    import Text from '$lib/components/Text.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import ParameterType from '$lib/components/ParameterType.svelte'

    import CardExample from '$lib/../codes/CardExample'
    import Grid from '$lib/components/Grid.svelte'

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – Card</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Card <a href="#" class="page-link">🔗</a></Heading>
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
        <Heading size={4} className="blue-text">variant <ParameterType value="enum" /></Heading>
        <Text>Вариант заднего фона карточки (белый или серый). Поддерживаются два значения: <code>white</code> и <code>grey</code>. <br />
            Значение по умолчанию: <code>grey</code></Text>
        <Heading size={4} className="blue-text">color <ParameterType value="enum" /></Heading>
        <Text>Изображение градиента (в правом углу карточки). Поддерживаются четыре значения: <code>red-1</code>, <code>red-2</code>, <code>blue-1</code> и <code>blue-2</code>. <br />
            Значение по умолчанию: <code>red-1</code></Text>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
        
        <Heading size={3}>Слоты:</Heading>
        <Heading size={4} className="blue-text">text</Heading>
        <Text>Текст внутри карточки</Text>
        <Heading size={4} className="blue-text">left</Heading>
        <Text>Текст, располагающийся в левой половине подвала карточки</Text>
        <Heading size={4} className="blue-text">right</Heading>
        <Text>Текст, располагающийся в правой половине подвала карточки (по умолчанию синего цвета)</Text>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
    </main>
</div>
