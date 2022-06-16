<script lang="ts">
    import { onMount } from 'svelte'
    import { Code, Heading, Grid, Expandable, Text, Preloader, ParameterType } from '$lib/components'

    import ExpandableExample from '$lib/../codes/ExpandableExample'

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)

    let expandables: {
        open: () => void,
        close: () => void,
        toggle: () => void
    }[] = []

    const toggleExpandable = (index: number) => {
        expandables[index].toggle()
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
        <Heading size={1}>Expandable <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Компонент с раскрывающимся контентом
        </Text>
        <br />
        <Grid m={2} ratio="1:2" gap={2}>
            <Heading size={2} marginTop={0}>FAQ</Heading>
            <div>
                <Expandable bind:this={ expandables[0] } on:click={ () => toggleExpandable(0) }>
                    <svelte:fragment slot="header">Нажми на меня</svelte:fragment>
                    <svelte:fragment slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, in dolore itaque nemo rerum quos numquam nostrum. Dignissimos nihil, eius quibusdam harum, voluptate sed nam, rerum earum aperiam eaque dolorum.</svelte:fragment>
                </Expandable>
                <Expandable bind:this={ expandables[1] } on:click={ () => toggleExpandable(1) }>
                    <svelte:fragment slot="header">Нажми на меня</svelte:fragment>
                    <svelte:fragment slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, in dolore itaque nemo rerum quos numquam nostrum. Dignissimos nihil, eius quibusdam harum, voluptate sed nam, rerum earum aperiam eaque dolorum.</svelte:fragment>
                </Expandable>
            </div>
        </Grid>
        <br />
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={ExpandableExample} />
        <br />
        
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
        
        <Heading size={3}>Слоты:</Heading>
        <Heading size={4} className="blue-text">header</Heading>
        <Text>Слот для заголовка (отображается всегда)</Text>
        <Heading size={4} className="blue-text">text</Heading>
        <Text>Слот для внутреннего текста (отображается только, когда <code>active = true</code>)</Text>
        <br />
    
        <Heading size={3}>Методы:</Heading>
        <Heading size={4} className="blue-text">open</Heading>
        <Text>Метод для открытия компонента</Text>
        <Heading size={4} className="blue-text">close</Heading>
        <Text>Метод для закрытия компонента</Text>
        <Heading size={4} className="blue-text">toggle</Heading>
        <Text>Метод для открытия/закрытия компонента</Text>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
        <Heading size={4} className="blue-text">on:mouseover</Heading>
        <Heading size={4} className="blue-text">on:mouseleave</Heading>
        <Heading size={4} className="blue-text">on:mouseup</Heading>
        <Heading size={4} className="blue-text">on:mousedown</Heading>
    </main>
</div>
