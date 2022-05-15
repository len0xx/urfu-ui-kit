<script lang="ts">
    import Header from '$lib/components/Header.svelte'
    import Rainbow from '$lib/components/Rainbow.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import components from '$lib/components'
    import { page } from '$app/stores'
</script>

<Header hideOnScrollDown={ true } showOnScrollUp={ true } hideAfter={ 90 }>
    <div class="content">
        <a href="/">
            <img src="/img/urfu-logo.svg" alt="УрФУ">
        </a>
    </div>
</Header>
<section class="main">
    <aside>
        <Heading size={3}><a href="/setup">Установка</a></Heading>
        <!-- <Heading size={3}><a href="/usage-guide">Использование</a></Heading> -->
        <Heading size={3}><a href="https://github.com/len0xx/urfu-ui-kit">GitHub</a></Heading>
        <br />
        <Heading size={3} marginTop={0}><a href="/component/buttons">Кнопки</a></Heading>
        <nav>
            { #each components.filter(c => c.type === 'buttons') as component }
                <a sveltekit:prefetch href={ '/component/' + component.type + '/' + component.name } class:active-page={ $page.url.pathname == '/component/' + component.type + '/' + component.name }>{ component.name }</a>
            { /each }
        </nav>
        <Heading size={3}><a href="/component/layout">Расположение</a></Heading>
        <nav>
            { #each components.filter(c => c.type === 'layout') as component }
                <a sveltekit:prefetch href={ '/component/' + component.type + '/' + component.name } class:active-page={ $page.url.pathname == '/component/' + component.type + '/' + component.name }>{ component.name }</a>
            { /each }
        </nav>
        <Heading size={3}><a href="/component/display">Отображение данных</a></Heading>
        <nav>
            { #each components.filter(c => c.type === 'display') as component }
                <a sveltekit:prefetch href={ '/component/' + component.type + '/' + component.name } class:active-page={ $page.url.pathname == '/component/' + component.type + '/' + component.name }>{ component.name }</a>
            { /each }
        </nav>
        <Heading size={3}><a href="/component/loading">Загрузка</a></Heading>
        <nav>
            { #each components.filter(c => c.type === 'loading') as component }
                <a sveltekit:prefetch href={ '/component/' + component.type + '/' + component.name } class:active-page={ $page.url.pathname == '/component/' + component.type + '/' + component.name }>{ component.name }</a>
            { /each }
        </nav>
        <Heading size={3}><a href="/component/base">Базовые элементы</a></Heading>
        <nav>
            { #each components.filter(c => c.type === 'base') as component }
                <a sveltekit:prefetch href={ '/component/' + component.type + '/' + component.name } class:active-page={ $page.url.pathname == '/component/' + component.type + '/' + component.name }>{ component.name }</a>
            { /each }
        </nav>
        <Heading size={3}><a href="/component/other">Другие компоненты</a></Heading>
        <nav>
            { #each components.filter(c => c.type === 'other') as component }
                <a sveltekit:prefetch href={ '/component/' + component.type + '/' + component.name } class:active-page={ $page.url.pathname == '/component/' + component.type + '/' + component.name }>{ component.name }</a>
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

    .main-block {
        padding-bottom: 7em;
	    max-width: calc(100vw - var(--sidebar-width));
    }

    footer {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 3em 0;
    }
</style>
