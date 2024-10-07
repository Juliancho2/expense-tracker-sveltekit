<script>
    import Summary from "$lib/components/summary/Summary.svelte";
    import Transactions from "$lib/components/transactions/Transactions.svelte";

    export let data
    const user=data.user?.user_metadata
</script>


<h2 class="text-3xl font-extrabold">¡Hello World!</h2>
<Summary />
<Transactions />
