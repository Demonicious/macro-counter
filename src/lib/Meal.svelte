<script>
    export let name;
    export let calories;
    export let protein;
    export let fats;
    export let carbs;

    import MealMacro from "./MealMacro.svelte";
</script>

<div class="bg-white rounded-sm text-center">
    <span class="text-xs">{name}</span>

    <section class="text-xs p-0.5">
        <MealMacro symbol="e" amount={Number(calories).toLocaleString()} />
        <MealMacro symbol="P" amount="{protein}g" />
        <MealMacro symbol="F" amount="{fats}g" />
        <MealMacro symbol="C" amount="{carbs}g" />
    </section>
</div>