<script lang="ts">
    import { Heading, Tag, Button, Text } from '$lib/components'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Расположение</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Расположение <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Кнопки являются неотъемлимой частью современных веб-приложений
        </Text>
        <br />
        <Button variant="primary">Открыть модальное окно</Button>
        <Button variant="blue" href="/">Вернуться на главную</Button>
        <br />
        <br />
        <Heading size={3} className="underlined-text">Пример использования:</Heading>
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">variant <Tag>string</Tag></Heading>
        <Text>Вариант отображения кнопки. Поддерживаются два стандартных значения: <code>primary</code> и <code>blue</code></Text>
        <Heading size={4} color="var(--blue)">className <Tag>string</Tag></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <Heading size={4} color="var(--blue)">actionType <Tag>string</Tag></Heading>
        <Text>Аналог стандартного атрибута type</Text>
        <Heading size={4} color="var(--blue)">href <Tag>string</Tag></Heading>
        <Text>Используется для добавления кнопке функционала ссылки (переход по страницам по нажатию)</Text>
    </main>
</div>
