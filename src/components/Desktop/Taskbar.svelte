<script>
    import App from "../../App.svelte";

    export let apps = [];

    function tbToggle(event) {
        var list = event.target.classList;
        console.log(list);
        if (list.contains("tb-open") && !list.contains("tb-active")) {
            list.add("tb-active");
        } else if (list.contains("tb-active") && list.contains("tb-open")) {
            list.remove("tb-active");
        } else {
            list.add("tb-open");
        }
    }
</script>

<main class="taskbar">
    <ul class="apps">
        {#each apps as app}
            <li class="app" on:click={tbToggle}>
                <img
                    class="1tb-item"
                    draggable="false"
                    src={app.icon}
                    alt={app.name}
                />
            </li>
        {/each}
    </ul>
</main>

<style lang="scss">
    $tb-bg: #202020;
    $tb-accent: #4cc2ff;
    $tb-open: #9a9a9a;
    $tb-attention: #fce100;

    main.taskbar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 48px;
        background: $tb-bg;
        ul.apps {
            margin: 0;
            padding: 0;
            top: 50%;
            left: 50%;
            position: relative;
            transform: translate(-50%, -50%);
            width: max-content;
            list-style-type: none;
            li > img {
                pointer-events: none;
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
            li {
                padding: 7px;
                width: 40px;
                height: 40px;
                border: 1px solid transparent;
                border-radius: 4px;
            }
            li:hover {
                background: #2d2d2d;
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-color: #343434 #2d2d2d #2d2d2d;
            }
            :global(li.app:after) {
                content: "";
                position: absolute;
                bottom: 1px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 0px;
                height: 3px;
                border-radius: 2px;
                background: $tb-open;
                transition: 0.1s cubic-bezier(0, 0.55, 0.45, 1);
            }
            :global(li.tb-active) {
                padding: 7px;
                background: #2d2d2d;
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-color: #3c3c3c #323232 #303030;
                border-radius: 4px;
                width: 40px;
                height: 40px;
            }
            :global(li.tb-active::after) {
                content: "";
                position: absolute;
                bottom: 1px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 16px !important;
                height: 3px;
                border-radius: 2px;
                background: $tb-accent !important;
            }
            :global(li.tb-open::after) {
                content: "";
                position: absolute;
                bottom: 1px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 6px;
                height: 3px;
                border-radius: 2px;
                background: $tb-open;
            }
            
        }
    }
</style>
