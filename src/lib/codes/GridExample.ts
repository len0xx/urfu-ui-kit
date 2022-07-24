export default `<Grid xs={1} m={2} l={3} xl={4} gap={2}>
    <Card variant="white" color="blue-2">
        <svelte:fragment slot="title">Swift</svelte:fragment>
        <svelte:fragment slot="right">Перейти</svelte:fragment>
    </Card>
    <Card variant="white" color="red-1">
        <svelte:fragment slot="title">JavaScript</svelte:fragment>
        <svelte:fragment slot="right">Перейти</svelte:fragment>
    </Card>
    <Card variant="white" color="red-2">
        <svelte:fragment slot="title">C++</svelte:fragment>
        <svelte:fragment slot="right">Перейти</svelte:fragment>
    </Card>
    <Card variant="white" color="blue-1">
        <svelte:fragment slot="title">Go</svelte:fragment>
        <svelte:fragment slot="right">Перейти</svelte:fragment>
    </Card>
</Grid>`
