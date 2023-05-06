export default `<Announce image="/img/graduates.jpg" vector="/img/text-vector.svg">
    <Heading size={1} slot="first" margin={{ top: 0 }}>Магистратура предоставляет возможности</Heading>
    <svelte:fragment slot="second">
        <Text>В рейтинге «100 лучших российских вузов» по версии Forbes УрФУ занял 4-ое место, обогнав многие столичные вузы — это лучший результат среди нестоличных вузов России.</Text>
        <br />
        <Divider />
        <br />
        <Text opacity={0.4}>Повышает шансы на трудоустройство и увеличение заработной платы</Text>
        <Text opacity={0.4}>Получать образование, совмещая с работой или стажировкой</Text>
        <Text opacity={0.4}>Построить индивидуальную траекторию обучения</Text>
        <Text opacity={0.4}>Получать повышенные стипендии</Text>
        <Text opacity={0.4}>Заниматься наукой</Text>
        <br />
        <Button>Поступить</Button>
    </svelte:fragment>
</Announce>`
