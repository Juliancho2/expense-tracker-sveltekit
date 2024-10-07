import { redirect } from '@sveltejs/kit'

import type { Actions } from './$types'

export const actions: Actions = {

  login: async ({ request, locals: { supabase } }) => {

    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:5173/auth/callback'
      }
    })
    if (data.url) {
      redirect(303, data.url)
    }
  },
}