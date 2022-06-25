<script lang="ts">
    import { Code, Heading, Card, Grid, Text, ParameterType } from '$lib/components'
    import GridExample from '$lib/../codes/GridExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Grid</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Grid <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Выстраивайте контент в колонках.<br />
            Компонент возьмёт на себя все задачи по адаптированию контента к ширине экрана
        </Text>
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
        <Heading size={4} color="var(--blue)">xs <ParameterType value="number" /></Heading>
        <Text>Количество колонок на мобильных экранах (до 400 пикселей в ширину). Поддерживаются значения от <code>1</code> до <code>12</code></Text>
        <Heading size={4} color="var(--blue)">s <ParameterType value="number" /></Heading>
        <Text>Количество колонок на маленьких экранах (от 400 до 768 пикселей в ширину). Поддерживаются значения от <code>1</code> до <code>12</code></Text>
        <Heading size={4} color="var(--blue)">m <ParameterType value="number" /></Heading>
        <Text>Количество колонок на средних экранах (от 768 до 1000 пикселей в ширину). Поддерживаются значения от <code>1</code> до <code>12</code></Text>
        <Heading size={4} color="var(--blue)">l <ParameterType value="number" /></Heading>
        <Text>Количество колонок на широких экранах (от 1000 до 1440 пикселей в ширину). Поддерживаются значения от <code>1</code> до <code>12</code></Text>
        <Heading size={4} color="var(--blue)">xl <ParameterType value="number" /></Heading>
        <Text>Количество колонок на самых широких экранах (от 1440 пикселей в ширину). Поддерживаются значения от <code>1</code> до <code>12</code></Text>
        <Heading size={4} color="var(--blue)">gap <ParameterType value="number" /></Heading>
        <Text>Расстояние между колонками и строчками. Поддерживаются значения от <code>1</code> до <code>6</code></Text>
        <Heading size={4} color="var(--blue)">alignItems <ParameterType value="enum" /></Heading>
        <Text>Выравнивание потомков в строке по вертикали. Поддерживаются значения <code>start</code>, <code>center</code>, <code>end</code>, <code>stretch</code></Text>
        <Heading size={4} color="var(--blue)">justifyItems <ParameterType value="enum" /></Heading>
        <Text>Выравнивание колонок по горизонтали. Поддерживаются значения <code>left</code>, <code>center</code>, <code>right</code>, <code>space-between</code>, <code>space-evenly</code>, <code>space-around</code></Text>
        <Heading size={4} color="var(--blue)">alignContent <ParameterType value="enum" /></Heading>
        <Text>Выравнивание колонок по горизонтали. Поддерживаются значения <code>start</code>, <code>center</code>, <code>end</code>, <code>stretch</code></Text>
        <Heading size={4} color="var(--blue)">justifyContent <ParameterType value="enum" /></Heading>
        <Text>Выравнивание потомков в строке. Поддерживаются значения <code>left</code>, <code>center</code>, <code>right</code>, <code>space-between</code>, <code>space-evenly</code>, <code>space-around</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
    </main>
</div>
