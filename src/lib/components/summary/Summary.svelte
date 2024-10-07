<script>
    import * as Select from "$lib/components/ui/select";
    import ArrowUpRight from "lucide-svelte/icons/arrow-up-right";
</script>

<section class="py-10">
    <article class="flex justify-between my-5">
        <h2 class="text-3xl font-extrabold">Summary</h2>
        <div>
            <Select.Root>
                <Select.Trigger class="w-20">
                  <Select.Value class="placeholder:text-black font-medium" placeholder="Theme" />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item value="light">Light</Select.Item>
                  <Select.Item value="dark">Dark</Select.Item>
                  <Select.Item value="system">System</Select.Item>
                </Select.Content>
              </Select.Root>
        </div>
    </article>
    <article class="my-5">
        <div>
            <small class="font-semibold text-base">Net Total</small>
            <div class="flex gap-4 items-end" >
                <div class="flex gap-1 relative">
                    <p class="text-3xl font-bold">2.00</p><span class="text-gray-400 absolute -right-3 -top-1">$</span>
                </div>
                <p class="text-gray-400 text-xs font-bold">+1.3% from last month</p>
            </div>
        </div>
    </article>
    <article class="flex justify-between">
        <div>
            <h4 class="font-semibold text-base text-green-500">Income</h4>
            <div class="relative inline-block">
                <p class="text-2xl font-medium">2.00</p><span class="text-gray-400 absolute -right-3 -top-1">$</span>
            </div>
            <div class="flex gap-1 mt-2 items-center">
                <ArrowUpRight class="w-4 h-4 text-green-700" /><p class="text-gray-400 text-xs font-bold">+1.3% from last month</p>
            </div>
        </div>
        <div>
            <h4 class="font-semibold text-base text-red-500">Expenses 73%</h4>
            <div class="relative inline-block">
                <p class="text-2xl font-medium">2.00</p><span class="text-gray-400 absolute -right-3 -top-1">$</span>
            </div>
            <div class="flex gap-1 mt-2 items-center">
                <ArrowUpRight class="w-4 h-4 text-green-700" /><p class="text-gray-400 text-xs font-bold">+1.3% from last month</p>
            </div>
        </div>
        <div>
            <h4 class="font-semibold text-base text-indigo-500">Investment</h4>
            <div class="relative inline-block">
                <p class="text-2xl font-medium">2.00</p><span class="text-gray-400 absolute -right-3 -top-1">$</span>
            </div>
            <div class="flex gap-1 mt-2 items-center">
                <ArrowUpRight class="w-4 h-4 text-green-700" /><p class="text-gray-400 text-xs font-bold">+1.3% from last month</p>
            </div>
        </div>
        <div>
            <h4 class="font-semibold text-base text-yellow-500">Savings</h4>
            <div class="relative inline-block">
                <p class="text-2xl font-medium">2.00</p><span class="text-gray-400 absolute -right-3 -top-1">$</span>
            </div>
            <div class="flex gap-1 mt-2 items-center">
                <ArrowUpRight class="w-4 h-4 text-green-700" /><p class="text-gray-400 text-xs font-bold">+1.3% from last month</p>
            </div>
        </div>
    </article>
</section>