<script lang="ts">
    import { onMount } from 'svelte'
    import { Code, Heading, Carousel, Text, Preloader, ParameterType } from '$lib/components'

    import CarouselExample from '$lib/../codes/CarouselExample'

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – Carousel</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Carousel <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Карусель с бесконечной прокруткой, которая автоматические настраивается под размер экрана и ширину контента (но все потомки должны быть одинаковой ширины)
        </Text>
        <br />
        <section>
            <Carousel margin={10}>
                <img class="carousel-img" src="/img/image1.jpg" alt="image1">
                <img class="carousel-img" src="/img/image2.jpg" alt="image1">
                <img class="carousel-img" src="/img/image3.jpg" alt="image1">
            </Carousel>
        </section>
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={CarouselExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">margin <ParameterType value="number" /></Heading>
        <Text>Отступ между потомками (в px). <br />
            Значение по умолчанию: <code>10</code></Text>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
    </main>
</div>

<style>
    .carousel-img {
        width: 640px;
        height: 427px;
    }
</style>
