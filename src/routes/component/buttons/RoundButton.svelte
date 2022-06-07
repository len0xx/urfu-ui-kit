<script lang="ts">
    import { onMount } from 'svelte'
    import { Code, Heading, RoundButton, Text, Preloader, ParameterType } from '$lib/components'

    import RoundButtonExample from '$lib/../codes/RoundButtonExample'

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – RoundButton</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>RoundButton <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Круглые кнопки с иконкой внутри
        </Text>
        <br />
        <RoundButton variant="plus" size="L" />
        <RoundButton variant="left" size="L" />
        <RoundButton variant="right" size="L" />
    
        <RoundButton variant="plus" size="M" />
        <RoundButton variant="left" size="M" />
        <RoundButton variant="right" size="M" />
    
        <RoundButton variant="plus" size="S" />
        <RoundButton variant="left" size="S" />
        <RoundButton variant="right" size="S" />
        <br />
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={RoundButtonExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">variant <ParameterType value="enum" /></Heading>
        <Text>
            Иконка, отображаемая внутри кнопки.  <br />
            Поддерживаются три стандартных значения: <code>left</code>, <code>right</code> и <code>plus</code>. <br />
            Значение по умолчанию: <code>plus</code>
        </Text>
        <Heading size={4} className="blue-text">size <ParameterType value="enum" /></Heading>
        <Text>
            Аналог стандартного атрибута action.  <br />
            Поддерживаются четыре стандартных значения: <code>S</code>, <code>M</code>, <code>L</code> и <code>XL</code>. <br />
            Значение по умолчанию: <code>M</code>
        </Text>
        <Heading size={4} className="blue-text">animate <ParameterType value="boolean" /></Heading>
        <Text>
            Анимация кнопки при нажатии <br />
            Значение по умолчанию: <code>true</code>
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
