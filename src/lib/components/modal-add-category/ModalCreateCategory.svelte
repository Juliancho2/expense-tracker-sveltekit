<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog";
  import { Button } from "$lib/components/ui/button";
  import {
    toasts,
    ToastContainer,
    FlatToast,
    BootstrapToast,
  } from "svelte-toasts";
  import DialogContent from "../ui/dialog/dialog-content.svelte";
  import EmojiSelector from "../emoji-selector/EmojiSelector.svelte";
  import Input from "../ui/input/input.svelte";

  let textContent = "";
  let emoji = "";

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", textContent || "");
    formData.append("icon", emoji || "");

    console.log(Object.fromEntries(formData));

    const res = await fetch("/api/category", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data && data.error) {
      toasts.add({
        title: "Error",
        description: data.error,
      });
    } else {
      toasts.add({
        title: "Added successfully",
        description: "Category added",
        duration: 10000,
        placement: "top-right",
        type: "success",
        theme: "dark",
      });
    }
  };
</script>

<Dialog.Root>
  <Dialog.Trigger>
    <p class="text-xs font-semibold">Add new category</p>
  </Dialog.Trigger>
  <Dialog.Content class="sm:max-w-[425px]">
    <Dialog.Header>
      <Dialog.Title class="text-sm text-center">New Category</Dialog.Title>
      <Dialog.Description class="text-sm text-center"></Dialog.Description>
    </Dialog.Header>
    <EmojiSelector bind:emojiSelected={emoji} />
    <form on:submit={handleSubmit}>
      <section class="flex flex-col gap-2">
        <div
          class="bg-gray-100 h-10 flex items-center border border-gray-300 px-1 rounded-md"
        >
          <input
            required
            placeholder="Enter name"
            class="placeholder:text-xs h-full w-full bg-transparent outline-none"
            type="text"
            bind:value={textContent}
          />
        </div>
      </section>

      <Dialog.Footer></Dialog.Footer>
      <Button class="w-full rounded-full mt-4" type="submit"
        >Add Transaction</Button
      >
    </form>
  </Dialog.Content>
</Dialog.Root>
<ToastContainer let:data>
  <FlatToast {data} />
</ToastContainer>
