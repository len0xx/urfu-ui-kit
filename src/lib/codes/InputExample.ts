export default `<script>
    let firstname = ''
    let email = ''
    let phone = ''

    let phoneMask = {
        mask: '+{7} (000) 000-00-00'
    }
</script>

<Grid m={4} s={1}>
    <Input wide type="text" placeholder="Имя" bind:value={ firstname } />
    <Input wide type="email" placeholder="Email" bind:value={ email } />
    <Input wide type="tel" placeholder="Контактный телефон" bind:value={ phone } mask={ phoneMask } />
</Grid>

<Text>Введённое имя: { firstname }</Text>
<Text>Введённый email: { email }</Text>
<Text>Введённый номер телефона: { phone }</Text>`
