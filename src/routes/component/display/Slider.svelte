<script lang="ts">
    import { Code, Heading, Link, Slider, RoundButton, Warning, Slide, Text, ParameterType } from '$lib/components'
    import SliderExample from '$lib/../codes/SliderExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Slider</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={ 1 }>Slider <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Слайдер новостей, разделённый на две половины – текстовая часть слева и изображение справа
        </Text>
        <Warning>
            Внимание: На данный момент из-за сторонних зависимостей данный компонент не поддерживает работу при запуске приложения через <code>npx svelte-kit dev</code> или <code>npm run dev</code> <br /><br />
            Чтобы запустить приложение в режиме разработки, <br />
            необходимо использовать команду <code>npx svelte-kit build && npx svelte-kit preview</code>
        </Warning>
        <br />
    </main>
</div>

<Slider let:showPrevPage let:showNextPage background="white">
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
        <Heading size={3}>Пример использования:</Heading>
        <Code val={SliderExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} color="var(--blue)">background <ParameterType value="string" /></Heading>
        <Text>
            Настройка заднего фона. Принимаются любые значения, валидные для стандартного <code>background</code> в CSS<br />
            Значение по умолчанию: <code>transparent</code>
        </Text>
        <Heading size={4} color="var(--blue)">autoplay <ParameterType value="boolean" /></Heading>
        <Text>
            Автоматическое листание <br />
            Значение по умолчанию: <code>true</code>
        </Text>
        <Heading size={4} color="var(--blue)">duration <ParameterType value="number" /></Heading>
        <Text>
            Длительность одного слайда (в секундах) при включённом <code>autoplay</code> <br />
            Значение по умолчанию: <code>7</code>
        </Text>
        <Heading size={4} color="var(--blue)">swiping <ParameterType value="boolean" /></Heading>
        <Text>
            Возможность листать слайды с помощью касаний (как на сенсорных экранах) <br />
            Значение по умолчанию: <code>false</code>
        </Text>
        <Heading size={4} color="var(--blue)">arrows <ParameterType value="boolean" /></Heading>
        <Text>
            Отображать стандартные кнопки для перелистывания слайдов <br />
            Значение по умолчанию: <code>false</code>
        </Text>
        <Heading size={4} color="var(--blue)">dots <ParameterType value="boolean" /></Heading>
        <Text>
            Отображать точки внизу компонента, отображающие количество слайдов и их состояние <br />
            Значение по умолчанию: <code>false</code>
        </Text>
        <Heading size={4} color="var(--blue)">progressBar <ParameterType value="boolean" /></Heading>
        <Text>
            Отображать прогресс автоматического перелистывания (только при <code>autoplay = true</code>) <br />
            Значение по умолчанию: <code>true</code>
        </Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
    
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:pageChanged</Heading>
        <Text>
            Событие, которое срабатывает при каждой смене страницы <br />
            Передаваемый в функцию аргумент: <code>page</code> - номер текущей страницы
        </Text>
    </main>
</div>
