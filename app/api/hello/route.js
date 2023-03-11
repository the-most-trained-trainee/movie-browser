export async function GET(request) {


  // const result = await fetch(`http://www.omdbapi.com/?apikey=15904ce&s=${search}`, {
  //   cache: "no-store",
  // });
  // const data = await result.json();
  // return data.Search;


  return new Response('Hello, Next.js!')
}
