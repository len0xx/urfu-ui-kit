import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    optimizeDeps: {
        include: ['highlight.js', 'highlight.js/lib/core', 'lodash.get', 'lodash.isequal', 'lodash.clonedeep'],
    }
}

export default config
