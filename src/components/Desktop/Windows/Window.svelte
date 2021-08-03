<script>
    // var x = new PlainDraggable(document.querySelector(''));
    export let WinData = { id: "unk", name: "Unknown", icon: "/images/appicons/unk.png", isUserPinned: true, app: "C:/nul", style: "width:800px;height:600px;" };
</script>


<div class="window" id="{WinData.id}" style="{WinData.style}">
    <div class="header" id="{WinData.id}h">

    </div>
    <div class="content" id="{WinData.id}c">
        <slot />
    </div>
</div>

<style lang="scss">
    .window {
        border-radius: 8px;
        border: 1px solid #3c3c3c;
        background: #202020;

        .header {
            position: relative;
            width: 100%;
            height: 26px;
            background: #252525;
            border-radius: 8px 8px 0 0;
        }
    }
</style>
