<script lang="ts">
    export let href = ''
    export let target = '_SELF'
    export let color = 'var(--blue)'
    export let borderWidth = 4
    export let underline = true
    export let className = ''
</script>

<a {href} {target} class="kit-link {className}" style:color on:click on:mouseover on:focus on:mouseleave>
    <slot />
    { #if underline }
        <span class="kit-link-underline" style:background-color={ color } style:height={ borderWidth + 'px' }></span>
    { /if }
</a>

<style>
    a.kit-link {
        display: inline-block;
        position: relative;
        color: var(--blue);
        padding-bottom: 4px;
    }
    .kit-link-underline {
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        content: '';
        transition: 0.1s ease-in-out;
        background-color: var(--blue);
    }
    a.kit-link:hover .kit-link-underline {
        width: 50%;
    }
</style>