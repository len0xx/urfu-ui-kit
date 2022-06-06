<script lang="ts">
    import { onMount } from 'svelte'
    import { Code, Heading, Button, Text, Preloader, ParameterType } from '$lib/components'

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
    <title>УрФУ UI Kit – Header</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Header <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Кнопки являются неотъемлимой частью современных веб-приложений
        </Text>
        <br />
        <Button variant="primary">Открыть модальное окно</Button>
        <a href="/"><Button variant="blue">Вернуться на главную</Button></a>
        <br />
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={ButtonExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">variant</Heading>
        <Text>Вариант отображения кнопки (вставляется в атрибут class). Поддерживаются два стандартных значения: <code>primary</code> и <code>blue</code></Text>
        <Heading size={4} className="blue-text">className</Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <Heading size={4} className="blue-text">actionType</Heading>
        <Text>Аналог стандартного атрибута action</Text>
    </main>
</div>
