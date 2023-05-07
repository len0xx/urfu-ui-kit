export default `<Slider let:showPrevPage let:showNextPage background="white" duration={5} autoplay={true} dots={false}>
    <Slide img="/img/slide1-img.jpg">
        <Heading size={ 2 } color="var(--blue)">Стань инженером будущего в Институте новых материалов и технологий УрФУ</Heading>
        <Text className="heading-3">Актуальная информация о поступлении в университет в 2022 году:</Text>
        <Link href="" borderWidth={ 2 }>Бакалавриат и специалитет</Link><br /><br />
        <Link href="" borderWidth={ 2 }>Магистратура</Link><br />
        <svelte:fragment slot="buttons">
            <RoundButton size="M" variant="left" on:click={ showPrevPage } />
            <RoundButton size="M" variant="right" on:click={ showNextPage } />
        </svelte:fragment>
    </Slide>
    <Slide img="/img/slide2-img.jpg">
        <Heading size={ 2 } color="var(--blue)">Стань инженером будущего в Институте новых материалов и технологий УрФУ</Heading>
        <Text className="heading-3">Актуальная информация о поступлении в университет в 2022 году:</Text>
        <Link href="" borderWidth={ 2 }>Бакалавриат и специалитет</Link><br /><br />
        <Link href="" borderWidth={ 2 }>Магистратура</Link><br />
        <svelte:fragment slot="buttons">
            <RoundButton size="M" variant="left" on:click={ showPrevPage } />
            <RoundButton size="M" variant="right" on:click={ showNextPage } />
        </svelte:fragment>
    </Slide>
</Slider>`
