<script>
    import Taskbar from "./Taskbar.svelte";
    import Window from "./Windows/Window.svelte";
    import WindowContainer from "./Windows/WindowContainer.svelte";

    window.solar.vars = {};
    window.solar.vars.apps = [
        {
            id: "start",
            name: "Start",
            icon: "/images/appicons/start.png",
            isSystemPinned: true,
            opensWindow: false,
            app: "C:/Programs/TestApp1",
        },
        {
            id: "ta1",
            name: "Test App 1",
            icon: "/images/appicons/ta1.png",
            isUserPinned: true,
            app: "C:/Programs/TestApp1",
            style: "width:800px;height:600px;",
            canHaveMultipleWindows: false,
        },
        {
            id: "ta2",
            name: "Test App 2",
            icon: "/images/appicons/ta2.png",
            isUserPinned: true,
            app: "C:/Programs/TestApp1",
            style: "width:800px;height:600px;",
            canHaveMultipleWindows: false,
        },
    ];
</script>

<main>
    <!-- {theme} -->
    <slot />
    <WindowContainer windows={window.solar.vars.apps} />
    <Taskbar apps={window.solar.vars.apps} />
</main>

<style lang="scss">
    main {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        background: url("/images/wallpaper/02.jpg");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
</style>
