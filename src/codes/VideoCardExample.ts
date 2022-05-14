export default `<script>
    let videos = [0, 1, 2, 3]
</script>

<Grid m={4}>
    { #each videos as video }
        <VideoCard name="Иванов Иван" position="Студент 3 курса" description="Учится в ИРИТ-РтФ" />
    { /each }
</Grid>`
