<script>
    export let name;
    export let suffix = null;
    export let amount;
</script>

<div class="mt-1 border-white border-solid border-2 rounded-sm text-center">
    <section class="py-4 text-3xl text-white font-extrabold">
        { `${Number(amount).toLocaleString()}${suffix ? suffix : ''}`}
    </section>

    <section class="bg-white font-semibold py-1">
        { name }
    </section>
</div>