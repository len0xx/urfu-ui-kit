<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
    import Text from '$lib/components/Text.svelte'
    import Divider from '$lib/components/Divider.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Button from '$lib/components/Button.svelte'
    import Announce from '$lib/components/Announce.svelte'
    import Preloader from '$lib/components/Preloader.svelte'
    import ParameterType from '$lib/components/ParameterType.svelte'

    import AnnounceExample from '$lib/../codes/AnnounceExample'

    let loaded = false
    let showPreloader = true
    const pageLoaded = () => {
        loaded = true
        setTimeout(() => showPreloader = false, 250)
    }
    onMount(pageLoaded)
</script>

<svelte:head>
    <title>УрФУ UI Kit – Announce</title>
</svelte:head>

{ #if showPreloader }
    <Preloader bind:invisible={ loaded } />
{ /if }

<div class="content">
    <main>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <Heading size={1}>Announce <a href="#" class="page-link">🔗</a></Heading>
        <Text className="medium">
            Имиджевый блок с двумя колонками текста и картинкой
        </Text>
        <br />
    </main>
</div>
<Announce image="/img/graduates.jpg" vector="/img/text-vector.svg">
    <Heading size={1} slot="first" marginTop={0}>Магистратура предоставляет возможности</Heading>
    <svelte:fragment slot="second">
        <Text>В рейтинге «100 лучших российских вузов» по версии Forbes УрФУ занял 4-ое место, обогнав многие столичные вузы — это лучший результат среди нестоличных вузов России.</Text>
        <br />
        <Divider />
        <br />
        <Text className="fourty-text">Повышает шансы на трудоустройство и увеличение заработной платы</Text>
        <Text className="fourty-text">Получать образование, совмещая с работой или стажировкой</Text>
        <Text className="fourty-text">Построить индивидуальную траекторию обучения</Text>
        <Text className="fourty-text">Получать повышенные стипендии</Text>
        <Text className="fourty-text">Заниматься наукой</Text>
        <br />
        <Button>Поступить</Button>
    </svelte:fragment>
</Announce>
<div class="content">
    <main>
        <br />
        <br />

        <Heading size={3}>Пример использования:</Heading>
        <Code val={AnnounceExample} />
        <br />

        <Heading size={3}>Параметры:</Heading>
        <Heading size={4} className="blue-text">imagePosition <ParameterType value="enum" /></Heading>
        <Text>
            Положение изображения (которое задаётся через параметр <code>image</code>) в контейнере <br />
            Поддерживаемые значения: <code>left</code>, <code>right</code> <br />
            Значение по умолчанию: <code>right</code>
        </Text>
        <Heading size={4} className="blue-text">image <ParameterType value="string" /></Heading>
        <Text>Ссылка на изображение (обычно растровое), отображаемое в левой или правой колонке (в зависимости от значения параметра <code>imagePosition</code>)</Text>
        <Heading size={4} className="blue-text">vector <ParameterType value="string" /></Heading>
        <Text>Ссылка на изображение (обычно векторное), отображаемое в левом нижнем углу компонента (если <code>imagePosition = right</code>)</Text>
        <Heading size={4} className="blue-text">color <ParameterType value="string" /></Heading>
        <Text>
            Цвет заднего фона <br />
            Значение по умолчанию: <code>var(--blue)</code>
        </Text>
        <Heading size={4} className="blue-text">textColor <ParameterType value="string" /></Heading>
        <Text>
            Цвет текста <br />
            Значение по умолчанию: <code>white</code>
        </Text>
        <br />

        <Heading size={3}>Слоты:</Heading>
        <Heading size={4} className="blue-text">first</Heading>
        <Text>Контент первой текстовой колонки</Text>
        <Heading size={4} className="blue-text">second</Heading>
        <Text>Контент второй текстовой колонки</Text>
    </main>
</div>
