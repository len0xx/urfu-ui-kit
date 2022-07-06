<script lang="ts">
    import { Code, Heading, Text, ParameterType } from '$lib/components'
    import TextExample from '$lib/../codes/TextExample'
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
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={TextExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
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
        <Heading size={4} color="var(--blue)">marginX <ParameterType value="number" /></Heading>
        <Text>Отступ по горизонтали. (Устанавливается в <code>em</code>)</Text>
        <Heading size={4} color="var(--blue)">marginY <ParameterType value="number" /></Heading>
        <Text>Отступ по вертикали. (Устанавливается в <code>em</code>)</Text>
        <Heading size={4} color="var(--blue)">marginTop <ParameterType value="number" /></Heading>
        <Text>Отступ сверху. (Устанавливается в <code>em</code>)</Text>
        <Heading size={4} color="var(--blue)">marginBottom <ParameterType value="number" /></Heading>
        <Text>Отступ снизу. (Устанавливается в <code>em</code>)</Text>
        <Heading size={4} color="var(--blue)">marginLeft <ParameterType value="number" /></Heading>
        <Text>Отступ слева. (Устанавливается в <code>em</code>)</Text>
        <Heading size={4} color="var(--blue)">marginRight <ParameterType value="number" /></Heading>
        <Text>Отступ справа. (Устанавливается в <code>em</code>)</Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>class</code></Text>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
    </main>
</div>
