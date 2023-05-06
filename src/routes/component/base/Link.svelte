<script lang="ts">
    import { Code, Heading, Link, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/codes/LinkExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Ссылки</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Link <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Обёртка над стандартным тегом <code>a</code> 
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <Link href="#" lineWidth={ 2 } variant="regular">Стандартная ссылка</Link><br />
        <Link href="#" lineWidth={ 2 } variant="hover">Подчёркивание при наведении</Link><br />
        <Link href="#" lineWidth={ 2 } variant="underlined">Статичное подчёркивание</Link><br />
        <Link href="#" lineWidth={ 2 } variant="interactive">Анимация при наведении</Link><br />
        <br />
        
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
    
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">href <ParameterType value="string" /></Heading>
        <Text>Ссылка для перехода по нажатию</Text>
		<Heading size={4} color="var(--blue)">target <ParameterType value="string" /></Heading>
        <Text>
            Определяет, где откроется ссылка из параметра <code>href</code> (в этом же окне, в новом и т.д.) <br />
            Значение по умолчанию: <code>_SELF</code>
        </Text>
        <Heading size={4} color="var(--blue)">variant <ParameterType value="enum" /></Heading>
        <Text>
            Вариант отображения <br />
            Поддерживаемые значения: <code>regular</code>, <code>hover</code>, <code>underlined</code> и <code>interactive</code> <br />
            Значение по умолчанию: <code>regular</code>
        </Text>
        <Heading size={4} color="var(--blue)">lineWidth <ParameterType value="number" /></Heading>
        <Text>Отступ по вертикали. (Устанавливается в <code>em</code>)</Text>
        <Heading size={4} color="var(--blue)">color <ParameterType value="number" /></Heading>
        <Text>Отступ сверху. (Устанавливается в <code>em</code>)</Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="number" /></Heading>
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
