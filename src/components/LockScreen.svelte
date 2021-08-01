<script>
  import { onMount } from "svelte";
  import { url } from "@roxi/routify";
  import { beforeUrlChange } from "@roxi/routify";
  var d = new Date();

  var month = new Array(12);
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var n = month[d.getUTCMonth()];

  // document.querySelector("#lockScreenDate").innerHTML = `${d.getDate()}`;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function runTbTime() {
    var taskbarDate = new Date();
    if (taskbarDate.getMinutes() < 10) {
      document.querySelector(
        "#lockScreenTime"
      ).innerHTML = `${taskbarDate.getHours()}:0${taskbarDate.getMinutes()}`;
    } else {
      document.querySelector(
        "#lockScreenTime"
      ).innerHTML = `${taskbarDate.getHours()}:${taskbarDate.getMinutes()}`;
    }
    document.querySelector("#lockScreenDate").innerHTML = `${
      days[d.getDay()]
    }, ${month[d.getMonth()]} ${d.getDate()}`;
  }

  var taskbarTime = setInterval(() => {
    runTbTime();
  }, 1000);

  onMount(async () => {
    runTbTime();
  });

  $beforeUrlChange((event, store) => {
    clearInterval(taskbarTime);
    return true;
  });

  function cliac() {
    document.querySelector(".lockScreen .overlay").style.cssText =
      "pointer-events: none !important;animation:lockScreenSwipe 0.3s ease;";
    document
      .querySelector(".lockScreen .overlay")
      .addEventListener("animationend", () => {
        alert("ENDED OMG POGGEWRS");
      });
  }

  var init = false;
  var startY;

  function testfunction(event) {
    if (event.buttons > 0 && init === false) {
      console.log(event);
      startY = event.clientY;
      init = true;
    } else if (event.clientY < startY && event.buttons > 0 && init === true) {
      console.log(event);
      init = true;
    }
  }

  // 50% drag counts anywhere from the bottom to top

  function playBootSound() {
    var audio = new Audio("/w11startup.mp3");
    audio.play();
  }

  onMount(async () => {
    await fetch(`/wallpaper/01.jpg`).then((res) => {
      var tmp = document.querySelector("#lockScreenBG");
      if (
        res.status === 200 &&
        res.statusText === "OK" &&
        !tmp.classList.contains("ls-fading")
      ) {
        tmp.classList.add("ls-fading");
      } else {
        alert(
          "An error occured while setting up the lock screen background...Please check the console."
        );
      }
    });
  });
</script>

<main class="lockScreen" on:contextmenu={cliac} on:click={playBootSound}>
  <div id="lockScreenBG" class="background" />
  <div class="overlay" on:mousemove={testfunction}>
    <!-- overlay stuff i guess -->
    <div class="center">
      <h1 id="lockScreenTime">aa</h1>
      <h3 id="lockScreenDate">aa</h3>
    </div>
    <div class="bottom">
      <icon>&#xE839;</icon>
    </div>
    <a href={$url("./desktop")}>hi click me please</a>
  </div>
  <div class="overlay2">
    <h1>hi</h1>
  </div>
</main>

<style lang="scss">
  main {
    filter: contrast(0deg);
    font-family: "Segoe UI Variable";
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  icon {
    display: inline-block;
    width: 18px;
    height: 18px;
    font-family: Segoe Fluent Icons;
    font-size: 18px;
    filter: brightness(99%);
  }
  .background {
    background-image: url(https://cdn.wallpaperhub.app/cloudcache/2/0/c/7/1/a/20c71afa0b4906268901ce012550c62b404f8f19.jpg);
    background-position: center;
    background-size: cover;
    z-index: 0;
    width: 100%;
    height: 100%;
    position: fixed;
  }
  .overlay {
    z-index: 1;
    width: 100%;
    height: 100%;
    padding: 0px;
    position: fixed;
    color: rgb(255, 255, 255);
    background: none;
    cursor: pointer;
  }
  .overlay2 {
    z-index: 1;
    width: 100%;
    height: 100%;
    padding: 15px;
    position: fixed;
    visibility: collapse;
    color: rgb(255, 255, 255);
    background: none;
  }
  @keyframes ls-fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .ls-fading {
    animation: ls-fade 1s ease;
  }
  .bottom {
    position: absolute;
    bottom: 27px;
    right: 27px;
  }
  .center {
    text-align: center;
    position: absolute;
    // top: 50px;
    top: 148px;
    left: 50%;
    transform: translate(-50%, 0);
    h1 {
      font-size: 128px;
      //   margin-bottom: 10px !important;

      font-weight: 555;
    }
    h3 {
      font-size: 27px;
      font-weight: 650;
    }
    h1,
    h3 {
      margin: 0;
      padding: 0;
    }
  }
</style>
