<script lang="ts">
    import { Text, Link, Heading, Warning } from '$lib/components'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Как начать использовать</title>
</svelte:head>

<div class="content">
    <main>
        <Heading size={1}>Как начать пользоваться библиотекой</Heading>
        <!-- <Text className="medium">
            Библиотека Svelte компонентов для упрощённого построения современных веб-приложений Уральского федерального университета
        </Text> -->
        <Warning>
            Библиотека находится в стадии <code>beta</code> и может иметь некоторые проблемы с отображением компонентов или страниц
        </Warning>
        <br /><br />
        <Text>
            <Link variant="interactive" href="https://github.com" lineWidth={3} target="_BLANK">GitHub</Link>
        </Text>
        <br />
        <br />
    </main>
</div>
