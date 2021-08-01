<script>
    //helpgwpeo[kajopwegopewgzop]
    import Taskbar from "./Taskbar.svelte";

    // alert(window.settings.theme);

    window.settings.apps = [
        { name: "Test App 1", icon: "/images/appicons/ta1.png", openInNewTab: false, app: "C:/Programs/TestApp1" },
    ];
</script>

<main>
    <!-- {theme} -->
    <slot />
    <Taskbar apps={window.settings.apps} />
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
