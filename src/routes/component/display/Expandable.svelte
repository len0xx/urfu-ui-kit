<script lang="ts">
    import { Code, Heading, Grid, Expandable, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/../codes/ExpandableExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Expandable</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Expandable <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Компонент с раскрывающимся контентом
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
        <Grid m={2} ratio="1:2" gap={2}>
            <Heading size={2} margin={{ top: 0 }}>FAQ</Heading>
            <div>
                <Expandable interactive>
                    <svelte:fragment slot="header">Нажми на меня</svelte:fragment>
                    <svelte:fragment slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, in dolore itaque nemo rerum quos numquam nostrum. Dignissimos nihil, eius quibusdam harum, voluptate sed nam, rerum earum aperiam eaque dolorum.</svelte:fragment>
                </Expandable>
                <Expandable interactive>
                    <svelte:fragment slot="header">Нажми на меня</svelte:fragment>
                    <svelte:fragment slot="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, in dolore itaque nemo rerum quos numquam nostrum. Dignissimos nihil, eius quibusdam harum, voluptate sed nam, rerum earum aperiam eaque dolorum.</svelte:fragment>
                </Expandable>
            </div>
        </Grid>
        <br />
        <br />
        
        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />
        
        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">interactive <ParameterType value="boolean" /></Heading>
        <Text>
            Если значение = <code>true</code>, то компонент будет раскрываться и закрываться по нажатию на него <br />
            Значение по умолчанию: <code>false</code>
        </Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута class</Text>
        <br />
        
        <Heading size={3} className="underlined-text">Слоты:</Heading>
        <Heading size={4} color="var(--blue)">header</Heading>
        <Text>Слот для заголовка (отображается всегда)</Text>
        <Heading size={4} color="var(--blue)">text</Heading>
        <Text>Слот для внутреннего текста (отображается только когда <code>active = true</code>)</Text>
        <br />
    
        <Heading size={3} className="underlined-text">Методы:</Heading>
        <Heading size={4} color="var(--blue)">open</Heading>
        <Text>Метод для открытия компонента</Text>
        <Heading size={4} color="var(--blue)">close</Heading>
        <Text>Метод для закрытия компонента</Text>
        <Heading size={4} color="var(--blue)">toggle</Heading>
        <Text>Метод для открытия/закрытия компонента</Text>
        <br />
        
        <Heading size={3} className="underlined-text">Поддерживаемые события:</Heading>
        <Heading size={4} color="var(--blue)">on:click</Heading>
        <Heading size={4} color="var(--blue)">on:mouseover</Heading>
        <Heading size={4} color="var(--blue)">on:mouseleave</Heading>
        <Heading size={4} color="var(--blue)">on:mouseup</Heading>
        <Heading size={4} color="var(--blue)">on:mousedown</Heading>
    </main>
</div>
