<template>
  <main>
    <div class="front">
      <div class="logo"><b>I am <span>ko</span>zi<span>mo</span>n</b></div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'blank',

  head() {
    return {
      meta: [
        {
          hid: 'kozikozi',
          name: 'kozi~mon~',
          content: 'kozimon! kozimon!'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.front {
  height: 100vh;
  background: url('/images/deer.png');
  display: table;
  width: 100%;
  -webkit-animation: slide 60s linear infinite;
}
@-webkit-keyframes slide {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -400px 0;
  }
}

.logo {
  text-align: center;
  vertical-align: middle;
  display: table-cell;
}
.logo b {
  font: 100 10vh 'BlinkMacSystemFont';
  color: #fee;
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #912626, 0 0 0.5em #912626,
    0 0 0.1em #912626, 0 10px 3px #000;
}
.logo b span {
  animation: blink linear infinite 2s;
}
@keyframes blink {
  78% {
    color: inherit;
    text-shadow: inherit;
  }
  79% {
    color: #333;
  }
  80% {
    text-shadow: none;
  }
  81% {
    color: inherit;
    text-shadow: inherit;
  }
  82% {
    color: #333;
    text-shadow: none;
  }
  83% {
    color: inherit;
    text-shadow: inherit;
  }
  92% {
    color: #333;
    text-shadow: none;
  }
  92.5% {
    color: inherit;
    text-shadow: inherit;
  }
}
</style>
