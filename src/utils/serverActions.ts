import { Footer, Header } from "@/types/payload-types"


export async function fetchGlobals() : Promise<{
    header: Header | undefined,
    footer: Footer | undefined
  }>{
    const headerData = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals/header`, {
        method: 'GET',
    }).then(res => res.json());
      
    const footerData = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals/footer`, {
        method: 'GET',
    }).then(res => res.json());
    
      return {
        header: headerData as Header,
        footer: footerData as Footer,
      }
}