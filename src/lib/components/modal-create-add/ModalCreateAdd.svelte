<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog";
  import { Button } from "$lib/components/ui/button";
  import TypeOptions from "../type-options/TypeOptions.svelte";
  import Calendar from "$lib/components/ui/calendar/calendar.svelte";
  import X from "lucide-svelte/icons/x";
  import FileText from "lucide-svelte/icons/file-text";
  import DollarSign from "lucide-svelte/icons/dollar-sign";
  import CalendarCog from "lucide-svelte/icons/calendar-cog";
  import { Switch } from "$lib/components/ui/switch/index.ts";
  import CalendarIcon from "lucide-svelte/icons/calendar";
  import {
    DateFormatter,
    type DateValue,
    getLocalTimeZone,
  } from "@internationalized/date";
  import { cn } from "$lib/utils.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import { onMount } from "svelte";
  import * as Select from "$lib/components/ui/select";
  import {
    toasts,
    ToastContainer,
    FlatToast,
    BootstrapToast,
  } from "svelte-toasts";

  const df = new DateFormatter("en-US", {
    dateStyle: "long",
  });
  let dateValue: DateValue | undefined = undefined;
  let typeValue: string | undefined = undefined;
  let description: string | undefined = undefined;
  let selectedCategory: number | string = "";
  let isRecurring: boolean = false;
  let totalAmount: number | undefined = undefined;

  let categories: any[] = [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const dateFormatted = new Date(
      dateValue?.toString() || "",
    ).toLocaleDateString() || "";
    formData.append("user_id", "07c56b8f-0d9c-44b7-9f5a-ac7cbfa133dc");
    formData.append("date", dateFormatted || "");
    formData.append("type", typeValue || "");
    formData.append("description", description || "");
    formData.append("category_id", String(selectedCategory));
    formData.append("isRecurring", isRecurring ? "true" : "false");
    formData.append("amount", totalAmount?.toString() || "");

    const res = await fetch("/api/add_transaction", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    console.log(data);
    if (data && data.error) {
      toasts.add({
        title: "Error",
        description: data.error,
        duration: 10000,
        placement: "top-right",
        type: "error",
        theme: "dark",
      });
    } else {
      toasts.add({
        title: "Added successfully",
        description: "Transaction added",
        duration: 10000,
        placement: "top-right",
        type: "success",
        theme: "dark",
      });
      
    }
  };
  const handleChangeSelect = (id) => {
    selectedCategory = id;
  };
  onMount(async () => {
    const res = await fetch("/api/getCategories");
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
  });
</script>

<Dialog.Root>
  <Dialog.Trigger>
    <div>
      <Button class="flex gap-1 rounded-full text-xs"
        ><X class="w-5 h-5 rotate-45" />Add</Button
      >
    </div>
  </Dialog.Trigger>
  <Dialog.Content class="sm:max-w-[425px]">
    <form on:submit={handleSubmit}>
      <Dialog.Header>
        <Dialog.Title class="text-sm text-center">New Transaction</Dialog.Title>
        <Dialog.Description class="text-sm text-center"></Dialog.Description>
      </Dialog.Header>
      <div class="grid gap-4 py-4">
        <Popover.Root>
          <Popover.Trigger asChild let:builder>
            <Button
              type="button"
              variant="outline"
              class={cn(
                "w-full justify-start text-left font-normal",
                !dateValue && "text-muted-foreground",
              )}
              builders={[builder]}
            >
              <CalendarIcon class="mr-2 h-4 w-4" />
              {dateValue
                ? df.format(dateValue.toDate(getLocalTimeZone()))
                : "Pick a date"}
            </Button>
          </Popover.Trigger>
          <Popover.Content class="w-auto p-0">
            <Calendar bind:value={dateValue} initialFocus />
          </Popover.Content>
        </Popover.Root>

        <TypeOptions bind:typeValue />
        <div
          class="bg-gray-100 h-10 flex items-center border border-gray-300 px-1 rounded-md"
        >
          <input
            required
            bind:value={totalAmount}
            placeholder="Enter an amount"
            class="placeholder:text-xs h-full w-full bg-transparent outline-none"
            type="number"
          />
          <DollarSign class="w-5 h-5 text-gray-500" />
        </div>
        <div
          class="bg-gray-100 h-10 flex items-center border border-gray-300 px-1 rounded-md"
        >
          <input
            required
            bind:value={description}
            placeholder="Description"
            class="placeholder:text-xs h-full w-full bg-transparent outline-none"
            type="text"
          />
          <FileText class="w-5 h-5 text-gray-500" />
        </div>
        <Select.Root on:change={handleChangeSelect}>
          <Select.Trigger class="w-full bg-gray-100">
            <Select.Value
              class="placeholder:text-black font-medium placeholder:text-xs placeholder:font-normal"
              placeholder="Choose a category"
            />
          </Select.Trigger>
          <Select.Content>
            {#each categories as category}
              <Select.Item
                on:click={() => handleChangeSelect(category.id)}
                class="w-full flex gap-1"
                value={category.id}
              >
                <span>{category.icon}</span>
                {category.name}
              </Select.Item>
            {/each}
          </Select.Content>
        </Select.Root>
        <div class="flex gap-2 items-start">
          <CalendarCog class="w-6 h-6 text-gray-500" />
          <div>
            <h4 class="text-sm font-semibold">Add as recurring</h4>
            <p class="text-xs text-gray-500">
              This transaction will be added again the following months at the
              same day as today.
            </p>
          </div>
          <div class="flex items-center space-x-2">
            <Switch bind:checked={isRecurring} id="airplane-mode" />
          </div>
        </div>
      </div>
      <Dialog.Footer></Dialog.Footer>
      <Button class="w-full rounded-full" type="submit">Add Transaction</Button>
    </form>
  </Dialog.Content>
</Dialog.Root>
<ToastContainer let:data>
  <FlatToast {data} />
</ToastContainer>
