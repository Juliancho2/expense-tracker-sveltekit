export async function POST({ request, locals }) {
    const { supabase } = locals;

    const formData = await request.formData();
    const body = Object.fromEntries(formData);

    try {
        const { data, error } = await supabase.from('category').insert(body)
        if (error) throw new Error(error.message)

        return new Response(JSON.stringify(data));

    } catch (err:any) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}

export const GET = async ({ locals: { supabase } }) => {
    try {
        const { data, error } = await supabase.from('category').select('*')
        if (error) throw new Error(error.message)
        let res = JSON.stringify(data)
        return new Response(res)

    } catch (err:any) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 })
    }
}

export const DELETE = async ({ locals: { supabase } }) => {
    try {
        const { data, error } = await supabase.from('category').delete().eq('id', 1)
        if (error) throw new Error(error.message)
        let res = JSON.stringify(data)
        return new Response(res)

    } catch (err:any) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 })
    }

}