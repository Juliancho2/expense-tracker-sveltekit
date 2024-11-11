<script>
    import { onMount } from "svelte";

    
    let expenses = 73;
    let savings = 10;
    let investments = 17;

    
    let showTooltip = true;
    let tooltipText = `Expenses: ${expenses}%`;
    let tooltipX = 0;
    let tooltipY = 0;

    onMount(() => {
        const barExpenses = document.querySelector(".expenses");
        const barRect = barExpenses.getBoundingClientRect();
        tooltipX = barRect.left + barRect.width / 2; 
        tooltipY = barRect.top + barRect.height / 2 - 50;
    });

    
    const handleMouseOver = (event, label, value) => {
        tooltipText = `${label}: ${value}%`;
        tooltipX = event.clientX; 
        tooltipY = event.clientY - 50;
        showTooltip = true;
    };

</script>

<div class="flex w-full h-2 my-5 rounded-full overflow-hidden max-w-[650px]">
    
    <div
        class="bar expenses relative"
        style="width: {expenses}%"
        on:mouseover={(e) => handleMouseOver(e, "Expenses", expenses)}
        
    ></div>

    
    <div
        class="bar savings"
        style="width: {savings}%"
        on:mouseover={(e) => handleMouseOver(e, "Savings", savings)}
       
    ></div>

    
    <div
        class="bar investments"
        style="width: {investments}%"
        on:mouseover={(e) => handleMouseOver(e, "Investments", investments)}
        
    ></div>
</div>

{#if showTooltip}
    <div class="tooltip relative p-3" style="left: {tooltipX}px; top: {tooltipY}px">
        {tooltipText}
        <span class="inline-block w-3 h-3 bg-black rotate-45 absolute -bottom-1 left-1/2  -translate-x-1/2"></span>
    </div>
{/if}

<style>
    

    .bar {
        height: 100%;
    }

    .expenses {
        background-color: red;
    }

    .savings {
        background-color: blue;
    }

    .investments {
        background-color: yellow;
    }

    .tooltip {
        position: absolute;
        background-color: black;
        color: white;
        border-radius: 5px;
        font-size: 12px;
        pointer-events: none;
        white-space: nowrap;
        transform: translateX(-50%);
        
    }
</style>
