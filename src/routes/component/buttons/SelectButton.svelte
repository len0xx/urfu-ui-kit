<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
    import SelectButton from '$lib/components/SelectButton.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import ParameterType from '$lib/components/ParameterType.svelte'

    import SelectButtonExample from '$lib/../codes/SelectButtonExample'

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)

    let selected = 0
    let expanded = false
</script>

<svelte:head>
    <title>УрФУ UI Kit – SelectButton</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>SelectButton <a href="#" class="page-link">🔗</a></Heading>
        <p class="medium">
            Альтернативный вариант оформления кнопок
        </p>
        <br />
        
        <SelectButton variant={ selected == 0 ? 'active' : 'default' } on:click={() => selected = 0}>Первая кнопка</SelectButton>
        <SelectButton variant={ selected == 1 ? 'active' : 'default' } on:click={() => selected = 1}>Вторая кнопка</SelectButton>
        { #if expanded }
            <SelectButton variant={ selected == 2 ? 'active' : 'default' } on:click={() => selected = 2}>Третья кнопка</SelectButton>
            <SelectButton variant={ selected == 3 ? 'active' : 'default' } on:click={() => selected = 3}>Четвёртая кнопка</SelectButton>
            <SelectButton variant={ selected == 4 ? 'active' : 'default' } on:click={() => selected = 4}>Пятая кнопка</SelectButton>
        { /if }
        <SelectButton variant="blue" on:click={() => expanded = !expanded}>{ expanded ? 'Меньше' : 'Больше' }</SelectButton>
        
        <br />
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={SelectButtonExample} />
        <br />
        
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">variant <ParameterType value="enum" /></Heading>
        <p>Вариант отображения кнопки. Поддерживаются три значения: <code>default</code>, <code>active</code> и <code>blue</code>. <br />
            Значение по умолчанию: <code>default</code></p>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <p>Аналог стандартного атрибута class</p>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
    </main>
</div>