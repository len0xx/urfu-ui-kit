<script lang="ts">
    import { Highlight } from 'svelte-highlight'
    import github from 'svelte-highlight/styles/github-dark'
    import language from 'svelte-highlight/languages/xml'

    export let val = ''
</script>

<svelte:head>
    { @html github }
</svelte:head>

<Highlight { language } code={ val } />
