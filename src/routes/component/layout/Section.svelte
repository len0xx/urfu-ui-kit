<script lang="ts">
    import { onMount } from 'svelte'
    import { Code, Heading, Section, Text, Preloader, Tag } from '$lib/components'

    import ButtonExample from '$lib/../codes/ButtonExample'

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – Section</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Section <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Кнопки являются неотъемлимой частью современных веб-приложений
        </Text>
        <br />
        <Section align="left" contentWidth="800px">
            <Heading size={2}>Пример слева</Heading>
        </Section>
        <Section align="center">
            <Heading size={2}>Пример посередине</Heading>
        </Section>
        <Section align="right">
            <Heading size={2}>Пример справа</Heading>
        </Section>
        <br />
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={ButtonExample} />
        <br />
        
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">variant <Tag>string</Tag></Heading>
        <Text>Вариант отображения кнопки. Поддерживаются два стандартных значения: <code>primary</code> и <code>blue</code></Text>
        <Heading size={4} className="blue-text">className <Tag>string</Tag></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <Heading size={4} className="blue-text">actionType <Tag>string</Tag></Heading>
        <Text>Аналог стандартного атрибута type</Text>
        <Heading size={4} className="blue-text">href <Tag>string</Tag></Heading>
        <Text>Используется для добавления кнопке функционала ссылки (переход по страницам по нажатию)</Text>
    </main>
</div>
