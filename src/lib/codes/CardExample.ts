export default `<Grid m={3}>
    <Card variant="white" color="red-1">
        <svelte:fragment slot="title">Svelte</svelte:fragment>
        <svelte:fragment slot="text">Svelte is a radical new approach to building user interfaces</svelte:fragment>
        <svelte:fragment slot="right">Перейти</svelte:fragment>
    </Card>
    <Card variant="white" color="blue-2">
        <svelte:fragment slot="title">React</svelte:fragment>
        <svelte:fragment slot="text">A JavaScript library for building user interfaces</svelte:fragment>
        <svelte:fragment slot="right">Перейти</svelte:fragment>
    </Card>
    <Card variant="white" color="red-2">
        <svelte:fragment slot="title">Vue</svelte:fragment>
        <svelte:fragment slot="text">The Progressive JavaScript Framework</svelte:fragment>
        <svelte:fragment slot="right">Перейти</svelte:fragment>
    </Card>
</Grid>`
