export async function GET() {
  return Response.json([
    {
      id: 1,
      text: 'Learn Next.js'
    },
    {
      id: 2,
      text: 'Build Fullstack Apps'
    }
  ]);
}
