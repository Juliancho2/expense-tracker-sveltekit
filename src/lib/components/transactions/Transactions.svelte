<script>
  import * as Select from "$lib/components/ui/select";
  import { Button } from "$lib/components/ui/button";
  import X from "lucide-svelte/icons/x";
  import * as Table from "$lib/components/ui/table";
  import * as Dialog from "$lib/components/ui/dialog";
  import { Input } from "$lib/components/ui/input/index.ts";
  import { Label } from "$lib/components/ui/label/index.ts";
  import Calendar from "lucide-svelte/icons/calendar";
  import  TrendingUp  from "lucide-svelte/icons/trending-up";
  import ArrowUpRight from "lucide-svelte/icons/arrow-up-right";
  import FileText from "lucide-svelte/icons/file-text";
  import CalendarCog from "lucide-svelte/icons/calendar-cog";

</script>

<section class="mt-10">
  <article class="flex justify-between">
    <div>
      <h3 class="text-xl font-bold">Transactions</h3>
      <p class="text-gray-500 text-sm">
        You had 3 transactions and 23 Expenses in the last month
      </p>
    </div>
    <div class="flex justify-between">
      <Select.Root>
        <Select.Trigger class="w-20">
          <Select.Value
            class="placeholder:text-black font-medium"
            placeholder="Theme"
          />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="light">Light</Select.Item>
          <Select.Item value="dark">Dark</Select.Item>
          <Select.Item value="system">System</Select.Item>
        </Select.Content>
      </Select.Root>
      <Select.Root>
        <Select.Trigger class="w-20">
          <Select.Value
            class="placeholder:text-black font-medium"
            placeholder="Theme"
          />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="light">Light</Select.Item>
          <Select.Item value="dark">Dark</Select.Item>
          <Select.Item value="system">System</Select.Item>
        </Select.Content>
      </Select.Root>

      <Dialog.Root>
        <Dialog.Trigger>
          <div>
            <Button class="flex gap-1 rounded-full"
              ><X class="w-5 h-5 rotate-45" />Add</Button
            >
          </div>
        </Dialog.Trigger>
        <Dialog.Content class="sm:max-w-[425px]">
          <Dialog.Header>
            <Dialog.Title class="text-sm text-center"
              >New Transaction</Dialog.Title
            >
            <Dialog.Description class="text-sm text-center"
            ></Dialog.Description>
          </Dialog.Header>
          <div class="grid gap-4 py-4">
            <div
              class="flex min-h-10 border border-gray-300 px-1 justify-between items-center rounded-md"
            >
              <div class="flex flex-col">
                <small class="text-xs">Date</small>
                <p class="text-xs font-semibold">Today</p>
              </div>
              <Calendar class="w-5 h-5 text-gray-500" />
            </div>
            <div class="flex bg-gray-100 h-10 gap-1 p-1 rounded-md">
              <div class="flex gap-1 items-center text-xs font-medium p-2 bg-white flex-1 rounded-md">
                <ArrowUpRight class="w-4 h-4 text-red-500 rotate-180" />
                <p>Expense</p>
              </div>
              <div class="flex gap-1 items-center text-xs font-medium p-2 bg-white flex-1 rounded-md">
                <ArrowUpRight class="w-4 h-4 text-green-500" />
                <p>Income</p>
                </div>
              <div class="flex gap-1 items-center text-xs font-medium p-2 bg-white flex-1 rounded-md">
                <TrendingUp class="w-4 h-4 text-indigo-500" />
                <p>Investment</p>
              </div>
            </div>
            <div class="bg-gray-100 h-10 flex items-center  border border-gray-300 px-1 rounded-md">
              <input placeholder="Description" class="placeholder:text-xs h-full w-full bg-transparent outline-none" type="text">
              <FileText class="w-5 h-5 text-gray-500" />
            </div>
            <div class="bg-gray-100 h-10 flex items-center  border border-gray-300 px-1 rounded-md">
              <input placeholder="Category" class="placeholder:text-xs h-full w-full bg-transparent outline-none" type="text">
              <FileText class="w-5 h-5 text-gray-500" />
            </div>
            <div >
              <CalendarCog class="w-5 h-5 text-gray-500"  />
             <div>
              <h4 class="text-sm font-semibold ">Add as recurring</h4>
              <p class="text-sm text-gray-500"> This transaction will be added again the following months at the same day as today.</p>
             </div>
            </div>
          </div>
          <Dialog.Footer>
            <Button class="w-full rounded-full" type="submit">Add Transaction</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  </article>
  <Table.Root>
    <Table.Caption>A list of your recent invoices.</Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.Head class="w-[100px]">Invoice</Table.Head>
        <Table.Head>Status</Table.Head>
        <Table.Head>Method</Table.Head>
        <Table.Head class="text-right">Amount</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell class="font-medium">INV001</Table.Cell>
        <Table.Cell>Paid</Table.Cell>
        <Table.Cell>Credit Card</Table.Cell>
        <Table.Cell class="text-right">$250.00</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
</section>
