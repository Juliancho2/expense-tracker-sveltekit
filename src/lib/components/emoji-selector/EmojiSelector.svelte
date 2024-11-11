<script lang="ts">
    import EmojiSelector from 'svelte-emoji-selector';
    import { Trash } from 'lucide-svelte';
  
    export let emojiSelected = '';
  
    function onEmoji(event: any) {
      event.preventDefault();
      emojiSelected = event.detail;
    }
  </script>
  
  <div class="w-full justify-between  bg-gray-100 h-10 flex items-center border border-gray-300 px-1 rounded-md">
    <input required placeholder="Emoji" class="bg-transparent placeholder:text-xs border-none outline-none h-10 w-20" readonly bind:value={emojiSelected} type="text"/>
    <div class="flex items-center space-x-2">
      <EmojiSelector type="button" on:emoji={onEmoji} bind:emoji={emojiSelected}  />
    <button type="button" on:click={() => (emojiSelected = '')} class="text-red-500"><Trash class="w-4 h-4" /></button>
    </div>
  </div>