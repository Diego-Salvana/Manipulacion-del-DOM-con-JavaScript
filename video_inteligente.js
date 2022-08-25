export function smartVideo() {
   const $video = document.querySelectorAll('video[data-smart-video]');

   function callback(entries) {
      entries.forEach((entry) => {
         entry.isIntersecting ? entry.target.play() : entry.target.pause();
         window.addEventListener('visibilitychange', () =>
            document.visibilityState === 'visible' ? entry.target.play() : entry.target.pause()
         );
      });
   }

   const observer = new IntersectionObserver((e) => callback(e), { threshold: 0.7 });
   $video.forEach((el) => observer.observe(el));
}
