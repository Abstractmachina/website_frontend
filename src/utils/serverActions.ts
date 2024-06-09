import { Footer, Header } from "@/types/payload-types"


export async function fetchGlobals() : Promise<{
    header: Header,
    footer: Footer
  }>{
    const { data } = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => res.json())
    
      return {
        header: data.Header,
        footer: data.Footer,
      }
}