<script>
    import App from "../../App.svelte";

    export let apps = [];

    function tbToggle(event) {
        // remove pressdown and pressup to avoid problems
        var list2 = event.target.children[0].classList;
        list2.remove("tb-anim-pressdown");
        list2.remove("tb-anim-pressup");
        // start removing/adding classes for active/open
        var list = event.target.classList;

        // if (list.contains("no-open")) {
        //     document
        //         .querySelectorAll("main.taskbar>ul.apps>li.app")
        //         .forEach((item, index) => {
        //             if (item.classList.contains("tb-active"))
        //                 item.classList.remove("tb-active");
        //         });
        //     list.add("tb-active");
        // }
        // } else if (list.contains("no-open") && list.contains('tb-active')) {
        //     list.remove("tb-active");
        // }
        document
            .querySelectorAll("main.taskbar>ul.apps>li.app")
            .forEach((item, index) => {
                if (
                    item.classList.contains("tb-active") &&
                    item.classList.contains("no-open")
                )
                    item.classList.remove("tb-active");
            });
        if (list.contains("tb-open") && !list.contains("tb-active")) {
            // check if any other app is active and remove it
            document
                .querySelectorAll("main.taskbar>ul.apps>li.app")
                .forEach((item, index) => {
                    if (item.classList.contains("tb-active"))
                        item.classList.remove("tb-active");
                });
            list.add("tb-active");
        } else if (list.contains("tb-active") && list.contains("tb-open")) {
            list.remove("tb-active");
        } else {
            list.add("tb-open");
        }
    }
    function tbPressDown(event) {
        var list = event.target.children[0].classList;
        list.remove("tb-anim-pressup");
        list.add("tb-anim-pressdown");
    }
    function tbPressUp(event) {
        var list = event.target.children[0].classList;
        list.remove("tb-anim-pressdown");
        list.add("tb-anim-pressup");
    }

    apps.forEach((item, index) => {
        console.log(item.id);
    });
</script>

<main class="taskbar">
    <ul class="apps">
        {#each apps as app}
            {#if typeof app.opensWindow !== "undefined" && !app.opensWindow}
                <li
                    class="app no-open tb-open"
                    on:mousedown={tbPressDown}
                    on:mouseup={tbPressUp}
                    on:click={tbToggle}
                >
                    <img
                        class="tb-item"
                        draggable="false"
                        src={app.icon}
                        alt={app.name}
                    />
                </li>
            {:else}
                <li
                    class="app"
                    on:mousedown={tbPressDown}
                    on:mouseup={tbPressUp}
                    on:click={tbToggle}
                >
                    <img
                        class="tb-item"
                        draggable="false"
                        src={app.icon}
                        alt={app.name}
                    />
                </li>
            {/if}
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
            // margin: 0;
            // padding: 0;
            // // top: 50%;
            // // left: 50%;
            // // position: relative;
            // // transform: translate(-50%, -50%);
            // // width: max-content;
            // top: 50%;
            // transform: translate(0, -50%);
            // list-style-type: none;
            margin: 0;
            padding: 0;
            top: 50%;
            transform: translate(-50%, -50%);
            list-style-type: none;
            position: absolute;
            left: 50%;

            li > img {
                pointer-events: none;
                width: 24px;
                height: 24px;
                vertical-align: unset;
                // position: relative;
            }
            li {
                padding: 7px;
                width: 40px;
                height: 40px;
                border: 1px solid transparent;
                border-radius: 4px;
                display: inline-block;
                position: relative !important;
                margin: 0 4px;
            }
            li:hover {
                background: #2d2d2d;
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-color: #343434 #2d2d2d #2d2d2d;
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
                transition: 0.15s cubic-bezier(0, 0.55, 0.45, 1);
            }
            :global(li.app.no-open::after) {
                content: none !important;
            }
            :global(li.tb-active::after) {
                content: "" !important;
                width: 16px !important;
                height: 3px !important;
                border-radius: 2px !important;
                background: $tb-accent !important;
            }
            :global(li.tb-open::after) {
                content: "";
                width: 6px;
                height: 3px;
                border-radius: 2px;
                background: $tb-open;
            }
            // :global(li.tb-active::after) {
            //     content: "";
            //     position: absolute;
            //     bottom: 1px;
            //     left: 50%;
            //     transform: translate(-50%, 0);
            //     width: 16px !important;
            //     height: 3px;
            //     border-radius: 2px;
            //     background: $tb-accent !important;
            // }
            // :global(li.tb-open::after) {
            //     content: "";
            //     position: absolute;
            //     bottom: 1px;
            //     left: 50%;
            //     transform: translate(-50%, 0);
            //     width: 6px;
            //     height: 3px;
            //     border-radius: 2px;
            //     background: $tb-open;
            // }
        }
    }
    :global(.tb-item) {
        // position: absolute;
        // left: 50%;
        // transform: translate(-50%, -50%);
        // top: 50%;
        transition: 0.25s cubic-bezier(0.16, 1, 0.3, 1); // ease;
    }
    // :global(.tb-anim-pressup) {
    //     width: 24px !important;
    //     height: 24px !important;
    //     // animation: tb-icon-pressup 0.5s ease;
    // }
    // @keyframes -global-tb-icon-pressup {
    //     0% {
    //         width: 20px;
    //         height: 20px;
    //     }
    //     100% {
    //         width: 24px;
    //         height: 24px;
    //     }
    // }
    // :global(.tb-anim-pressdown) {
    //     width: 20px !important;
    //     height: 20px !important;
    //     position: absolute;
    //     top: 25%;
    //     transform: translate(-50%, -50%);
    //     // animation: tb-icon-pressdown 0.5s ease;
    // }
    // @keyframes -global-tb-icon-pressdown {
    //     0% {
    //         width: 24px;
    //         height: 24px;
    //     }
    //     100% {
    //         width: 20px;
    //         height: 20px;
    //     }
    // }
</style>
