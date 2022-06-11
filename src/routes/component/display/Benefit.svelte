<script lang="ts">
    import { onMount } from 'svelte'
    import { Code, Heading, Benefit, Grid, Tag, Text, Preloader, ParameterType } from '$lib/components'

    import BenefitExample from '$lib/../codes/BenefitExample'
    
    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – Benefit</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Benefit <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Выносите значимые числа в привлекательные и информативные блоки Benefit
        </Text>
        <Grid s={1} m={2} l={3} xl={4} gap={2}>
            <Benefit size="S" num="28" caption="Компонентов" />
            <Benefit size="S" num="2406" caption="Строк кода" />
            <Benefit size="S" num="5" caption="Активных веб-сайтов" />
        </Grid>
        <Grid s={1} m={2} l={3} xl={4} gap={2}>
            <Benefit size="M" num="28" caption="Компонентов" />
            <Benefit size="M" num="2406" caption="Строк кода" />
            <Benefit size="M" num="5" caption="Активных веб-сайтов" />
        </Grid>
        <Grid s={1} m={2} l={3} xl={4} gap={2}>
            <Benefit size="L" num="28" caption="Компонентов" />
            <Benefit size="L" num="2406" caption="Строк кода" />
            <Benefit size="L" num="5" caption="Активных веб-сайтов" />
        </Grid>
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={BenefitExample} />
        <br />
        
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">num <ParameterType value="string" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <Text>Числовое значение, отображаемое в верхней части</Text>
        <Heading size={4} className="blue-text">caption <ParameterType value="string" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <Text>Подпись, отображаемая в нижней части</Text>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
        <Heading size={4} className="blue-text">on:mouseover</Heading>
        <Heading size={4} className="blue-text">on:mouseleave</Heading>
        <Heading size={4} className="blue-text">on:mouseup</Heading>
        <Heading size={4} className="blue-text">on:mousedown</Heading>
    </main>
</div>
