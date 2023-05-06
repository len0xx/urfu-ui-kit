<script lang="ts">
    import { Code, Heading, Divider, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/codes/DividerExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Divider</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Divider <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Визуальный разделитель текста
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            <Divider color="black" />
            Est optio dolore nostrum quo aspernatur. Sunt eligendi dignissimos ullam nisi quisquam perspiciatis optio iste iure fugiat, qui cum reiciendis ipsa consequatur. <br />
            <Divider color="black" width="60px" height={ 5 }/>
            <Divider color="black" width="100px" height={ 6 }/>
            <Divider color="black" width="160px" height={ 7 }/>
        </Text>
        <br />
    
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
    
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">color <ParameterType value="string" /></Heading>
        <Text>
            Цвет разделителя <br />
            Поддерживаются любые валидные значения CSS (Пример: <code>red</code>, <code>#fff</code>, <code>rgb(255, 255, 255)</code>, <code>rgba(255, 255, 255, 0.5)</code>) <br />
            Значение по умолчанию: <code>white</code>
        </Text>
        <Heading size={4} color="var(--blue)">width <ParameterType value="string" /></Heading>
        <Text>
            Ширина разделителя <br />
            Поддерживаются любые валидные значения CSS (Пример: <code>50px</code>, <code>5em</code>, <code>12rem</code>, <code>30%</code>) <br />
            Значение по умолчанию: <code>50px</code>
        </Text>
        <Heading size={4} color="var(--blue)">height <ParameterType value="number" /></Heading>
        <Text>
            Высота разделителя (в <code>px</code>) <br />
            Значение по умолчанию: <code>4</code>
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
        <Text>Аналог стандартного атрибута <code>class</code></Text>
        <br />
    
        <Heading size={3} className="underlined-text">Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:focus</Heading>
        <Heading size={4} color="var(--blue)">on:blur</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
    </main>
</div>
