<script>
    import Grid from "./lib/Grid.svelte";
    import Card from "./lib/Card.svelte";
    import Heading from "./lib/Heading.svelte";
    import Meal from "./lib/Meal.svelte";
    import Navbar from "./lib/Navbar.svelte";
    import MealModal from "./lib/MealModal.svelte";
    import { createMeal, getDayData } from "./db";

    export let today;

    let showMealModal = false;

    const addNewMeal = (e) => {
        createMeal(e.detail.name, e.detail.calories, e.detail.protein, e.detail.fats, e.detail.carbs);
        today = getDayData();
    }
</script>

<main>
    <Heading>
        Macros Today
    </Heading>

    <Card name="Calories" amount="{today.macros.calories}" />
    <Grid class="grid-cols-3 mt-1">
        <Card name="Protein" amount="{today.macros.protein}" suffix="g" />
        <Card name="Fats" amount="{today.macros.fats}" suffix="g" />
        <Card name="Carbs" amount="{today.macros.carbs}" suffix="g" />
    </Grid>
    
    <Heading>
        Meals Today
    </Heading>

    <Grid class="grid-cols-3 mt-2">
        {#each today.meals as meal (meal.id)}
            <Meal {...meal} />
        {/each}
    </Grid>

    <Navbar on:create-meal={ () => showMealModal = true } />

    <MealModal on:create={addNewMeal} bind:show={showMealModal} />
</main>

<style>
    :global(*) {
        font-family: Inter, sans-serif;
    }

    :global(body) {
        background: #4338ca;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    main {
        position: relative;
        max-width: 428px;
        width: calc(100vw - 15px);
        min-width: 300px;
        height: calc(100vh - 15px);
    }
</style>
