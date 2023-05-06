<script lang="ts">
    import { Code, Heading, Profile, Link, Grid, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/codes/ProfileExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Profile</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Profile <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Компонент для отображения информации про пользователей
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <Grid m={2} l={3} alignItems="start">
            <Profile variant="white">
                <svelte:fragment slot="name">Петров Пётр Петрович</svelte:fragment>
                <svelte:fragment slot="description">Исполняющий обязанности замещающего заместителя</svelte:fragment>
                <svelte:fragment slot="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates officiis optio ea, voluptatem eum possimus odio fuga corrupti</svelte:fragment>
            </Profile>
            <Profile variant="white">
                <svelte:fragment slot="name">Иванов Иван Иванович</svelte:fragment>
                <svelte:fragment slot="description">Заместитель главного заместителя</svelte:fragment>
                <svelte:fragment slot="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates officiis optio ea, voluptatem eum possimus odio fuga corrupti repudiandae ad pariatur reprehenderit iste, voluptate facilis, ratione deserunt? Dolor, praesentium rem!</svelte:fragment>
            </Profile>
            <Profile variant="white">
                <svelte:fragment slot="name">Николаев Николай Николаевич</svelte:fragment>
                <svelte:fragment slot="description">Директор директоров</svelte:fragment>
                <svelte:fragment slot="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates officiis optio ea, voluptatem eum possimus odio fuga corrupti repudiandae ad pariatur reprehenderit iste, voluptate facilis, ratione deserunt? Dolor, praesentium rem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates officiis optio ea, voluptatem eum possimus odio fuga corrupti repudiandae ad pariatur reprehenderit iste, voluptate facilis, ratione deserunt? Dolor, praesentium rem!</svelte:fragment>
            </Profile>
        </Grid>
        <br />
    
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
    
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">variant <ParameterType value="enum" /></Heading>
        <Text>Цвет заднего фона. Поддерживаются два значения: <code>white</code> и <code>grey</code>. <br />
            Значение по умолчанию: <code>grey</code></Text>
        <Heading size={4} color="var(--blue)">src <ParameterType value="string" /></Heading>
        <Text>Ссылка на изображение</Text>
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
        <Text>Аналог стандартного атрибута <code>class</code></Text>
        <br />
        
        <Heading size={3} className="underlined-text">Слоты:</Heading>
        <Heading size={4} color="var(--blue)">name</Heading>
        <Text>Имя, отображаемое в заголовке</Text>
        <Heading size={4} color="var(--blue)">description</Heading>
        <Text>Подпись под именем</Text>
        <Heading size={4} color="var(--blue)">text</Heading>
        <Text>Основное содержание компонента. Текст, длиной до 400 символов отображется целиком. Длиннее – скрывается при монтировании компонента и раскрывается по нажатию на кнопку "Дальше"</Text>
        <br />
    
        <Heading size={3} className="underlined-text">Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
    </main>
</div>
