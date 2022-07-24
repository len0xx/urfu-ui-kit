<script lang="ts">
    import { Code, Icon, Heading, Button, Modal, Rainbow, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/codes/ButtonExample'

    let modal: {
        open: () => void,
        close: () => void
    }

    const icons = ['pack/bookmark-outlined', 'pack/bookmark-fill']
    let isBookmarked = false
</script>

<svelte:head>
    <title>УрФУ UI Kit – Button</title>
</svelte:head>

<Modal bind:this={ modal } align="center">
    <Heading size={2} color="var(--blue)">Модальное окно</Heading>
    <Text className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repudiandae numquam sint nobis labore quibusdam.</Text>
    <br />
    <Button variant="blue" on:click={ modal.close }>Закрыть</Button>
    <Rainbow size="L" slot="footer" />
</Modal>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Button <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Кнопки являются неотъемлимой частью современных веб-приложений
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <Button variant="primary" size="S" on:click={ modal.open }>Открыть модальное окно</Button>
        <Button variant="blue" size="M" href="/">Вернуться на главную</Button>
        <Button variant="primary" size="L" on:click={ () => isBookmarked = !isBookmarked }>
            <Icon name={ isBookmarked ? icons[1] : icons[0] } slot="before" width={ 24 } height={ 24 } />
            <svelte:fragment>
                { isBookmarked ? 'Убрать из закладок' : 'Добавить в закладки' }
            </svelte:fragment>
        </Button>
        <br />
        <br />
        
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
        
        <Heading size={3} className="underlined-text">Параметры:</Heading>
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
        
        <Heading size={3} className="underlined-text">Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:focus</Heading>
        <Heading size={4} color="var(--blue)">on:blur</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
        <br />
        
        <Heading size={3} className="underlined-text">Слоты:</Heading>
        <Heading size={4} color="var(--blue)">default</Heading>
        <Text>Основное содержание кнопки</Text>
        <Heading size={4} color="var(--blue)">before</Heading>
        <Text>Контент перед основным содержанием</Text>
        <Heading size={4} color="var(--blue)">after</Heading>
        <Text>Контент после основного содержания</Text>
    </main>
</div>
