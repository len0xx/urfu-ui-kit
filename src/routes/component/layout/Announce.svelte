<script lang="ts">
    import { onMount } from 'svelte'
    import Code from '$lib/components/Code.svelte'
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
        <p class="medium">
            Имиджевый блок с двумя колонками текста и картинкой
        </p>
        <br />
    </main>
</div>
<Announce image="/img/graduates.jpg" vector="/img/text-vector.svg">
    <Heading size={1} slot="first" marginTop={0}>Магистратура предоставляет возможности</Heading>
    <svelte:fragment slot="second">
        <p>В рейтинге «100 лучших российских вузов» по версии Forbes УрФУ занял 4-ое место, обогнав многие столичные вузы — это лучший результат среди нестоличных вузов России.</p>
        <br />
        <Divider />
        <br />
        <p class="fourty-text">Повышает шансы на трудоустройство и увеличение заработной платы</p>
        <p class="fourty-text">Получать образование, совмещая с работой или стажировкой</p>
        <p class="fourty-text">Построить индивидуальную траекторию обучения</p>
        <p class="fourty-text">Получать повышенные стипендии</p>
        <p class="fourty-text">Заниматься наукой</p>
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
        <p>
            Положение изображения (которое задаётся через параметр <code>image</code>) в контейнере <br />
            Поддерживаемые значения: <code>left</code>, <code>right</code> <br />
            Значение по умолчанию: <code>right</code>
        </p>
        <Heading size={4} className="blue-text">image <ParameterType value="string" /></Heading>
        <p>Ссылка на изображение (обычно растровое), отображаемое в левой или правой колонке (в зависимости от значения параметра <code>imagePosition</code>)</p>
        <Heading size={4} className="blue-text">vector <ParameterType value="string" /></Heading>
        <p>Ссылка на изображение (обычно векторное), отображаемое в левом нижнем углу компонента (если <code>imagePosition = right</code>)</p>
        <Heading size={4} className="blue-text">color <ParameterType value="string" /></Heading>
        <p>
            Цвет заднего фона <br />
            Значение по умолчанию: <code>var(--blue)</code>
        </p>
        <Heading size={4} className="blue-text">textColor <ParameterType value="string" /></Heading>
        <p>
            Цвет текста <br />
            Значение по умолчанию: <code>white</code>
        </p>
        <br />

        <Heading size={3}>Слоты:</Heading>
        <Heading size={4} className="blue-text">first</Heading>
        <p>Контент первой текстовой колонки</p>
        <Heading size={4} className="blue-text">second</Heading>
        <p>Контент второй текстовой колонки</p>
    </main>
</div>
