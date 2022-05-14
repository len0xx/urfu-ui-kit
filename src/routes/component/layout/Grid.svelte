<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
    import Card from '$lib/components/Card.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Grid from '$lib/components/Grid.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import ParameterType from '$lib/components/ParameterType.svelte'

    import GridExample from '$lib/../codes/GridExample'

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – Grid</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Grid <a href="#" class="page-link">🔗</a></Heading>
        <p class="medium">
            Выстраивайте контент в колонках.<br />
            Компонент возьмёт на себя все задачи по адаптированию контента к ширине экрана
        </p>
        <br />
        <Grid s={1} m={2} l={3} xl={4} gap={2}>
            <Card variant="white" color="blue-2">
                <svelte:fragment slot="title">Swift</svelte:fragment>
                <svelte:fragment slot="right">Перейти</svelte:fragment>
            </Card>
            <Card variant="white" color="red-1">
                <svelte:fragment slot="title">JavaScript</svelte:fragment>
                <svelte:fragment slot="right">Перейти</svelte:fragment>
            </Card>
            <Card variant="white" color="red-2">
                <svelte:fragment slot="title">C++</svelte:fragment>
                <svelte:fragment slot="right">Перейти</svelte:fragment>
            </Card>
            <Card variant="white" color="blue-1">
                <svelte:fragment slot="title">Go</svelte:fragment>
                <svelte:fragment slot="right">Перейти</svelte:fragment>
            </Card>
        </Grid>
        <br />
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={GridExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">xs <ParameterType value="number" /></Heading>
        <p>Количество колонок на мобильных экранах (до 400 пикселей в ширину). Поддерживаются значения от <code>1</code> до <code>12</code></p>
        <Heading size={4} className="blue-text">s <ParameterType value="number" /></Heading>
        <p>Количество колонок на маленьких экранах (от 400 до 768 пикселей в ширину). Поддерживаются значения от <code>1</code> до <code>12</code></p>
        <Heading size={4} className="blue-text">m <ParameterType value="number" /></Heading>
        <p>Количество колонок на средних экранах (от 768 до 1000 пикселей в ширину). Поддерживаются значения от <code>1</code> до <code>12</code></p>
        <Heading size={4} className="blue-text">l <ParameterType value="number" /></Heading>
        <p>Количество колонок на широких экранах (от 1000 до 1440 пикселей в ширину). Поддерживаются значения от <code>1</code> до <code>12</code></p>
        <Heading size={4} className="blue-text">xl <ParameterType value="number" /></Heading>
        <p>Количество колонок на самых широких экранах (от 1440 пикселей в ширину). Поддерживаются значения от <code>1</code> до <code>12</code></p>
        <Heading size={4} className="blue-text">gap <ParameterType value="number" /></Heading>
        <p>Расстояние между колонками и строчками. Поддерживаются значения от <code>1</code> до <code>6</code></p>
        <Heading size={4} className="blue-text">alignItems <ParameterType value="enum" /></Heading>
        <p>Выравнивание потомков в строке по вертикали. Поддерживаются значения <code>start</code>, <code>center</code>, <code>end</code>, <code>stretch</code></p>
        <Heading size={4} className="blue-text">justifyItems <ParameterType value="enum" /></Heading>
        <p>Выравнивание колонок по горизонтали. Поддерживаются значения <code>left</code>, <code>center</code>, <code>right</code>, <code>space-between</code>, <code>space-evenly</code>, <code>space-around</code></p>
        <Heading size={4} className="blue-text">alignContent <ParameterType value="enum" /></Heading>
        <p>Выравнивание колонок по горизонтали. Поддерживаются значения <code>start</code>, <code>center</code>, <code>end</code>, <code>stretch</code></p>
        <Heading size={4} className="blue-text">justifyContent <ParameterType value="enum" /></Heading>
        <p>Выравнивание потомков в строке. Поддерживаются значения <code>left</code>, <code>center</code>, <code>right</code>, <code>space-between</code>, <code>space-evenly</code>, <code>space-around</code></p>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <p>Аналог стандартного атрибута class</p>
    </main>
</div>