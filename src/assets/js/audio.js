const loadWaveformData = async() => {
  const request = await fetch("/assets/data/waveforms.json");
  const waveforms = await request.json();

  window.waveforms = waveforms;
}

const loadAudio = (audio) => {
  let media = audio.querySelector("audio");

  const slug = audio.dataset.slug;
  const file = decodeURI( media.src.replace( window.location.origin, ''));

  let color = getComputedStyle(audio).getPropertyValue("--color");
  let alpha = getComputedStyle(audio).getPropertyValue("--color-alpha");
  const data = window.waveforms[file.substring(1)];
  
  var wavesurfer = WaveSurfer.create({
    container: `#${slug}-audio`,
    waveColor: color,
    progressColor: alpha,
    barWidth: 5,
    barGap: 5,
    barRadius: 5,
    barHeight: 1,
    height: 60,
    media,
    peaks: data.peaks,
    duration: data.duration
  });

  wavesurfer.on("play", () => {
    if(!wavesurfer.loaded) 
      wavesurfer.load( decodeURI(media.src), data?.peaks );

    updateState();
  })

  wavesurfer.on("ready", () => {
    if(!wavesurfer.loaded)
      wavesurfer.loaded = true;
  })

  wavesurfer.on("error", e => {
    console.log(e);
  })

  media?.addEventListener("loadeddata", () => {
    updateState();
  });

  

  let button = audio.querySelector(".audio-button");

  const updateState = () => { 
    const isPlaying = wavesurfer.isPlaying();
    const icon = button?.querySelector(".audio-icon");
    const player = button?.closest(".audio");
    const isLoading = media.readyState < 3;

    icon?.classList.toggle("fa-pause", isPlaying && !isLoading);
    icon?.classList.toggle("fa-play", !isPlaying && !isLoading);
    icon?.classList.toggle("fa-spinner", isLoading);
    icon?.classList.toggle("fa-spin", isLoading);
    player?.classList.toggle("is-playing", wavesurfer.isPlaying());
  }

  button?.addEventListener("click", () => {
    wavesurfer.playPause();
    updateState();
  });

  wavesurfer.on("finish", updateState);
  media?.addEventListener("play", updateState);
  media?.addEventListener("pause", updateState);
  media?.addEventListener("ended", updateState);
}


document.addEventListener("DOMContentLoaded", function() {
  
  (async()=>{
    await loadWaveformData();

    const audios = [...document.querySelectorAll(".audio")];
    audios.forEach( loadAudio );
  })();
})