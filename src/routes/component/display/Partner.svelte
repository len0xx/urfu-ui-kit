<script lang="ts">
    import { Code, Heading, Tag, Grid, Link, Partner, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/codes/PartnerExample'

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
        <Heading size={3} className="underlined-text" margin={{ top: 1.5, bottom: 1 }}>Пример использования:</Heading>
        <Grid m={3} l={4} xl={6} gap={2}>
            { #each partners as _ }
                <Partner src="/img/urfu-blue.svg" caption="УрФУ" />
            { /each }
        </Grid>
        <br />
    
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
    
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">src <ParameterType value="string" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <Text>Ссылка на изображение</Text>
        <Heading size={4} color="var(--blue)">caption <ParameterType value="string" /></Heading>
        <Text>Подпись (опциональная)</Text>
        <Heading size={4} color="var(--blue)">transition <ParameterType value="object" /></Heading>
        <Text>
            Объект, описывающий переходы для компонента. Имеет следующие свойства: <br />
            <code>in</code> – переход при монтировании компонента <br />
            <code>out</code> – переход при демонтировании компонента <br /> <br />
            Каждое из этих свойств может содержать в себе объект со следующими свойствами: <br />
            <code>func</code> – функция, выполняющая переход от начального состояния к конечному <br />
            <code>options</code> – опциональный объект с опциональными свойствами <code>delay</code>, <code>duration</code> и <code>easing</code> <br />
            Подробнее: <Link href="https://svelte.dev/docs#template-syntax-element-directives-transition-fn" target="_BLANK">Документация по Svelte</Link>
        </Text>
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
