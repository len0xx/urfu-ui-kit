<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import ParameterType from '$lib/components/ParameterType.svelte'
    import Tag from '$lib/components/Tag.svelte'

    import BenefitExample from '$lib/../codes/BenefitExample'
    import Grid from '$lib/components/Grid.svelte'
    import Benefit from '$lib/components/Benefit.svelte'
    
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
        <Heading size={1}>Benefit <a href="#" class="page-link">🔗</a></Heading>
        <p class="medium">
            Выносите значимые числа в привлекательные и информативные блоки Benefit
        </p>
        <Grid s={1} m={2} l={3} xl={4} gap={2}>
            <Benefit num="20" caption="Компонентов" />
            <Benefit num="2406" caption="Строк кода" />
            <Benefit num="5" caption="Активных веб-сайтов" />
        </Grid>
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={BenefitExample} />
        <br />
        
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">num <ParameterType value="string" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <p>Числовое значение, отображаемое в верхней части</p>
        <Heading size={4} className="blue-text">caption <ParameterType value="string" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <p>Подпись, отображаемая в нижней части</p>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <p>Аналог стандартного атрибута class</p>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
    </main>
</div>