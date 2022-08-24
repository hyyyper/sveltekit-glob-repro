export async function load({ fetch }) {
    const res = await fetch('/it-works/blog/posts.json')

    const { glob } = await res.json()
    return { glob }
}
