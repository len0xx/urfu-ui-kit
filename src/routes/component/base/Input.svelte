<script lang="ts">
    import { Code, Heading, Grid, Input, Link, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/codes/InputExample'

    let firstname = ''
    let email = ''
    let phone = ''
    let phoneMask = {
        mask: '+{7} (000) 000-00-00'
    }
</script>

<svelte:head>
    <title>УрФУ UI Kit – Input</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Input <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Поле для пользовательского ввода
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <Heading size={3}>Оставьте свои контактные данные:</Heading>
        <Grid m={4} s={1}>
            <Input wide type="text" placeholder="Имя" bind:value={ firstname } />
            <Input wide type="email" placeholder="Email" bind:value={ email } />
            <Input wide type="tel" placeholder="Контактный телефон" bind:value={ phone } mask={ phoneMask } />
        </Grid>
        <Text>Введённое имя: { firstname }</Text>
        <Text>Введённый email: { email }</Text>
        <Text margin={{ bottom: 1.75 }}>Введённый номер телефона: { phone }</Text>
    
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
    
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">wide <ParameterType value="boolean" /></Heading>
        <Text>Если параметр указан (имеет значение <code>true</code>), компонент будет иметь свойство <code>width: 100%</code></Text>
        <Heading size={4} color="var(--blue)">mask <ParameterType value="object" /></Heading>
        <Text>Маска для поля ввода (Подробнее: <Link href="https://www.npmjs.com/package/imask" target="_BLANK">svelte-imask</Link>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">min <ParameterType value="number" /></Heading>
        <Text>Аналог стандартного атрибута <code>min</code></Text>
        <Heading size={4} color="var(--blue)">max <ParameterType value="number" /></Heading>
        <Text>Аналог стандартного атрибута <code>max</code></Text>
        <Heading size={4} color="var(--blue)">name <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>name</code></Text>
        <Heading size={4} color="var(--blue)">step <ParameterType value="number" /></Heading>
        <Text>Аналог стандартного атрибута <code>step</code></Text>
        <Heading size={4} color="var(--blue)">list <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>list</code></Text>
        <Heading size={4} color="var(--blue)">value <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>value</code></Text>
        <Heading size={4} color="var(--blue)">pattern <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>pattern</code></Text>
        <Heading size={4} color="var(--blue)">placeholder <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>placeholder</code></Text>
        <Heading size={4} color="var(--blue)">type <ParameterType value="enum" /></Heading>
        <Text>Аналог стандартного атрибута <code>type</code></Text>
        <Heading size={4} color="var(--blue)">readonly <ParameterType value="boolean" /></Heading>
        <Text>
            Аналог стандартного атрибута <code>readonly</code> <br />
            Значение по умолчанию: <code>false</code>
        </Text>
        <Heading size={4} color="var(--blue)">multiple <ParameterType value="boolean" /></Heading>
        <Text>
            Аналог стандартного атрибута <code>multiple</code> <br />
            Значение по умолчанию: <code>false</code>
        </Text>
        <Heading size={4} color="var(--blue)">disabled <ParameterType value="boolean" /></Heading>
        <Text>
            Аналог стандартного атрибута <code>disabled</code> <br />
            Значение по умолчанию: <code>false</code>
        </Text>
        <Heading size={4} color="var(--blue)">autofocus <ParameterType value="boolean" /></Heading>
        <Text>
            Аналог стандартного атрибута <code>autofocus</code> <br />
            Значение по умолчанию: <code>false</code>
        </Text>
        <Heading size={4} color="var(--blue)">required <ParameterType value="boolean" /></Heading>
        <Text>Аналог стандартного атрибута <code>required</code></Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>class</code></Text>
        <br />
    
        <Heading size={3} className="underlined-text">Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:input</Heading>
        <Heading size={4} color="var(--blue)">on:change</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:focus</Heading>
        <Heading size={4} color="var(--blue)">on:blur</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
    </main>
</div>
