<script lang="ts">
    import { Code, Heading, Table, TRow, TCell, Link, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/codes/TableExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Table</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>TCell <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Отдельная ячейка внутри таблицы (<Link href="/component/display/Table">Table</Link>)
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <Table columns={ 4 }>
			<TRow underline={ false }>
				<TCell head={ true }>ID</TCell>
				<TCell head={ true }>Name</TCell>
				<TCell head={ true }>E-Mail</TCell>
				<TCell head={ true }>IP</TCell>
			</TRow>
			<TRow>
				<TCell>1</TCell>
				<TCell>John</TCell>
				<TCell>john@gmail.com</TCell>
				<TCell>192.168.0.1</TCell>
			</TRow>
			<TRow>
				<TCell>22</TCell>
				<TCell>John</TCell>
				<TCell>john@gmail.com</TCell>
				<TCell>192.168.0.1</TCell>
			</TRow>
		</Table>
        <br />
        <br />
        
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
        
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">head <ParameterType value="boolean" /></Heading>
        <Text>
			Показатель того, относится ли ячейка к верхнему уровню (аналог тега <code>th</code> в стандарте HTML) <br />
			Значение по умолчанию: <code>false</code>
		</Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>class</code></Text>
		<br />
    
        <Heading size={3} className="underlined-text">Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:focus</Heading>
        <Heading size={4} color="var(--blue)">on:blur</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
    </main>
</div>
