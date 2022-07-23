export default `<script>
    let group = undefined
</script>

<Radio name="test" bind:group value="hello">
    Click me! (hello)
</Radio>
<Radio name="test" bind:group value="bye">
    Click me! (bye)
</Radio>
<br />
Selected: { group }`
