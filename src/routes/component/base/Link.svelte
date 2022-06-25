<script lang="ts">
    import { Code, Heading, Link, Text, ParameterType } from '$lib/components'
    import LinkExample from '$lib/../codes/LinkExample'
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
        <br />
        <Link href="#" lineWidth={ 2 } variant="regular">Стандартная ссылка</Link><br />
        <Link href="#" lineWidth={ 2 } variant="hover">Подчёркивание при наведении</Link><br />
        <Link href="#" lineWidth={ 2 } variant="underlined">Статичное подчёркивание</Link><br />
        <Link href="#" lineWidth={ 2 } variant="interactive">Анимация при наведении</Link><br />
        <br />
        <br />
        
        <Heading size={3}>Пример использования:</Heading>
        <Code val={LinkExample} />
        <br />
    
        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">href <ParameterType value="string" /></Heading>
        <Text>Ссылка для перехода по нажатию</Text>
        <Heading size={4} className="blue-text">variant <ParameterType value="enum" /></Heading>
        <Text>
            Вариант отображения <br />
            Поддерживаемые значения: <code>regular</code>, <code>hover</code>, <code>underlined</code> и <code>interactive</code> <br />
            Значение по умолчанию: <code>regular</code>
        </Text>
        <Heading size={4} className="blue-text">lineWidth <ParameterType value="number" /></Heading>
        <Text>Отступ по вертикали. (Устанавливается в <code>em</code>)</Text>
        <Heading size={4} className="blue-text">color <ParameterType value="number" /></Heading>
        <Text>Отступ сверху. (Устанавливается в <code>em</code>)</Text>
        <Heading size={4} className="blue-text">className <ParameterType value="number" /></Heading>
        <Text>Отступ снизу. (Устанавливается в <code>em</code>)</Text>
        <br />
        
        <Heading size={3}>Поддерживаемые события:</Heading>
        <Heading size={4} className="blue-text">on:click</Heading>
        <Heading size={4} className="blue-text">on:focus</Heading>
        <Heading size={4} className="blue-text">on:blur</Heading>
        <Heading size={4} className="blue-text">on:mouseover</Heading>
        <Heading size={4} className="blue-text">on:mouseleave</Heading>
        <Heading size={4} className="blue-text">on:mouseup</Heading>
        <Heading size={4} className="blue-text">on:mousedown</Heading>
    </main>
</div>
