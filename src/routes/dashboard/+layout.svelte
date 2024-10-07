<script>
    import Header from "$lib/components/header/Header.svelte";
    export let data;
    const user=data?.user?.user_metadata 
    
</script>

<Header avatarUrl={user?.avatar_url}/>
<main class="container mx-auto">
    <slot />
</main>