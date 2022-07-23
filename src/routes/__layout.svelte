<script lang="ts">
    import { Header, Heading, Preloader, Rainbow } from '$lib/components'
    import components from '$lib/components/list'
    import { page } from '$app/stores'
    import clickOutside from '$lib/actions/clickOutside'

    let open = false
    let clickable = false
    const getLink = (component: { type: string, name: string }) => '/component/' + component.type + '/' + component.name
    
    const openSideMenu = () => {
        open = true
        setTimeout(() => clickable = true, 200)
    }

    const closeSideMenu = () => {
        open = false
        setTimeout(() => clickable = false, 200)
    }

    const toggleSideMenu = () => open ? closeSideMenu() : openSideMenu()

    const handleClickOutsideMenu = () => clickable ? closeSideMenu() : null
</script>

<Preloader delay={400} />

<Header hideOnScrollDown={ true } showOnScrollUp={ true } hideAfter={ 90 }>
    <div class="content">
        <div class="open-side-menu pc-hide" on:click={ toggleSideMenu }>
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
        </div>
        <a href="/">
            <img style:display="inline-block" style:vertical-align="middle" src="/img/urfu-logo.svg" alt="УрФУ">
        </a>
    </div>
</Header>
<section class="main">
    <aside class:open use:clickOutside={ handleClickOutsideMenu }>
        <Heading size={3}><a href="/">Главная</a></Heading>
        <Heading size={3}><a href="/usage">Как начать</a></Heading>
        <Heading size={3}><a href="/about">О проекте</a></Heading>
        <Heading size={3}><a href="https://github.com/len0xx/urfu-ui-kit">GitHub</a></Heading>
        <br />
        <Heading size={3} margin={{ top: 0, bottom: 0.5 }}><a href="/component/base">Базовые элементы</a></Heading>
        <nav>
            { #each components.filter(c => c.type === 'base') as component }
                <a sveltekit:prefetch href={ getLink(component) } on:click={ closeSideMenu } class:active-page={ $page.url.pathname == getLink(component) }>{ component.name }</a>
            { /each }
        </nav>
        <Heading size={3} margin={{ top: 1.5, bottom: 0.5 }}><a href="/component/buttons">Кнопки</a></Heading>
        <nav>
            { #each components.filter(c => c.type === 'buttons') as component }
                <a sveltekit:prefetch href={ getLink(component) } on:click={ closeSideMenu } class:active-page={ $page.url.pathname == getLink(component) }>{ component.name }</a>
            { /each }
        </nav>
        <Heading size={3} margin={{ top: 1.5, bottom: 0.5 }}><a href="/component/layout">Расположение</a></Heading>
        <nav>
            { #each components.filter(c => c.type === 'layout') as component }
                <a sveltekit:prefetch href={ getLink(component) } on:click={ closeSideMenu } class:active-page={ $page.url.pathname == getLink(component) }>{ component.name }</a>
            { /each }
        </nav>
        <Heading size={3} margin={{ top: 1.5, bottom: 0.5 }}><a href="/component/display">Отображение данных</a></Heading>
        <nav>
            { #each components.filter(c => c.type === 'display') as component }
                <a sveltekit:prefetch href={ getLink(component) } on:click={ closeSideMenu } class:active-page={ $page.url.pathname == getLink(component) }>{ component.name }</a>
            { /each }
        </nav>
        <Heading size={3} margin={{ top: 1.5, bottom: 0.5 }}><a href="/component/loading">Загрузка</a></Heading>
        <nav>
            { #each components.filter(c => c.type === 'loading') as component }
                <a sveltekit:prefetch href={ getLink(component) } on:click={ closeSideMenu } class:active-page={ $page.url.pathname == getLink(component) }>{ component.name }</a>
            { /each }
        </nav>
        <Heading size={3} margin={{ top: 1.5, bottom: 0.5 }}><a href="/component/other">Декор</a></Heading>
        <nav>
            { #each components.filter(c => c.type === 'other') as component }
                <a sveltekit:prefetch href={ getLink(component) } on:click={ closeSideMenu } class:active-page={ $page.url.pathname == getLink(component) }>{ component.name }</a>
            { /each }
        </nav>
    </aside>
    <div class="main-block">
        <slot />
        <footer class="align-center">
            <a href="http://urfu-ui.len0xx.ru">urfu-ui.len0xx.ru</a> © { new Date().getFullYear() }
            <Rainbow size="M" fixed="bottom" />
        </footer>
    </div>
</section>

<style>
    :global(h3 > a:hover) {
        text-decoration: underline;
    }

    footer {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 3em 0;
        color: rgba(0, 0, 0, 0.5);
    }

    footer a:hover {
        color: rgba(0, 0, 0, 1);
    }
</style>
