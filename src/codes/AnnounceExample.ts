export default `<Announce image="/img/graduates.jpg" vector="/img/text-vector.svg">
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
</Announce>`
