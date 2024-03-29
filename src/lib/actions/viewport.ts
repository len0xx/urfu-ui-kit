let intersectionObserver: IntersectionObserver

const ensureIntersectionObserver = () => {
    if (intersectionObserver) return

    intersectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const eventName = entry.isIntersecting ? 'enterViewport' : 'leaveViewport'
                entry.target.dispatchEvent(new CustomEvent(eventName))
            })
        }
    )
}

export default function viewport(element: Element) {
    ensureIntersectionObserver()

    intersectionObserver.observe(element)

    return {
        destroy() {
            intersectionObserver.unobserve(element)
        }
    }
}