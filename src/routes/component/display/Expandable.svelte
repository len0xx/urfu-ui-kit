<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
    import Expandable from '$lib/components/Expandable.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Grid from '$lib/components/Grid.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import ParameterType from '$lib/components/ParameterType.svelte'

    import ExpandableExample from '$lib/../codes/ExpandableExample'

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)

    let expand = [false, false, false]

    const toggleExpandable = (index: number) => {
        expand[index] = !expand[index]
    }
</script>

<svelte:head>
    <title>УрФУ UI Kit – Expandable</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Expandable <a href="#" class="page-link">🔗</a></Heading>
        <p class="medium">
            Компонент с раскрывающимся контентом
        </p>
        <br />
        <Grid m={2} ratio="1:2" gap={2}>
            <Heading size={2} marginTop={0}>FAQ</Heading>
            <div>
                <Expandable bind:active={ expand[0] } on:click={ () => toggleExpandable(0) }>
                    <Heading size={3} className="blue-text" slot="header">Нажми на меня</Heading>
                    <p slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, in dolore itaque nemo rerum quos numquam nostrum. Dignissimos nihil, eius quibusdam harum, voluptate sed nam, rerum earum aperiam eaque dolorum.</p>
                </Expandable>
                <Expandable bind:active={ expand[1] } on:click={ () => toggleExpandable(1) }>
                    <Heading size={3} className="blue-text" slot="header">Нажми на меня</Heading>
                    <p slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, in dolore itaque nemo rerum quos numquam nostrum. Dignissimos nihil, eius quibusdam harum, voluptate sed nam, rerum earum aperiam eaque dolorum.</p>
                </Expandable>
            </div>
        </Grid>
        <br />
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={ExpandableExample} />
        <br />
        
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">active <ParameterType value="boolean" /></Heading>
        <p><code>true</code> – блок раскрыт, <code>false</code> – закрыт. <br />
            Значение по умолчанию: <code>false</code></p>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <p>Аналог стандартного атрибута class</p>
        <br />
        
        <Heading size={3}>Слоты:</Heading>
        <Heading size={4} className="blue-text">header</Heading>
        <p>Слот для заголовка (отображается всегда)</p>
        <Heading size={4} className="blue-text">text</Heading>
        <p>Слот для внутреннего текста (отображается только, когда <code>active = true</code>)</p>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
    </main>
</div>