<script lang="ts">
    import { onMount } from 'svelte'
    import { Code, Heading, Slide, Slider, Link, RoundButton, Text, Preloader, ParameterType } from '$lib/components'

    import SliderExample from '$lib/../codes/SliderExample'

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – Slide</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={ 1 }>Slide <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Отдельный слайд с текстовым блоком и изображением. <br />
            Используется в компоненте <Link href="/component/display/Slider">Slider</Link>.
        </Text>
        <br />
    </main>
</div>

<Slider let:showPrevPage let:showNextPage background="white">
    <Slide img="/img/slide1-img.jpg">
        <Heading size={ 2 } className="blue-text">Стань инженером будущего в Институте новых материалов и технологий УрФУ</Heading>
        <Text className="heading-3">Актуальная информация о поступлении в университет в 2022 году:</Text>
        <Link variant="interactive" href="/bachelor" lineWidth={ 2 }>Бакалавриат и специалитет</Link><br /><br />
        <Link variant="interactive" href="/master" lineWidth={ 2 }>Магистратура</Link><br />
        <svelte:fragment slot="buttons">
            <RoundButton size="M" variant="left" on:click={ showPrevPage } />
            <RoundButton size="M" variant="right" on:click={ showNextPage } />
        </svelte:fragment>
    </Slide>
    <Slide img="/img/slide2-img.jpg">
        <Heading size={ 2 } className="blue-text">Стань инженером будущего в Институте новых материалов и технологий УрФУ</Heading>
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
        <Heading size={3}>Пример использования:</Heading>
        <Code val={SliderExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">img <ParameterType value="string" /></Heading>
        <Text>Ссылка на изображение в правой части</Text>
    </main>
</div>
