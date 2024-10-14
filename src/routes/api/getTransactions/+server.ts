export const GET = async ({ locals: { supabase } }) => {
    const { data, error } = await supabase.from('transactions').select('*, category (name,icon)')
    if (error) throw new Error(error.message)
    let res= JSON.stringify(data)
    return new Response(res)
}