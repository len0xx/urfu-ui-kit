<script lang="ts">
    import { Code, Heading, Modal, Button, Rainbow, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/../codes/ModalExample'

    let modal: {
        open: () => void,
        close: () => void,
        toggle: () => void
    }
</script>

<svelte:head>
    <title>УрФУ UI Kit – Modal</title>
</svelte:head>

<Modal bind:this={ modal } align="center">
    <Heading size={2} color="var(--blue)">Модальное окно</Heading>
    <Text className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repudiandae numquam sint nobis labore quibusdam.</Text>
    <br />
    <Button variant="blue" on:click={ () => modal.close() }>Закрыть</Button>
    <Rainbow size="L" slot="footer" />
</Modal>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Modal <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Модальное окно с полностью кастомизируемым контентом и кнопкой закрытия
        </Text>
        <br />
        <Button variant="primary" on:click={ modal.open }>Открыть модальное окно</Button>
        <br />
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={CodeExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} color="var(--blue)">closable <ParameterType value="boolean" /></Heading>
        <Text>
            Можно ли закрывать открытое модальное окно или нет <br />
            Значение по умолчанию: <code>true</code>
        </Text>
        <Heading size={4} color="var(--blue)">align <ParameterType value="enum" /></Heading>
        <Text>
            Выравнивание контента внутри модельного окна <br />
            Поддерживаемые значения: <code>left</code>, <code>center</code> и <code>right</code> <br />
            Значение по умолчанию: <code>left</code>
        </Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
    
        <Heading size={3}>Методы:</Heading>
        <Heading size={4} color="var(--blue)">open</Heading>
        <Text>Метод для открытия модального окна</Text>
        <Heading size={4} color="var(--blue)">close</Heading>
        <Text>Метод для закрытия модального окна</Text>
        <Heading size={4} color="var(--blue)">toggle</Heading>
        <Text>Метод для открытия/закрытия модального окна</Text>
        <br />
    
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:open</Heading>
        <Heading size={4} color="var(--blue)">on:close</Heading>
    </main>
</div>
