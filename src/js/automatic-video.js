export function smartVideo() {
   const $video = document.querySelectorAll('video[data-smart-video]');

   function autoplay(entries) {
      entries.forEach((entry) => {
         entry.isIntersecting ? entry.target.play() : entry.target.pause();
      });
   }

   const observer = new IntersectionObserver((e) => autoplay(e), { threshold: 0.7 });
   $video.forEach((el) => observer.observe(el));
}
