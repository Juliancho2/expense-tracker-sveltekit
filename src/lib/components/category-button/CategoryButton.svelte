<script lang="ts">
  import ModalCreateCategory from "../modal-add-category/ModalCreateCategory.svelte";
  import ModalAdminCategories from "../modal-admin-categories/ModalAdminCategories.svelte";
  import Button from "../ui/button/button.svelte";
  import ChevronDown from "lucide-svelte/icons/chevron-down";

  export let items: any[] = [];
  export let label;
  let openContent: boolean = false;
  let selectedOption: any = [];
  let content: HTMLElement;

  const handleSelect = (id: number) => {
    console.log(selectedOption);
    if (selectedOption.includes(id)) {
      selectedOption = selectedOption.filter((item) => item !== id);
    } else {
      selectedOption = [...selectedOption, id];
    }
  };

  // const handleClickOutside = (event: HTMLButtonElement) => {
  //   if (
  //     event &&
  //     event.target &&
  //     content &&
  //     !content.contains(event.target as Node) &&
  //     !(event.target.id === "category-button")
  //   ) {
  //     openContent = false;
  //   }
  // };

  // if (typeof window !== "undefined" && typeof document !== "undefined") {
  //   console.log("loaded");
  //   document.addEventListener("click", handleClickOutside);
  // }
</script>

<div class="relative">
  <Button
    id="category-button"
    class="rounded-full text-xs"
    on:click={() => (openContent = !openContent)}
    variant="outline"
  >
    {label}
    <ChevronDown class="text-xs h-5 w-5 text-gray-300" />
  </Button>
  <!-- content -->
  {#if openContent}
    <div
      bind:this={content}
      class="space-y-4 bg-white z-10 p-2 border border-gray-100 shadow-sm rounded-md absolute w-72 right-0 mt-2"
    >
      {#each items as item}
        <div>
          <label class="flex justify-between items-center space-x-3">
            <div>
              <span class="text-xs">{item.icon}</span>
              <span class="text-xs font-semibold">{item.name}</span>
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
      <hr />
      <div class="flex justify-between">
        <ModalCreateCategory />
        <ModalAdminCategories />
      </div>
    </div>
  {/if}
</div>
