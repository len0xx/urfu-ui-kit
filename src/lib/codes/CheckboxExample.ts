export default `<script>
    let group = ["hello", "bye"]
</script>

<Checkbox name="test" bind:group value="hello">
    Click me! (hello)
</Checkbox>
<Checkbox name="test" bind:group value="bye">
    Click me! (bye)
</Checkbox>
<br />
Selected: { group.toString() }`
