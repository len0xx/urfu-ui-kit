export default `<Div align="center" margin={{ y: 1 }} padding={{ y: 1, x: 1 }} className="bordered-div">
    Текст внутри <code>Div</code>
</Div>

<style>
    :global(.bordered-div) {
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
</style>`
