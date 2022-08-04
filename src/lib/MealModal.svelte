<script>
    import { fade, fly } from "svelte/transition";
    import { createEventDispatcher } from "svelte";

    export let show = true;

    let name = '';
    let calories = 0, fats = 0, carbs = 0, protein = 0;

    const dispatch = createEventDispatcher();

    const submit = () => { 
        dispatch('create', {
            name,
            calories,
            fats,
            carbs,
            protein
        });

        show = false;
    }
</script>

{#if show}
<div transition:fade={{ duration: 175 }} id="authentication-modal" tabindex="-1" aria-hidden="true" class="bg-gray-900 bg-opacity-80 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center">
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div in:fly={{ duration: 225, y: 100 }} class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button on:click={ () => show = false } type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="py-6 px-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add Meal</h3>
                <form on:submit|preventDefault={submit} class="space-y-6" action="#">
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input bind:value={ name } type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Chicken Sandwich" required>
                    </div>
                    <div>
                        <label for="calories" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Calories</label>
                        <input bind:value={ calories } type="number" name="calories" id="calories" placeholder="25g" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                    </div>
                    <div class="grid grid-cols-3 gap-2">
                        <div>
                            <label for="protein" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Protein</label>
                            <input bind:value={ protein } type="number" name="protein" id="protein" placeholder="25g" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                        </div>
                        <div>
                            <label for="fats" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fats</label>
                            <input bind:value={ fats } type="number" name="fats" id="fats" placeholder="25g" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                        </div>
                        <div>
                            <label for="carbs" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Carbs</label>
                            <input bind:value={ carbs } type="number" name="carbs" id="carbs" placeholder="25g" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                        </div>
                    </div>

                    <button type="submit" class="w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save</button>
                </form>
            </div>
        </div>
    </div>
</div>
{/if}