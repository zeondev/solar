<script>
    export let windows = [];
    window.solar.draggables = [];
    import { onMount } from "svelte";
    import Window from "Window.svelte";
    // var x = new PlainDraggable(document.querySelector(""));
    onMount(() => {
        windows.forEach((win) => {
            var x = new PlainDraggable(document.querySelector("#" + win.id));
            x.handle = document.querySelector("#" + win.id + "h");
            x.WinData = win;
            window.solar.draggables.push(x);
        });
        PlainDraggable.draggableCursor = "default";
        PlainDraggable.draggingCursor = "default";
        PlainDraggable.draggableClass = 'win-is-draggable';
        PlainDraggable.draggingClass = 'win-is-dragging';
        PlainDraggable.movingClass = 'win-is-moving';
    });
</script>

<main class="windowContainer">
    {#each windows as win}
        <Window WinData={win} />
    {/each}
</main>

<style lang="scss">
    .windowContainer {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
    }
</style>
