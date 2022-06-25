<script lang="ts">
    import { Code, Heading, Progress, Text, ParameterType } from '$lib/components'
    import ProgressExample from '$lib/../codes/ProgressExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Progress</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Progress <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Анимированная иконка, отображающая состояние загрузки
        </Text>
        <br />
        <Progress size="S" />
        <Progress size="M" />
        <Progress size="L" />
        <br />
        <br />
    
        <Heading size={3}>Пример использования:</Heading>
        <Code val={ProgressExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} color="var(--blue)">size <ParameterType value="enum" /></Heading>
        <Text>Размер загрузчика. Поддерживаются три значения: <code>S</code>, <code>M</code> и <code>L</code>. <br />
            Значение по умолчанию: <code>M</code></Text>
        <Heading size={4} color="var(--blue)">speed <ParameterType value="enum" /></Heading>
        <Text>Скорость вращения иконки. Поддерживаются три значения: <code>1</code>, <code>2</code> и <code>3</code>. <br />
            Значение по умолчанию: <code>2</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
    
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
    </main>
</div>
