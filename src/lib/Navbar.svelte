<script>
    import { Icon, Plus } from "svelte-hero-icons";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
</script>

<nav class="fixed bottom-2 bg-white rounded-sm flex justify-between items-center p-1">
    <button class="py-1 px-2 bg-gray-300 rounded-sm">History</button>

    <button on:click={ () => dispatch('create-meal') } class="transition-all ease-in-out hover:bg-gray-100 hover:w-16 hover:h-16 w-14 h-14 rounded-full border-4 bg-white border-indigo-700 flex justify-center items-center relative bottom-4">
        <Icon solid src={Plus} size="32" />
    </button>

    <button class="py-1 px-2 bg-gray-300 rounded-sm">Charts</button>
</nav>

<style>
    nav {
        width: 428px;
        height: 44px;
    }
</style>