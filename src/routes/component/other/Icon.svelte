<script lang="ts">
    import { Code, Heading, Icon, Div, Text, ParameterType, Tag } from '$lib/components'
    import CodeExample from '$lib/../codes/IconExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Icon</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Icon <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Компонент для отображения иконок с возможностью конфигурирования размера и отступов
        </Text>
        <br />
        <Div margin={{ y: 1 }}>
            <Icon name="Coins" width={64} height={64} margin={{ right: 1 }} />
            <Icon name="Bank" width={64} height={64} margin={{ right: 1 }} />
            <Icon name="ChartLineUp" width={64} height={64} margin={{ right: 1 }} />
        </Div>
        <br />
        <br />
    
        <Heading size={3} className="underlined-text">Пример использования:</Heading>
        <Code val={CodeExample} />
        <br />
    
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">name <ParameterType value="string" /><Tag title="Обязательное поле">required</Tag></Heading>
        <Text>
            Название файла иконки (без пути до директории и расширения)
        </Text>
        <Heading size={4} color="var(--blue)">path <ParameterType value="string" /></Heading>
        <Text>
            Путь до директории с иконками <br />
            Значение по умолчанию: <code>/img/icons/</code>
        </Text>
        <Heading size={4} color="var(--blue)">extension <ParameterType value="enum" /></Heading>
        <Text>
            Расширение файла иконки <br />
            Поддерживаются пять стандартных значений: <code>svg</code>, <code>png</code>, <code>jpg</code>, <code>jpeg</code> и <code>webp</code> <br />
            Значение по умолчанию: <code>svg</code>
        </Text>
        <Heading size={4} color="var(--blue)">alt <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута alt</Text>
        <Heading size={4} color="var(--blue)">width <ParameterType value="number" /></Heading>
        <Text>
            Ширина иконки (в <code>px</code>) <br />
            Значение по умолчанию: <code>32</code>
        </Text>
        <Heading size={4} color="var(--blue)">height <ParameterType value="number" /></Heading>
        <Text>
            Высота иконки (в <code>px</code>) <br />
            Значение по умолчанию: <code>32</code>
        </Text>
        <Heading size={4} color="var(--blue)">margin <ParameterType value="object" /></Heading>
        <Text>
            Объект, описывающий отступы компонента. Имеет следующие свойства: <br />
            <code>x</code> – отступ по горизонтали <br />
            <code>y</code> – отступ по вертикали <br />
            <code>top</code> – отступ сверху <br />
            <code>bottom</code> – отступ снизу <br />
            <code>left</code> – отступ слева <br />
            <code>right</code> – отступ справа <br />
            Все значения могут иметь один из двух типов: <code>string</code> или <code>number</code> <br />
            В случае, если значение одного из свойств имеет тип <code>number</code>, ему будет добавлена единица измерения <code>em</code> <br />
            Пример: <code>margin={ '{{ top: 1, x: \'auto\' }}' }</code> будет преобразовано в <code>margin: 1em auto 0</code>
        </Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
    
        <Heading size={3} className="underlined-text">Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:focus</Heading>
        <Heading size={4} color="var(--blue)">on:blur</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
    </main>
</div>
