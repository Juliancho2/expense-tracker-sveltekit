<script>
     import * as Select from "$lib/components/ui/select";
     import { Button } from "$lib/components/ui/button";
     import X from 'lucide-svelte/icons/x';
     import * as Table from "$lib/components/ui/table";
</script>
<section class="mt-10">
    <article class="flex justify-between">
        <div>
            <h3 class="text-xl font-bold">Transactions</h3>
            <p class="text-gray-500 text-sm">You had 3 transactions and 23 Expenses in the last month</p>
        </div>
        <div class="flex justify-between">
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
              <div>
                  <Button class="flex gap-1 rounded-full" ><X class="w-5 h-5 rotate-45" />Add</Button>
              </div>
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
