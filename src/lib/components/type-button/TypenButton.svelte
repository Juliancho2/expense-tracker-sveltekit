<script lang="ts">
    import Button from "../ui/button/button.svelte";
    import ChevronDown from "lucide-svelte/icons/chevron-down";

    import TrendingUp from "lucide-svelte/icons/trending-up";
    import ArrowDownLeft from "lucide-svelte/icons/arrow-down-left";
    import ArrowUpRight from "lucide-svelte/icons/arrow-up-right";

    let openContent: boolean = false;
    let selectedOption: any = [];

    let items: any[] = [
        {
            id: 1,
            name: "Expense",
            value: "expense",
            icon: ArrowDownLeft,
            color: "red",
            isActive: false,
        },
        {
            id: 2,
            name: "Income",
            value: "income",
            icon: ArrowUpRight,
            color: "green",
            isActive: false,
        },
        {
            id: 3,
            name: "Investment",
            value: "investment",
            icon: TrendingUp,
            color: "blue",
            isActive: false,
        },
    ];
    const handleSelect = (id: number) => {
        console.log(selectedOption);
        if (selectedOption.includes(id)) {
            selectedOption = selectedOption.filter((item) => item !== id);
        } else {
            selectedOption = [...selectedOption, id];
        }
    };
</script>

<div class="relative">
    <Button
        on:click={() => (openContent = !openContent)}
        class="rounded-full"
        variant="outline"
    >
        Type
        <ChevronDown class="text-xs h-5 w-5 text-gray-300" />
    </Button>
    <!-- content -->
    {#if openContent}
        <div
            class="space-y-4 bg-white z-10 p-4 border border-gray-100 shadow-sm rounded-md absolute w-72 right-0 mt-2"
        >
            {#each items as item}
                <div>
                    <label class="flex justify-between items-center space-x-3">
                        <div class="inline-flex gap-2">
                            <svelte:component
                                this={item.icon}
                                class="w-4 h-4"
                                style="color: {item.color};"
                            />
                            <span class="text-xs font-semibold"
                                >{item.name}</span
                            >
                        </div>
                        <input
                            type="checkbox"
                            class="h-4 w-4 text-black border-gray-300 rounded"
                            value={item.id}
                            on:change={() => handleSelect(item.id)}
                        />
                    </label>
                </div>
            {/each}
        </div>
    {/if}
</div>
