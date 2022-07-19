<script lang="ts">
    import { Code, Heading, Benefit, Grid, Tag, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/../codes/BenefitExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Benefit</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Benefit <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Выносите значимые числа в привлекательные и информативные блоки Benefit
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <Grid m={2} l={3} xl={4} gap={2}>
            <Benefit size="S" num="27" caption="Компонентов" />
            <Benefit size="S" num="2816" caption="Строк кода" />
            <Benefit size="S" num="4" caption="Активных веб-сайта" />
        </Grid>
        <Grid m={2} l={3} xl={4} gap={2}>
            <Benefit size="M" num="27" caption="Компонентов" />
            <Benefit size="M" num="2816" caption="Строк кода" />
            <Benefit size="M" num="4" caption="Активных веб-сайта" />
        </Grid>
        <Grid m={2} l={3} xl={4} gap={2}>
            <Benefit size="L" num="27" caption="Компонентов" />
            <Benefit size="L" num="2816" caption="Строк кода" />
            <Benefit size="L" num="4" caption="Активных веб-сайта" />
        </Grid>
        
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
        
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">num <ParameterType value="string" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <Text>Числовое значение, отображаемое в верхней части</Text>
        <Heading size={4} color="var(--blue)">caption <ParameterType value="string" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <Text>Подпись, отображаемая в нижней части</Text>
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
