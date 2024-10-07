<script lang="ts">
    import House from "lucide-svelte/icons/house";
    import WalletMinimal from "lucide-svelte/icons/wallet-minimal";
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import * as Popover from "$lib/components/ui/popover";
    import { page } from "$app/stores";
    import Button from "../ui/button/button.svelte";
    import { goto } from '$app/navigation';

    export let avatarUrl: string | undefined = "";

    const links = [
        {
            name: "Home",
            href: "/dashboard",
            icon: House,
            isActive: false,
        },
        {
            name: "CashFlow",
            href: "/dashboard/flow",
            icon: WalletMinimal,
            isActive: false,
        },
    ];
    const logOut = async () => {
        await $page.data.supabase.auth.signOut();
        goto('/login');
    };  
</script>

<header class="w-full py-7">
    <nav class="container mx-auto flex justify-between items-center">
        <img src="https://lucide.dev/logo.dark.svg" class="w-6" alt="" />
        <ul class="w-full flex gap-10 justify-center">
            {#each links as link}
                <li>
                    <a
                        class="flex gap-1 items-center {$page.url.pathname ===
                        link.href
                            ? 'text-gray-700 '
                            : 'text-gray-400'}"
                        href={link.href}
                    >
                        <svelte:component this={link.icon} class="w-5" />
                        <p
                            class="text-xs {$page.url.pathname === link.href
                                ? 'font-bold '
                                : 'font-medium'}"
                        >
                            {link.name}
                        </p>
                    </a>
                </li>
            {/each}
        </ul>
        <Popover.Root>
            <Popover.Trigger>
                <Avatar.Root>
                    <Avatar.Image src={avatarUrl} alt="@shadcn" />
                    <Avatar.Fallback>CN</Avatar.Fallback>
                </Avatar.Root>
            </Popover.Trigger>
            <Popover.Content>
                <Button on:click={logOut} class="w-full">Logout</Button>
            </Popover.Content>
        </Popover.Root>
    </nav>
</header>
