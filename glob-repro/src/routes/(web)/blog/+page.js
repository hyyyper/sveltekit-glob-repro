export async function load({ fetch }) {
    const res = await fetch('/blog/posts.json')

    const { glob } = await res.json()
    return { glob }
}
