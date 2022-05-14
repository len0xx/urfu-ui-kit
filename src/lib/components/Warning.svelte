<script lang="ts">
    import warningIcon from '../img/shield-exclamation.svg'
</script>

<div class="kit-warning">
    <img src={ warningIcon } alt="Warning" width="24" height="24">
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
    
    .kit-warning img {
        display: inline-block;
        vertical-align: middle;
        margin-right: 16px;
        margin-bottom: 6px;
    }
</style>
