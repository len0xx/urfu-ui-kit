<script lang="ts">
    import { Code, Heading, Button, Modal, Rainbow, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/../codes/ButtonExample'

    let modal: {
        open: () => void,
        close: () => void
    }
</script>

<svelte:head>
    <title>УрФУ UI Kit – Button</title>
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
        <Heading size={1}>Button <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Кнопки являются неотъемлимой частью современных веб-приложений
        </Text>
        <br />
        <Button variant="primary" size="S" value="hello" on:click={ modal.open }>Открыть модальное окно</Button>
        <Button variant="blue" size="S" href="/">Вернуться на главную</Button>
        <br />    <br />
        <Button variant="primary" size="M" on:click={ modal.open }>Открыть модальное окно</Button>
        <Button variant="blue" size="M" href="/">Вернуться на главную</Button>
        <br />    <br />
        <Button variant="primary" size="L" on:click={ modal.open }>Открыть модальное окно</Button>
        <Button variant="blue" size="L" href="/">Вернуться на главную</Button>
        <br />
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={CodeExample} />
        <br />
        
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} color="var(--blue)">variant <ParameterType value="enum" /></Heading>
        <Text>
            Вариант отображения кнопки.  <br />
            Поддерживаются два значения: <code>primary</code> и <code>blue</code>.<br />
            Значение по умолчанию: <code>primary</code>
        </Text>
        <Heading size={4} color="var(--blue)">size <ParameterType value="enum" /></Heading>
        <Text>
            Размер кнопки.  <br />
            Поддерживаются три значения: <code>S</code>, <code>M</code> и <code>L</code>. <br />
            Значение по умолчанию: <code>M</code>
        </Text>
        <Heading size={4} color="var(--blue)">type <ParameterType value="string" /></Heading>
        <Text>
            Аналог стандартного атрибута type. <br />
            Значение по умолчанию: <code>submit</code>
        </Text>
        <Heading size={4} color="var(--blue)">href <ParameterType value="string" /></Heading>
        <Text>Используется для добавления кнопке функционала ссылки (переход по страницам по нажатию)</Text>
        <Heading size={4} color="var(--blue)">target <ParameterType value="string" /></Heading>
        <Text>
            Определяет, где откроется ссылка из параметра <code>href</code> (в этом же окне, в новом и т.д.) <br />
            Значение по умолчанию: <code>_SELF</code>
        </Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:focus</Heading>
        <Heading size={4} color="var(--blue)">on:blur</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
    </main>
</div>
