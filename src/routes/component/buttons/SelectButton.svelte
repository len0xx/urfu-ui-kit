<script lang="ts">
    import { onMount } from 'svelte'
    import { Code, Heading, SelectButton, Text, Preloader, ParameterType } from '$lib/components'

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
        <Heading size={1}>SelectButton <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Альтернативный вариант оформления кнопок
        </Text>
        <br />
        
        <SelectButton variant={ selected == 0 ? 'active' : 'default' } on:click={() => selected = 0}>Первая кнопка</SelectButton>
        <SelectButton variant={ selected == 1 ? 'active' : 'default' } on:click={() => selected = 1}>Вторая кнопка</SelectButton>
        { #if expanded }
            <SelectButton variant={ selected == 2 ? 'active' : 'default' } on:click={() => selected = 2}>Третья кнопка</SelectButton>
            <SelectButton variant={ selected == 3 ? 'active' : 'default' } on:click={() => selected = 3}>Четвёртая кнопка</SelectButton>
            <SelectButton variant={ selected == 4 ? 'active' : 'default' } on:click={() => selected = 4}>Пятая кнопка</SelectButton>
        { /if }
        <SelectButton variant="fill" color={ expanded ? 'blue' : 'red' } on:click={() => expanded = !expanded}>{ expanded ? 'Меньше' : 'Больше' }</SelectButton>
        
        <br />
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={SelectButtonExample} />
        <br />
        
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">variant <ParameterType value="enum" /></Heading>
        <Text>
            Вариант отображения кнопки.<br />
            Поддерживаются три значения: <code>default</code>, <code>active</code> и <code>fill</code>. <br />
            Значение по умолчанию: <code>default</code>
        </Text>
        <Heading size={4} className="blue-text">color <ParameterType value="enum" /></Heading>
        <Text>
            Основной цвет кнопки.<br />
            Поддерживаются два значения: <code>blue</code> и <code>red</code>. <br />
            Значение по умолчанию: <code>blue</code>
        </Text>
        <Heading size={4} className="blue-text">size <ParameterType value="enum" /></Heading>
        <Text>
            Размер кнопки.<br />
            Поддерживаются три значения: <code>S</code>, <code>M</code> и <code>L</code>. <br />
            Значение по умолчанию: <code>M</code>
        </Text>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
        <Heading size={4} className="blue-text">on:focus</Heading>
        <Heading size={4} className="blue-text">on:blur</Heading>
        <Heading size={4} className="blue-text">on:mouseover</Heading>
        <Heading size={4} className="blue-text">on:mouseleave</Heading>
        <Heading size={4} className="blue-text">on:mouseup</Heading>
        <Heading size={4} className="blue-text">on:mousedown</Heading>
    </main>
</div>
