<script lang="ts">
    export let title = ''
</script>

<div class="tag" {title}>
    <slot />
</div>

<style>
    .tag {
        display: inline-block;
        position: relative;
        vertical-align: top;
        font-size: 12px;
        padding: 4px;
        font-weight: 400;
        border-radius: 5px;
        color: rgb(66, 66, 66);
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: rgb(245, 245, 245);
        cursor: default;
        margin-left: 1em;
    }
</style>