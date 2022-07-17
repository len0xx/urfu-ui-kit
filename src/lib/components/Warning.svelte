<script lang="ts">
    import { Icon } from '.'
</script>

<div class="kit-warning">
    <Icon name="shield-exclamation" width={ 24 } height={ 24 } margin={{ right: 1, bottom: 0.45 }} />
    <slot />
</div>

<style>
    .kit-warning {
        display: block;
        position: relative;
        width: 100%;
        padding: 1.5em;
        text-align: left;
        border: 2px solid rgba(202, 175, 0, 0.62);
        border-radius: 1em;
        background-color: rgba(188, 163, 0, 0.1);
        color: black;
    }
</style>
