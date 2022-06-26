<script lang="ts">
    import { Code, Heading, Progress, Text, ParameterType } from '$lib/components'
    import PreloaderExample from '$lib/../codes/PreloaderExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Preloader</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Preloader <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Экран с анимацией загрузки, который пропадает после того, как страница полностью загружена
        </Text>
        <br />
        <div class="preloader-win">
            <div class="close-btn ui-btn"></div>
            <div class="hide-btn ui-btn"></div>
            <div class="expand-btn ui-btn"></div>
            <Progress />
        </div>
        <br />
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={PreloaderExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} color="var(--blue)">size <ParameterType value="enum" /></Heading>
        <Text>Размер анимированной иконки. <br /> Поддерживаются три стандартных значения: <code>S</code>, <code>M</code> и <code>L</code> <br /> Значение по умолчанию: <code>M</code></Text>
        <Heading size={4} color="var(--blue)">hideOnLoad <ParameterType value="boolean" /></Heading>
        <Text>Флаг, отвечающий за то, скрывать ли компонент после загрузки страницы или нет. <br /> Значение по умолчанию: <code>true</code> </Text>
        <Heading size={4} color="var(--blue)">delay <ParameterType value="number" /></Heading>
        <Text>Задержка перед тем, как компонент будет скрыт после загрузки страницы (в мс). <br /> Значение по умолчанию: <code>0</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
    
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
    </main>
</div>

<style>
    .preloader-win {
        display: grid;
        position: relative;
        place-content: center;
        place-items: center;
        width: 100%;
        min-height: 500px;
        background-color: white;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 12px;
    }

    .preloader-win .ui-btn {
        --btn-size: 16px;
        --btn-padding: calc(var(--btn-size) / 2);
        --window-padding: 16px;
        
        display: block;
        position: absolute;
        width: var(--btn-size);
        height: var(--btn-size);
        border-radius: 100%;
    }

    .preloader-win .ui-btn.close-btn {
        top: var(--window-padding);
        left: var(--window-padding);
        background-color: rgb(237, 106, 93);
    }

    .preloader-win .ui-btn.hide-btn {
        top: var(--window-padding);
        left: calc(var(--window-padding) + calc(var(--btn-size) * 1) + calc(var(--btn-padding) * 1));
        background-color: rgb(245, 191, 79);
    }

    .preloader-win .ui-btn.expand-btn {
        top: var(--window-padding);
        left: calc(var(--window-padding) + calc(var(--btn-size) * 2) + calc(var(--btn-padding) * 2));
        background-color: rgb(98, 197, 84);
    }
</style>
