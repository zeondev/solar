<script>
    import Taskbar from "./Taskbar.svelte";
    import Window from "./Windows/Window.svelte";
    import WindowContainer from "./Windows/WindowContainer.svelte";

    window.solar.settings.apps = [
        { id: "ta1", name: "Test App 1", icon: "/images/appicons/ta1.png", openInNewTab: false, app: "C:/Programs/TestApp1" },
        { id: "ta2", name: "Test App 2", icon: "/images/appicons/ta2.png", openInNewTab: false, app: "C:/Programs/TestApp1" },
    ];
</script>

<main>
    <!-- {theme} -->
    <slot />
    <Taskbar apps={window.solar.settings.apps} />
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
