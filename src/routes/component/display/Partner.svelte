<script lang="ts">
    import { onMount } from 'svelte'
    import Tag from '$lib/components/Tag.svelte'
    import Text from '$lib/components/Text.svelte'
    import Grid from '$lib/components/Grid.svelte'
    import Code from '$lib/components/Code.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Partner from '$lib/components/Partner.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import ParameterType from '$lib/components/ParameterType.svelte'

    import PartnerExample from '$lib/../codes/PartnerExample'

    let partners = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – Partner</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Partner <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Компонент для отображения логотипов партнеров с опциональной подписью
        </Text>
        <br />
        <Grid m={3} l={4} xl={6} gap={2}>
            { #each partners as partner }
                <Partner src="/img/urfu-blue.svg" caption="УрФУ" />
            { /each }
        </Grid>
        <br />
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={PartnerExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">src <ParameterType value="string" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <Text>Ссылка на изображение</Text>
        <Heading size={4} className="blue-text">caption <ParameterType value="string" /></Heading>
        <Text>Подпись (опциональная)</Text>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
    
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
    </main>
</div>
