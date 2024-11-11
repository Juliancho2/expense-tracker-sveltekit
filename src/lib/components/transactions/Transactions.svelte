<script lang="ts">
  import * as Select from "$lib/components/ui/select";
  import { Button } from "$lib/components/ui/button";
  import * as Table from "$lib/components/ui/table";
  import * as AlertDialog from "$lib/components/ui/alert-dialog";
  import ModalCreateAdd from "../modal-create-add/ModalCreateAdd.svelte";
  import { onMount } from "svelte";
  import TrendingUp from "lucide-svelte/icons/trending-up";
  import ArrowDownLeft from "lucide-svelte/icons/arrow-down-left";
  import ArrowUpRight from "lucide-svelte/icons/arrow-up-right";
  import CategoryButton from "../category-button/CategoryButton.svelte";
  import TypenButton from "../type-button/TypenButton.svelte";
  import Trash from "lucide-svelte/icons/trash";
  import Pencil from "lucide-svelte/icons/pencil";
  import {
    toasts,
    ToastContainer,
    FlatToast,
    BootstrapToast,
  } from "svelte-toasts";

  let allTransactions: any[] = [];
  let allCategories: any[] = [];

  async function fetchData() {
    try {
      const [categoriesRes, transactionsRes] = await Promise.all([
        fetch("/api/category"),
        fetch("/api/transaction"),
      ]);

      if (!categoriesRes.ok || !transactionsRes.ok) {
        throw new Error("Failed to fetch data from one or more endpoints");
      }

      const [categories, transactions] = await Promise.all([
        categoriesRes.json(),
        transactionsRes.json(),
      ]);

      allTransactions = transactions;
      allCategories = categories;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  onMount(() => {
    fetchData();
  });

  const iconsType = {
    Expense: {
      value: "expense",
      icon: ArrowDownLeft,
      color: "red",
      isActive: false,
    },
    Income: {
      value: "income",
      icon: ArrowUpRight,
      color: "green",
      isActive: false,
    },
    Investment: {
      value: "investment",
      icon: TrendingUp,
      color: "blue",
      isActive: false,
    },
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/transaction`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        toasts.add({
          title: "Success",
          type: "success",
          placement: "top-right",
          description: "Transaction deleted successfully",
        });
        allTransactions = allTransactions.filter(
          (transaction) => transaction.id !== id,
        );
      } else {
        toasts.add({
          title: "Error",
          description: "Failed to delete transaction",
          duration: 10000,
          placement: "top-right",
          type: "error",
          theme: "dark",
        });
        console.error("Failed to delete transaction");
      }
    } catch (error) {
      toasts.add({
        title: "Error",
        description: "Failed to delete transaction",
        duration: 10000,
        placement: "top-right",
        type: "error",
        theme: "dark",
      });
      console.error("Error deleting transaction:", error);
    }
  };
</script>

<section class="mt-10">
  <article class="flex justify-between">
    <div>
      <h3 class="text-xl font-bold">Transactions</h3>
      <p class="text-gray-500 text-sm">
        You had 3 transactions and 23 Expenses in the last month
      </p>
    </div>
    <div class="flex justify-between items-center gap-2">
      <TypenButton />
      <CategoryButton items={allCategories} label="Category" />
      <ModalCreateAdd />
    </div>
  </article>
  <Table.Root>
    <Table.Caption>A list of your recent invoices.</Table.Caption>
    <Table.Body>
      {#each allTransactions as transaction}
        <Table.Row>
          <Table.Cell class="flex gap-1 font-medium">
            <svelte:component
              this={iconsType[transaction.type]?.icon}
              color={iconsType[transaction.type]?.color}
            />
            <p>{transaction.description}</p>
          </Table.Cell>
          <Table.Cell>
            <Button variant="outline" class="flex gap-2 rounded-full">
              <p>{transaction.category.icon}</p>
              <p>{transaction.category.name}</p>
            </Button>
          </Table.Cell>
          <Table.Cell>
            <Button variant="outline" class="flex gap-2 rounded-full">
              {transaction.type}
            </Button>
          </Table.Cell>
          <Table.Cell>{transaction.amount}</Table.Cell>
          <Table.Cell>
            <div class="flex gap-2 w-full justify-end">
              <Button variant="outline">
                <Pencil class="w-4 h-4" />
              </Button>
              <AlertDialog.Root>
                <AlertDialog.Trigger>
                  <Button class="bg-red-300">
                    <Trash class="w-4 h-4" />
                  </Button>
                </AlertDialog.Trigger>
                <AlertDialog.Content>
                  <AlertDialog.Header>
                    <AlertDialog.Title
                      >Are you absolutely sure?</AlertDialog.Title
                    >
                    <AlertDialog.Description>
                      This action cannot be undone. This will permanently delete
                      your transaction.
                    </AlertDialog.Description>
                  </AlertDialog.Header>
                  <AlertDialog.Footer>
                    <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                    <AlertDialog.Action
                      on:click={() => handleDelete(transaction.id)}
                      >Delete</AlertDialog.Action
                    >
                  </AlertDialog.Footer>
                </AlertDialog.Content>
              </AlertDialog.Root>
            </div>
          </Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
</section>
