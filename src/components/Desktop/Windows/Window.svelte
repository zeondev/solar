<script>
    // var x = new PlainDraggable(document.querySelector(''));
    export let WinData = {
        id: "unk",
        name: "Unknown",
        icon: "/images/appicons/unk.png",
        isUserPinned: true,
        app: "C:/nul",
        style: "width:800px;height:600px;",
    };
</script>


<div class="window" id={WinData.id} style={WinData.style}>
    <div class="header" id="{WinData.id}h">
        <div class="title">
            <img src={WinData.icon} alt="Icon" />
            <span>{WinData.name}</span>
        </div>
        <div class="buttons">
            <ul>
                <li>&#xE108;</li>
                <li>&#xE15B;</li>
                <li>&#xE8BB;</li>
            </ul>
        </div>
    </div>
    <div class="content" id="{WinData.id}c">
        <slot />
    </div>
</div>

<style lang="scss">
    .window {
        border-radius: 8px;
        border: 1px solid #3c3c3c;
        box-shadow: 0px 0px 13px rgba(0,0,0,0.5) !important;
        // background: #202020;

        .header {
            position: relative;
            width: 100%;
            height: 26px;
            background: #252525;
            border-radius: 8px 8px 0 0;
            display: flex;
            .title {
                flex-grow: 1;
                position: relative;
                img {
                    position: absolute;
                    width: 16px;
                    height: 16px;
                    left: 5px;
                    top: 4.5px;
                }
                span {
                    font-size: 9px;
                    position: absolute;
                    left: 25px;
                    top: 6px;
                }
            }
            .buttons {
                ul {
                    padding: 0;
                    margin: 0;
                    list-style-type: none;
                    height: 26px;
                    float: right;
                    li {
                        width: 45px;
                        vertical-align: middle;
                        height: auto;
                        padding: 7px 0;
                        font-size: 10px;
                        font-family: Segoe Fluent Icons;
                        display: inline-block;
                        margin-top: -1px;
                    }
                    li:hover {
                        background: rgba(255, 255, 255, 0.1);
                    }
                    li:last-child {
                        border-radius: 0 8px 0 0;
                    }
                    li:last-child:hover {
                        background: rgba(255, 0, 0, 0.6);
                    }
                }
            }
        }

        .content {
            background: #202020;
            height: calc(100% - 26px);
            border-radius: 0 0 8px 8px;
        }
    }
</style>
