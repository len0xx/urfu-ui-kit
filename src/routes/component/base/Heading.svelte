<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import Heading from '$lib/components/Heading.svelte'

    import HeadingExample from '$lib/../codes/HeadingExample'
    import ParameterType from '$lib/components/ParameterType.svelte'
import Tag from '$lib/components/Tag.svelte'

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – Заголовки</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Heading <a href="#" class="page-link">🔗</a></Heading>
        <p class="medium">
            Аналог стандратных тегов h1 - h6 в HTML
        </p>
        <br />
        <Heading size={1} marginTop={0}>Heading 1</Heading>
        <Heading size={2} marginTop={0}>Heading 2</Heading>
        <Heading size={3} marginTop={0}>Heading 3</Heading>
        <Heading size={4} marginTop={0}>Heading 4</Heading>
        <Heading size={5} marginTop={0}>Heading 5</Heading>
        <Heading size={6} marginTop={0}>Heading 6</Heading>
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={HeadingExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">size <ParameterType value="enum" /> <Tag title="Обязательное поле">required</Tag></Heading>
        <p>Размер заголовка. Поддерживаются значения от <code>1</code> до <code>6</code></p>
        <Heading size={4} className="blue-text">marginX <ParameterType value="number" /></Heading>
        <p>Отступ по горизонтали. (Устанавливается в <code>em</code>)</p>
        <Heading size={4} className="blue-text">marginY <ParameterType value="number" /></Heading>
        <p>Отступ по вертикали. (Устанавливается в <code>em</code>)</p>
        <Heading size={4} className="blue-text">marginTop <ParameterType value="number" /></Heading>
        <p>Отступ сверху. (Устанавливается в <code>em</code>)</p>
        <Heading size={4} className="blue-text">marginBottom <ParameterType value="number" /></Heading>
        <p>Отступ снизу. (Устанавливается в <code>em</code>)</p>
        <Heading size={4} className="blue-text">marginLeft <ParameterType value="number" /></Heading>
        <p>Отступ слева. (Устанавливается в <code>em</code>)</p>
        <Heading size={4} className="blue-text">marginRight <ParameterType value="number" /></Heading>
        <p>Отступ справа. (Устанавливается в <code>em</code>)</p>
    </main>
</div>
