

export const POST = async ({ request,locals }) => {
    const {supabase}= locals;
    
    const formData = await request.formData();
    const body= Object.fromEntries(formData);
   try{
    if(!body.description || !body.amount || !body.category_id || !body.type || !body.date || !body.isRecurring){
        throw new Error('All fields are required')
    }
    const {data, error}= await supabase.from('transactions').insert(body)
    console.log(error)
    if(error) throw new Error(error.message)
    
    return new Response(JSON.stringify(body));
   }catch(err:any){
    return new Response(JSON.stringify({error:err.message}),{status:500})
   }
}