<script lang="ts">
    import { Text, Link, Heading, Tag, Grid, Card, Warning, RoundButton } from '$lib/components'
    import components from '$lib/components-list'
    import { blur } from 'svelte/transition'

    let expanded = false
</script>

<svelte:head>
    <title>УрФУ UI Kit</title>
</svelte:head>

<div class="content">
    <main>
        <Heading size={1}>УрФУ UI Kit <Tag>beta 0.9.3</Tag></Heading>
        <Text className="medium">
            Расширяемая библиотека Svelte компонентов для упрощённого построения современных веб-приложений Уральского федерального университета
        </Text>
        <a href="https://svelte.dev" target="_BLANK"><img src="/img/svelte.svg" width="48" height="48" alt="Svelte Logo" title="Svelte"></a>
        <a href="https://typescriptlang.org" target="_BLANK"><img style:margin-left="20px" src="/img/typescript.svg" height="48" alt="TypeScript Logo" title="TypeScript"></a>
        <br /><br />
        <Warning>
            <b>Библиотека находится в стадии beta</b>. <br /><br /> В связи с этим, возможны некоторые ошибки в отображении компонентов. А также, в финальной версии библиотеки некоторые компоненты могут иметь отличное название самого компонента и/или его параметров от тех, что имеются на данный момент. 
        </Warning>
        <br />
        <Heading size={3}>Примеры веб-сайтов, построенных с помощью данной библиотеки:</Heading>
        <ul>
            <li><Link variant="hover" target="_BLANK" lineWidth={ 2 } href="https://inmt-priem.urfu.ru">Приёмная кампания Института новых материалов и технологий</Link></li>
            <li><Link variant="hover" target="_BLANK" lineWidth={ 2 } href="https://masters-hti.urfu.ru">Магистратура Химико-технологического института</Link></li>
            <li><Link variant="hover" target="_BLANK" lineWidth={ 2 } href="https://masters-enin.urfu.ru">Магистратура Уральского энергетического института</Link></li>
            <li><Link variant="hover" target="_BLANK" lineWidth={ 2 } href="https://diplom.urfu.ru">Выпускной 2022: ВСЕМДИПЛОМЫ</Link></li>
        </ul>
        <br />
        <div>
            <Grid m={1} l={2} xl={3}>
                { #each components.filter((_, i) => expanded || i < 9) as component, i }
                    <a href={ '/component/' + component.type + '/' + component.name } transition:blur="{{ duration: 200 }}">
                        <Card variant="white" color={ (i % 3 == 0) ? 'red-2' : ((i % 3 == 1) ? 'red-1' : 'blue-2') }>
                            <svelte:fragment slot="title">{ component.name }</svelte:fragment>
                            <svelte:fragment slot="text">{ component.text }</svelte:fragment>
                            <svelte:fragment slot="right">Открыть</svelte:fragment>
                        </Card>
                    </a>
                { /each }
            </Grid>
            { #if !expanded }
                <br />
                <div class="align-center">
                    <RoundButton variant="plus" size="L" on:click={() => expanded = true} />
                </div>
            { /if }
        </div>
        <br />
        <br />
    </main>
</div>
