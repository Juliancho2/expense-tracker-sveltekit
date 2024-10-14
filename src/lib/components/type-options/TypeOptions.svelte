<script lang="ts">
    import TrendingUp from "lucide-svelte/icons/trending-up";
    import ArrowDownLeft from "lucide-svelte/icons/arrow-down-left";
    import ArrowUpRight from "lucide-svelte/icons/arrow-up-right";

    export let typeValue:string | undefined = undefined;
    $:typeValue

    $: typeTransaction = [
        {
            name: "Expense",
            value: "expense",
            icon: ArrowDownLeft,
            color: "red",
            isActive:false
        },
        {
            name: "Income",
            value: "income",
            icon: ArrowUpRight,
            color: "green",
            isActive:false
        },
        {
            name: "Investment",
            value: "investment",
            icon: TrendingUp,
            color: "blue",
            isActive:false
        },
    ];
    const handleActive=(value:string)=>{
        typeTransaction=typeTransaction.map(type=>{
            if(type.value===value){
                typeValue=type.name
                return {
                    ...type,
                    isActive:true
                }
            }else{
                return{
                    ...type,
                    isActive:false
                }
            }
        })
    }
</script>

<div class="flex bg-gray-100 h-10 gap-1 p-1 rounded-md">
    {#each typeTransaction as type}
        <button
            type="button"
            on:click={() => handleActive(type.value)}
            class="flex gap-1 items-center text-xs font-medium p-2 flex-1 rounded-md { type.isActive ? 'bg-white' : '' }"
        >
            <svelte:component color={ type.color} this={type.icon} class="w-4 h-4 text-gray-500" />
            <p>{type.name}</p>
        </button>
    {/each}
</div>
