import { redirect } from "@sveltejs/kit"
import type { Actions } from './$types'

export const actions: Actions = {

    logout: async ({ request, locals: { supabase } }) => {
  
      const { error, data } = await supabase.auth.signOut()
  
      if (error) {
        console.log('error', error)
        return error
      }
  
      throw redirect(303, '/')
    }
  }