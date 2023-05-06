<script lang="ts">
    import { Code, Heading, Card, Grid, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/codes/GridExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Grid</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Grid <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Выстраивайте контент в колонках.<br />
            Компонент возьмёт на себя все задачи по адаптированию контента к ширине экрана
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <Grid s={1} m={2} l={3} xl={4} gap={2}>
            <Card variant="white" color="blue-2">
                <svelte:fragment slot="title">Swift</svelte:fragment>
                <svelte:fragment slot="right">Перейти</svelte:fragment>
            </Card>
            <Card variant="white" color="red-1">
                <svelte:fragment slot="title">JavaScript</svelte:fragment>
                <svelte:fragment slot="right">Перейти</svelte:fragment>
            </Card>
            <Card variant="white" color="red-2">
                <svelte:fragment slot="title">C++</svelte:fragment>
                <svelte:fragment slot="right">Перейти</svelte:fragment>
            </Card>
            <Card variant="white" color="blue-1">
                <svelte:fragment slot="title">Go</svelte:fragment>
                <svelte:fragment slot="right">Перейти</svelte:fragment>
            </Card>
        </Grid>
        <br />
        <br />
    
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
    
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">xs <ParameterType value="number" /></Heading>
        <Text>
            Количество колонок на мобильных экранах (до 400 пикселей в ширину). <br />
            Поддерживаются значения от <code>1</code> до <code>12</code>
        </Text>
        <Heading size={4} color="var(--blue)">s <ParameterType value="number" /></Heading>
        <Text>
            Количество колонок на маленьких экранах (от 400 до 768 пикселей в ширину). <br />
            Поддерживаются значения от <code>1</code> до <code>12</code>
        </Text>
        <Heading size={4} color="var(--blue)">m <ParameterType value="number" /></Heading>
        <Text>
            Количество колонок на средних экранах (от 768 до 1000 пикселей в ширину). <br />
            Поддерживаются значения от <code>1</code> до <code>12</code>
        </Text>
        <Heading size={4} color="var(--blue)">l <ParameterType value="number" /></Heading>
        <Text>
            Количество колонок на широких экранах (от 1000 до 1440 пикселей в ширину). <br />
            Поддерживаются значения от <code>1</code> до <code>12</code>
        </Text>
        <Heading size={4} color="var(--blue)">xl <ParameterType value="number" /></Heading>
        <Text>
            Количество колонок на самых широких экранах (от 1440 пикселей в ширину). <br />
            Поддерживаются значения от <code>1</code> до <code>12</code>
        </Text>
        <Heading size={4} color="var(--blue)">customLayout <ParameterType value="string" /></Heading>
        <Text>
            Кастомное значение для свойства <code>grid-template-columns</code> <br />
            Поддерживаются любые валидные CSS значения. Например: <code>repeat(4, 1fr)</code>, <code>150px 250px</code> или <code>4fr 3fr 10em</code>
        </Text>
        <Heading size={4} color="var(--blue)">gap <ParameterType value="number" /></Heading>
        <Text>
            Расстояние между колонками и строчками. <br />
            Поддерживаются любые целочисленные значения
        </Text>
        <Heading size={4} color="var(--blue)">margin <ParameterType value="object" /></Heading>
        <Text>
            Объект, описывающий внешние отступы компонента. Имеет следующие свойства: <br />
            <code>x</code> – отступ по горизонтали <br />
            <code>y</code> – отступ по вертикали <br />
            <code>top</code> – отступ сверху <br />
            <code>bottom</code> – отступ снизу <br />
            <code>left</code> – отступ слева <br />
            <code>right</code> – отступ справа <br />
            Все значения могут иметь один из двух типов: <code>string</code> или <code>number</code> <br />
            В случае, если значение одного из свойств имеет тип <code>number</code>, ему будет добавлена единица измерения <code>em</code> <br />
            Пример: <code>margin={ '{{ top: 1, x: \'auto\' }}' }</code> будет преобразовано в <code>margin: 1em auto 0</code>
        </Text>
        <Heading size={4} color="var(--blue)">alignItems <ParameterType value="enum" /></Heading>
        <Text>
            Устанавливает значение <code>align-self</code> для всех прямых дочерних элементов как группы. В макете сетки он управляет выравниванием элементов по оси блока в пределах их области сетки. <br />
            Список поддерживаемых значений: <br />
            <code>normal</code>, <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>start</code>, <code>end</code>, <code>self-start</code>, <code>self-end</code>, <code>baseline</code>, <code>stretch</code>, <code>safe</code>, <code>unsafe</code>, <code>inherit</code>, <code>initial</code>, <code>unset</code>, <code>revert</code>, <code>revert-layer</code>
        </Text>
        <Heading size={4} color="var(--blue)">justifyItems <ParameterType value="enum" /></Heading>
        <Text>
            Определяет значение <code>justify-self</code> по умолчанию для всех элементов блока, предоставляя им всем способ выравнивания каждого блока по соответствующей оси по умолчанию. <br />
            Список поддерживаемых значений: <br />
            <code>normal</code>, <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>start</code>, <code>end</code>, <code>self-start</code>, <code>self-end</code>, <code>baseline</code>, <code>stretch</code>, <code>safe</code>, <code>unsafe</code>, <code>inherit</code>, <code>initial</code>, <code>unset</code>, <code>revert</code>, <code>revert-layer</code>
        </Text>
        <Heading size={4} color="var(--blue)">placeItems <ParameterType value="enum" /></Heading>
        <Text>
            Устанавливает значение для обоих свойств <code>alignItems</code> и <code>justifyItems</code> <br />
            Список поддерживаемых значений: <br />
            <code>normal</code>, <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>start</code>, <code>end</code>, <code>self-start</code>, <code>self-end</code>, <code>baseline</code>, <code>stretch</code>, <code>safe</code>, <code>unsafe</code>, <code>inherit</code>, <code>initial</code>, <code>unset</code>, <code>revert</code>, <code>revert-layer</code>
        </Text>
        <Heading size={4} color="var(--blue)">alignContent <ParameterType value="enum" /></Heading>
        <Text>
            Задает распределение пространства между элементами содержимого и вокруг них вдоль поперечной оси сетки. <br />
            Список поддерживаемых значений: <br />
            <code>normal</code>, <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>start</code>, <code>end</code>, <code>self-start</code>, <code>self-end</code>, <code>baseline</code>, <code>stretch</code>, <code>safe</code>, <code>unsafe</code>, <code>inherit</code>, <code>initial</code>, <code>unset</code>, <code>revert</code>, <code>revert-layer</code>, <code>space-between</code>, <code>space-around</code>, <code>space-evenly</code>
        </Text>
        <Heading size={4} color="var(--blue)">justifyContent <ParameterType value="enum" /></Heading>
        <Text>
            Определяет, как браузер распределяет пространство между элементами содержимого и вокруг них вдоль встроенной оси контейнера. <br />
            Список поддерживаемых значений: <br />
            <code>normal</code>, <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>start</code>, <code>end</code>, <code>self-start</code>, <code>self-end</code>, <code>baseline</code>, <code>stretch</code>, <code>safe</code>, <code>unsafe</code>, <code>inherit</code>, <code>initial</code>, <code>unset</code>, <code>revert</code>, <code>revert-layer</code>, <code>space-between</code>, <code>space-around</code>, <code>space-evenly</code>
        </Text>
        <Heading size={4} color="var(--blue)">placeContent <ParameterType value="enum" /></Heading>
        <Text>
            Устанавливает значение для обоих свойств <code>alignContent</code> и <code>justifyContent</code> <br />
            Список поддерживаемых значений: <br />
            <code>normal</code>, <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>start</code>, <code>end</code>, <code>self-start</code>, <code>self-end</code>, <code>baseline</code>, <code>stretch</code>, <code>safe</code>, <code>unsafe</code>, <code>inherit</code>, <code>initial</code>, <code>unset</code>, <code>revert</code>, <code>revert-layer</code>, <code>space-between</code>, <code>space-around</code>, <code>space-evenly</code>
        </Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>class</code></Text>
    </main>
</div>
