<script lang="ts">
    import { onMount } from 'svelte'
    import { Code, Heading, Grid, Input, Link, Text, Preloader, ParameterType } from '$lib/components'

    import InputExample from '$lib/../codes/InputExample'

    let loaded = false
    let firstname = ''
    let email = ''
    let phone = ''
    let showPreloader = true
    let phoneMask = {
        mask: '+{7} (000) 000-00-00'
    }
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – Input</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Input <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Поле для пользовательского ввода
        </Text>
        <br />
        <Heading size={3}>Оставьте свои контактные данные:</Heading>
        <Grid m={4} s={1}>
            <Input wide type="text" placeholder="Имя" bind:value={ firstname } />
            <Input wide type="email" placeholder="Email" bind:value={ email } />
            <Input wide type="tel" placeholder="Контактный телефон" bind:value={ phone } mask={ phoneMask } />
        </Grid>
        <Text>Введённое имя: { firstname }</Text>
        <Text>Введённый email: { email }</Text>
        <Text>Введённый номер телефона: { phone }</Text>
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={InputExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">wide <ParameterType value="boolean" /></Heading>
        <Text>Если этот параметр присутствует (без значения), компонент будет иметь свойство <code>width: 100%</code></Text>
        <Heading size={4} className="blue-text">mask <ParameterType value="object" /></Heading>
        <Text>Маска для поля ввода (Подробнее: <Link href="https://www.npmjs.com/package/svelte-imask" target="_BLANK">svelte-imask</Link>)</Text>
        <Heading size={4} className="blue-text">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута id</Text>
        <Heading size={4} className="blue-text">min <ParameterType value="number" /></Heading>
        <Text>Аналог стандартного атрибута min</Text>
        <Heading size={4} className="blue-text">max <ParameterType value="number" /></Heading>
        <Text>Аналог стандартного атрибута max</Text>
        <Heading size={4} className="blue-text">name <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута name</Text>
        <Heading size={4} className="blue-text">step <ParameterType value="number" /></Heading>
        <Text>Аналог стандартного атрибута step</Text>
        <Heading size={4} className="blue-text">list <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута list</Text>
        <Heading size={4} className="blue-text">value <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута value</Text>
        <Heading size={4} className="blue-text">pattern <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута pattern</Text>
        <Heading size={4} className="blue-text">placeholder <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута placeholder</Text>
        <Heading size={4} className="blue-text">type <ParameterType value="enum" /></Heading>
        <Text>Аналог стандартного атрибута type</Text>
        <Heading size={4} className="blue-text">readonly <ParameterType value="boolean" /></Heading>
        <Text>
            Аналог стандартного атрибута readonly <br />
            Значение по умолчанию: <code>false</code>
        </Text>
        <Heading size={4} className="blue-text">multiple <ParameterType value="boolean" /></Heading>
        <Text>
            Аналог стандартного атрибута multiple <br />
            Значение по умолчанию: <code>false</code>
        </Text>
        <Heading size={4} className="blue-text">disabled <ParameterType value="boolean" /></Heading>
        <Text>
            Аналог стандартного атрибута disabled <br />
            Значение по умолчанию: <code>false</code>
        </Text>
        <Heading size={4} className="blue-text">autofocus <ParameterType value="boolean" /></Heading>
        <Text>
            Аналог стандартного атрибута autofocus <br />
            Значение по умолчанию: <code>false</code>
        </Text>
        <Heading size={4} className="blue-text">required <ParameterType value="boolean" /></Heading>
        <Text>Аналог стандартного атрибута required</Text>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
    
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:input</Heading>
        <Heading size={4} className="blue-text">on:change</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
        <Heading size={4} className="blue-text">on:focus</Heading>
        <Heading size={4} className="blue-text">on:blur</Heading>
        <Heading size={4} className="blue-text">on:mouseover</Heading>
        <Heading size={4} className="blue-text">on:mouseleave</Heading>
        <Heading size={4} className="blue-text">on:mouseup</Heading>
        <Heading size={4} className="blue-text">on:mousedown</Heading>
    </main>
</div>
