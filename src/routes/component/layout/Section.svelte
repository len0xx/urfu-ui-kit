<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Button from '$lib/components/Button.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import Tag from '$lib/components/Tag.svelte'

    import ButtonExample from '$lib/../codes/ButtonExample'

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – Section</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Section <a href="#" class="page-link">🔗</a></Heading>
        <p class="medium">
            Кнопки являются неотъемлимой частью современных веб-приложений
        </p>
        <br />
        <Button variant="primary">Открыть модальное окно</Button>
        <Button variant="blue" href="/">Вернуться на главную</Button>
        <br />
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={ButtonExample} />
        <br />
        
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">variant <Tag>string</Tag></Heading>
        <p>Вариант отображения кнопки. Поддерживаются два стандартных значения: <code>primary</code> и <code>blue</code></p>
        <Heading size={4} className="blue-text">className <Tag>string</Tag></Heading>
        <p>Аналог стандартного атрибута class</p>
        <Heading size={4} className="blue-text">actionType <Tag>string</Tag></Heading>
        <p>Аналог стандартного атрибута type</p>
        <Heading size={4} className="blue-text">href <Tag>string</Tag></Heading>
        <p>Используется для добавления кнопке функционала ссылки (переход по страницам по нажатию)</p>
    </main>
</div>