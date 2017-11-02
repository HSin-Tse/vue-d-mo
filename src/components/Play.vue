<template>
  <video-player :options="videoOptions"></video-player>
</template>
<script>
  export default {
    name: 'Play',
    data () {
      return {
        videoOptions: {
          source: {
            type: "application/x-mpegURL",
            src: 'https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/playlist.m3u8',
            withCredentials: false
          },
          language: 'zh-CN',
          live: true,
          autoplay: true,
          height: 540
        }
      }
    }
  }
</script>
