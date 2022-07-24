declare module 'svelte-highlight/styles/github-dark' {
    export default class GithubDark { }
}

declare module 'svelte-highlight/languages/xml' {
    interface Language {
        name?: string
        register: LanguageFn
    }

    class Language {
        constructor(name: string) {
            this.name = name
        }

        register<HLJS>(hljs: HLJS) {
            return new Language(this.name)
        }
    }

    const language = new Language('XML')

    export default language
}
