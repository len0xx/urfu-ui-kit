<script lang="ts">
    import { Code, Heading, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/../codes/TextExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Текстовый блок</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Text <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Текстовый блок
        </Text>
        <br />
        <Text className="subtitle" color="#444444">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repudiandae numquam sint nobis labore quibusdam.</Text>
        <Text color="#888888">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repudiandae numquam sint nobis labore quibusdam.</Text>
        <br />
        <br />
        
        <Heading size={3} className="underlined-text">Пример использования:</Heading>
        <Code val={CodeExample} />
        <br />
    
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">color <ParameterType value="string" /></Heading>
        <Text>
            Цвет текста в компоненте. <br />
            Поддерживаются любые валидные значения CSS (Например: <code>#0000FF</code>, <code>var(--blue)</code> или <code>magenta</code>) <br />
            Значение по умолчанию: <code>black</code>
        </Text>
        <Heading size={4} color="var(--blue)">opacity <ParameterType value="string" /></Heading>
        <Text>
            Прозрачность текста в компоненте. <br />
            Поддерживаются любые валидные значения CSS (Например: <code>0.1</code> или <code>80%</code>) <br />
            Значение по умолчанию: <code>1</code>
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
        <Heading size={4} color="var(--blue)">inline <ParameterType value="boolean" /></Heading>
        <Text>
            Если значение <code>true</code>, то элемент будет иметь стиль <code>display: inline-block</code> <br />
            Иначе – <code>display: block</code> <br />
            Значение по умолчанию: <code>false</code>
        </Text>
        <Heading size={4} color="var(--blue)">align <ParameterType value="enum" /></Heading>
        <Text>
            Выравнивание текста внутри компонента <br />
            Поддерживаются 5 значений: <code>unset</code>, <code>initial</code>, <code>left</code>, <code>center</code> и <code>right</code> <br />
            Значение по умолчанию: <code>unset</code>
        </Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>class</code></Text>
        <br />
        
        <Heading size={3} className="underlined-text">Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
    </main>
</div>
