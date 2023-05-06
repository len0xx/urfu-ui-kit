<script lang="ts">
    import { Code, Heading, Slide, Slider, Link, RoundButton, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/codes/SliderExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Slide</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={ 1 }>Slide <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Отдельный слайд с текстовым блоком и изображением. <br />
            Используется в компоненте <Link href="/component/display/Slider">Slider</Link>.
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
    </main>
</div>

<Slider let:showPrevPage let:showNextPage background="white" duration={5} autoplay={true}>
    <Slide img="/img/slide1-img.jpg">
        <Heading size={ 2 } color="var(--blue)">Стань инженером будущего в Институте новых материалов и технологий УрФУ</Heading>
        <Text className="heading-3">Актуальная информация о поступлении в университет в 2022 году:</Text>
        <Link variant="interactive" href="/bachelor" lineWidth={ 2 }>Бакалавриат и специалитет</Link><br /><br />
        <Link variant="interactive" href="/master" lineWidth={ 2 }>Магистратура</Link><br />
        <svelte:fragment slot="buttons">
            <RoundButton size="M" variant="left" on:click={ showPrevPage } />
            <RoundButton size="M" variant="right" on:click={ showNextPage } />
        </svelte:fragment>
    </Slide>
    <Slide img="/img/slide2-img.jpg">
        <Heading size={ 2 } color="var(--blue)">Стань инженером будущего в Институте новых материалов и технологий УрФУ</Heading>
        <Text className="heading-3">Актуальная информация о поступлении в университет в 2022 году:</Text>
        <Link variant="interactive" href="/bachelor" lineWidth={ 2 }>Бакалавриат и специалитет</Link><br /><br />
        <Link variant="interactive" href="/master" lineWidth={ 2 }>Магистратура</Link><br />
        <svelte:fragment slot="buttons">
            <RoundButton size="M" variant="left" on:click={ showPrevPage } />
            <RoundButton size="M" variant="right" on:click={ showNextPage } />
        </svelte:fragment>
    </Slide>
</Slider>
<br />
<br />

<div class="content">
    <main>
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
    
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">img <ParameterType value="string" /></Heading>
        <Text>Ссылка на изображение в правой части</Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>class</code></Text>
    </main>
</div>
