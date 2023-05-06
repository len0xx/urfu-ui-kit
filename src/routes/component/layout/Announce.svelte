<script lang="ts">
    import { Code, Heading, Announce, Divider, Button, Text, ParameterType } from '$lib/components'
    import CodeExample from '$lib/codes/AnnounceExample'
</script>

<svelte:head>
    <title>УрФУ UI Kit – Announce</title>
</svelte:head>

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Announce <a href="#" class="page-link" title="Ссылка на текущую страницу">🔗</a></Heading>
        <Text className="medium">
            Имиджевый блок с двумя колонками текста и картинкой
        </Text>
        <Heading size={3} className="underlined-text" margin={{ y: 1.5 }}>Пример использования:</Heading>
    </main>
</div>
<Announce image="/img/graduates.jpg" vector="/img/text-vector.svg">
    <svelte:fragment slot="first">
        <Heading className="mobile-hide" size={1} margin={{ top: 0 }}>Магистратура предоставляет возможности</Heading>
        <Heading className="pc-hide" size={1} margin={{ y: 0 }}>Магистратура предоставляет возможности</Heading>
    </svelte:fragment>
    <svelte:fragment slot="second">
        <Text margin={{ top: 0 }}>В рейтинге «100 лучших российских вузов» по версии Forbes УрФУ занял 4-ое место, обогнав многие столичные вузы — это лучший результат среди нестоличных вузов России.</Text>
        <Divider margin={{ y: 2 }} />
        <Text opacity={ 0.4 }>Повышает шансы на трудоустройство и увеличение заработной платы</Text>
        <Text opacity={ 0.4 }>Получать образование, совмещая с работой или стажировкой</Text>
        <Text opacity={ 0.4 }>Построить индивидуальную траекторию обучения</Text>
        <Text opacity={ 0.4 }>Получать повышенные стипендии</Text>
        <Text opacity={ 0.4 }>Заниматься наукой</Text>
        <br />
        <Button className="mobile-hide">Поступить</Button>
        <Button className="pc-hide wide">Поступить</Button>
    </svelte:fragment>
</Announce>
<div class="content">
    <main>
        <br />
        <br />

        <Heading size={3} className="underlined-text">Исходный код для примера выше:</Heading>
        <Code val={CodeExample} />
        <br />

        <Heading size={3} className="underlined-text">Параметры:</Heading>
        <Heading size={4} color="var(--blue)">imagePosition <ParameterType value="enum" /></Heading>
        <Text>
            Положение изображения (которое задаётся через параметр <code>image</code>) в контейнере <br />
            Поддерживаемые значения: <code>left</code>, <code>right</code> <br />
            Значение по умолчанию: <code>right</code>
        </Text>
        <Heading size={4} color="var(--blue)">image <ParameterType value="string" /></Heading>
        <Text>Ссылка на изображение (обычно растровое), отображаемое в левой или правой колонке (в зависимости от значения параметра <code>imagePosition</code>)</Text>
        <Heading size={4} color="var(--blue)">vector <ParameterType value="string" /></Heading>
        <Text>Ссылка на изображение (обычно векторное), отображаемое в левом нижнем углу компонента (если <code>imagePosition = right</code>)</Text>
        <Heading size={4} color="var(--blue)">color <ParameterType value="string" /></Heading>
        <Text>
            Цвет заднего фона <br />
            Значение по умолчанию: <code>var(--blue)</code>
        </Text>
        <Heading size={4} color="var(--blue)">textColor <ParameterType value="string" /></Heading>
        <Text>
            Цвет текста <br />
            Значение по умолчанию: <code>white</code>
        </Text>
        <Heading size={4} color="var(--blue)">node <ParameterType value="HTMLElement" /></Heading>
        <Text>Параметр для связки с HTML-элементом, который лежит в основе компонента <br /> (аналог стандартного <code>bind:this</code>)</Text>
        <Heading size={4} color="var(--blue)">id <ParameterType value="string" /></Heading>
        <Text>Аналог стандартного атрибута <code>id</code></Text>
        <Heading size={4} color="var(--blue)">className</Heading>
        <Text>Аналог стандартного атрибута <code>class</code></Text>
        <br />

        <Heading size={3} className="underlined-text">Слоты:</Heading>
        <Heading size={4} color="var(--blue)">first</Heading>
        <Text>Контент первой текстовой колонки</Text>
        <Heading size={4} color="var(--blue)">second</Heading>
        <Text>Контент второй текстовой колонки</Text>
    </main>
</div>
