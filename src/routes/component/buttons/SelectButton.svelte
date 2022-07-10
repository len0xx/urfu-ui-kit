<script lang="ts">
    import { Code, Heading, SelectButton, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/../codes/SelectButtonExample'

    let selected = 0
    let expanded = false
</script>

<svelte:head>
    <title>УрФУ UI Kit – SelectButton</title>
</svelte:head>

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
        <Code val={CodeExample} />
        <br />
        
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} color="var(--blue)">variant <ParameterType value="enum" /></Heading>
        <Text>
            Вариант отображения кнопки.<br />
            Поддерживаются три значения: <code>default</code>, <code>active</code> и <code>fill</code>. <br />
            Значение по умолчанию: <code>default</code>
        </Text>
        <Heading size={4} color="var(--blue)">color <ParameterType value="enum" /></Heading>
        <Text>
            Основной цвет кнопки.<br />
            Поддерживаются два значения: <code>blue</code> и <code>red</code>. <br />
            Значение по умолчанию: <code>blue</code>
        </Text>
        <Heading size={4} color="var(--blue)">size <ParameterType value="enum" /></Heading>
        <Text>
            Размер кнопки.<br />
            Поддерживаются три значения: <code>S</code>, <code>M</code> и <code>L</code>. <br />
            Значение по умолчанию: <code>M</code>
        </Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:focus</Heading>
        <Heading size={4} color="var(--blue)">on:blur</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
    </main>
</div>
