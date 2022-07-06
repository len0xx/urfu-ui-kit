<script lang="ts">
    import { Code, Heading, Tag, Grid, Partner, Text, ParameterType } from '$lib/components'
    import PartnerExample from '$lib/../codes/PartnerExample'

    let partners = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
</script>

<svelte:head>
    <title>УрФУ UI Kit – Partner</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Partner <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Компонент для отображения логотипов партнеров с опциональной подписью
        </Text>
        <br />
        <Grid m={3} l={4} xl={6} gap={2}>
            { #each partners as _ }
                <Partner src="/img/urfu-blue.svg" caption="УрФУ" />
            { /each }
        </Grid>
        <br />
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={PartnerExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} color="var(--blue)">src <ParameterType value="string" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <Text>Ссылка на изображение</Text>
        <Heading size={4} color="var(--blue)">caption <ParameterType value="string" /></Heading>
        <Text>Подпись (опциональная)</Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
    
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
    </main>
</div>
