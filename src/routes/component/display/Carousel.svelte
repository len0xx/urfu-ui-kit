<script lang="ts">
    import { Code, Heading, Carousel, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/codes/CarouselExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Carousel</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Carousel <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Карусель с бесконечной прокруткой, которая автоматические настраивается под размер экрана и ширину контента (но все потомки должны быть одинаковой ширины)
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <section>
            <Carousel margin={10}>
                <img class="carousel-img" src="/img/image1.jpg" alt="image1">
                <img class="carousel-img" src="/img/image2.jpg" alt="image1">
                <img class="carousel-img" src="/img/image3.jpg" alt="image1">
            </Carousel>
        </section>
    
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
    
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">margin <ParameterType value="number" /></Heading>
        <Text>
            Отступ между потомками (в px). <br />
            Значение по умолчанию: <code>10</code>
        </Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>class</code></Text>
    </main>
</div>

<style>
    .carousel-img {
        width: 640px;
        height: 427px;
    }
</style>
