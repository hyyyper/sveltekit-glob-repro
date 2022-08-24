export async function GET() {
    const glob = import.meta.glob("../**/*.md")
    console.log("(web) glob...")
    console.log(glob)


    return new Response(JSON.stringify({ glob: Object.keys(glob) }))
}