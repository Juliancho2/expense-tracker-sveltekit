import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr'
import { PUBLIC_DB_URL,PUBLIC_DB_KEY } from '$env/static/public'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async ({  fetch, data, depends }) => {
  
  console.log('esta es la data del layout:',data)
  depends('supabase:auth')

  const supabase = isBrowser()
    ? createBrowserClient(PUBLIC_DB_URL, PUBLIC_DB_KEY, {
        global: {
          fetch,
        },
      })
    : createServerClient(PUBLIC_DB_URL, PUBLIC_DB_KEY, {
        global: {
          fetch,
        },
        cookies: {
          get() {
            return JSON.stringify(data?.session)
          }
        },
      })
      
  const {
    data: { session },
  } = await supabase.auth.getSession()
  console.log('sesssion: ',session)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return { session, supabase, user }
}


