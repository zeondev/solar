<script>
    export let windows = [];
    window.solar.draggables = [];
    import { onMount } from "svelte";
    import Window from "Window.svelte";
    import * as solib from "../../../lib";
    // var x = new PlainDraggable(document.querySelector(""));

    onMount(() => {
        var index = 0;
        solib.sogroup('WindowContainer', 'initializing windows');
        windows.forEach((win) => {
            if (typeof win.opensWindow === "undefined") {
                var x = new PlainDraggable(
                    document.querySelector("#" + win.id)
                );
                x.handle = document.querySelector(
                    "#" + win.id + "h > div.title"
                );
                x.WinData = win;
                x.containment = document.querySelector("div.windowContainer");
                solib.solog(`setting window.solar.vars.apps[${index}].draggable to x`);
                window.solar.vars.apps[index].draggable = x;
            } else {
                solib.solog(`no work to do with the draggable as ${win.id} (apps[${index}]) is not set to be openable`);
            }
            index += 1;
            solib.solog(`adding index by 1, it's now ${index}`);
        });
        console.groupEnd()
        PlainDraggable.draggableCursor = "default";
        PlainDraggable.draggingCursor = "default";
        PlainDraggable.draggableClass = "win-is-draggable";
        PlainDraggable.draggingClass = "win-is-dragging";
        PlainDraggable.movingClass = "win-is-moving";
    });
</script>

<main class="windowContainer">
    {#each windows as win}
        {#if typeof win.opensWindow === "undefined"}
            <Window WinData={win} />
        {/if}
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
