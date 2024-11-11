<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog";
  import { Button } from "$lib/components/ui/button";
  import { onMount } from "svelte";
  import { toasts, ToastContainer, FlatToast } from "svelte-toasts";
  import {Pencil} from "lucide-svelte";
  import { Trash } from 'lucide-svelte';

  let content = "";
  let emoji = "";

  let categories = [];

  const fetchCategories = async () => {
    const res = await fetch("/api/category");
    const data = await res.json();
    categories = data;

    if (data.error) {
      toasts.add({
        title: "Error",
        description: data.error,
        duration: 10000,
        placement: "top-right",
        type: "error",
        theme: "dark",
      });
    }
  };
  onMount(async () => {
    fetchCategories();
  });
</script>

<Dialog.Root>
  <Dialog.Trigger>
    <p class="text-xs font-semibold">Admin Categories</p>
  </Dialog.Trigger>
  <Dialog.Content class="sm:max-w-[425px]">
    <Dialog.Header>
      <Dialog.Title class="text-sm text-center">New Category</Dialog.Title>
      <Dialog.Description class="text-sm text-center"></Dialog.Description>
    </Dialog.Header>
    <form>
      {#each categories as category}
        <div class="flex my-1 justify-between items-center gap-2 border rounded-md p-2">
          <div class="flex gap-1 items-center">
            <p>{category.icon}</p>
            <p class="text-xs">{category.name}</p>
          </div>
          <div class="flex gap-1">
            <Pencil class="w-4 h-4 text-gray-600" />
            <Trash class="w-4 h-4  text-red-400" />
          </div>
        </div>
      {/each}
    </form>
  </Dialog.Content>
</Dialog.Root>
<ToastContainer let:data>
  <FlatToast {data} />
</ToastContainer>
