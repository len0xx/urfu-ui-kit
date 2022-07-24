<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit'   
    
    export const load: Load = ({ error, status }) => {
        return {
            props: {
                message: error.message,
                status
            }
        }
    }
</script>

<script lang="ts">
    import { Text, Heading, Rainbow } from '$lib/components'

    export let message: string
    export let status: number
</script>

<svelte:head>
    <title>Ошибка {status}</title>
    <style>
        body {
            background: rgb(239, 242, 245);
        }
    </style>
</svelte:head>

<section class="error-wrapper">
    <div>
        <div class="white-block">
            <Heading size={1}>Ошибка { status }</Heading>
            <Text><b>{ message }</b></Text>
            <Text><a href="/">Перейти на главную</a></Text>
        </div>
        <Rainbow size="S" />
    </div>
</section>

<style>
    section.error-wrapper {
        display: grid;
        position: relative;
        place-content: center;
        place-items: center;
        min-height: 80vh;
        width: 100%;
    }

    section.error-wrapper .white-block {
        min-width: min(50vw, 450px);
        max-width: max(70vw, 900px);
        border-radius: 0;
    }

    @media screen and (max-width: 568px) {
        section.error-wrapper .white-block {
            max-width: 90vw;
        }
    }

    a {
        color: blue;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
