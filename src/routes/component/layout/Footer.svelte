<script lang="ts">
    import { Code, Heading, Grid, Window, Footer, Text, ParameterType } from '$lib/components'
    import ButtonExample from '$lib/../codes/ButtonExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Footer</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Footer <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Кнопки являются неотъемлимой частью современных веб-приложений
        </Text>
        <br />
        <Window placeholder contentAmount={5} padding={{ bottom: 0 }}>
            <Footer slot="footer" align="center" contentWidth="100%" padding={{ x: 1 }}>
                <Grid m={3} s={1}>
                    <Heading size={3}>This is a Footer</Heading>
                    <Heading size={3}>Footer © 2022</Heading>
                    <Heading size={3}>urfu-ui.len0xx.ru</Heading>
                </Grid>
            </Footer>
        </Window>
        <br />
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={ButtonExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} color="var(--blue)">variant</Heading>
        <Text>Вариант отображения кнопки (вставляется в атрибут class). Поддерживаются два стандартных значения: <code>primary</code> и <code>blue</code></Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>
            Параметр для связки с HTML-элементом, который лежит в основе компонента <br />
            (аналог стандартного <code>bind:this</code>)
        </Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className</Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <Heading size={4} color="var(--blue)">actionType</Heading>
        <Text>Аналог стандартного атрибута action</Text>
    </main>
</div>
