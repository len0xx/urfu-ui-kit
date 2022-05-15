<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
    import Text from '$lib/components/Text.svelte'
    import Button from '$lib/components/Button.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Preloader from '$lib/components/Preloader.svelte'

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
    <title>УрФУ UI Kit – Текстовые блоки</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Text <a href="#" class="page-link">🔗</a></Heading>
        <Text className="medium">
            Кнопки являются неотъемлимой частью современных веб-приложений
        </Text>
        <br />
        <Button variant="primary" size="S">Открыть модальное окно</Button>
        <Button variant="blue" size="S" href="/">Вернуться на главную</Button>
        <br />    <br />
        <Button variant="primary" size="M">Открыть модальное окно</Button>
        <Button variant="blue" size="M" href="/">Вернуться на главную</Button>
        <br />    <br />
        <Button variant="primary" size="L">Открыть модальное окно</Button>
        <Button variant="blue" size="L" href="/">Вернуться на главную</Button>
        <br />
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={ButtonExample} />
    </main>
</div>
