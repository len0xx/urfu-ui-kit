export default `<Announce image="/img/graduates.jpg" vector="/img/text-vector.svg">
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
</Announce>`
