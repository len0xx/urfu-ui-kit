<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Profile from '$lib/components/Profile.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import ParameterType from '$lib/components/ParameterType.svelte'

    import ProfileExample from '$lib/../codes/ProfileExample'
    import Grid from '$lib/components/Grid.svelte'

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – Profile</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Profile <a href="#" class="page-link">🔗</a></Heading>
        <p class="medium">
            Компонент для отображения информации про пользователей
        </p>
        <br />
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
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={ProfileExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">variant <ParameterType value="enum" /></Heading>
        <p>Цвет заднего фона. Поддерживаются два значения: <code>white</code> и <code>grey</code>. <br />
            Значение по умолчанию: <code>grey</code></p>
        <Heading size={4} className="blue-text">src <ParameterType value="string" /></Heading>
        <p>Ссылка на изображение</p>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <p>Аналог стандартного атрибута class</p>
        <br />
        
        <Heading size={3}>Слоты:</Heading>
        <Heading size={4} className="blue-text">name</Heading>
        <p>Имя, отображаемое в заголовке</p>
        <Heading size={4} className="blue-text">description</Heading>
        <p>Подпись под именем</p>
        <Heading size={4} className="blue-text">text</Heading>
        <p>Основное содержание компонента. Текст, длиной до 400 символов отображется целиком. Длиннее – скрывается при монтировании компонента и раскрывается по нажатию на кнопку "Дальше"</p>
        <br />
    
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
    </main>
</div>