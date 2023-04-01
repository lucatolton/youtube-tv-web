let getScriptTag = document.getElementById('hdQuality');
if (getScriptTag) getScriptTag.remove();

let script = document.createElement('script');
script.id = 'hdQuality';
script.type = 'text/javascript';
script.textContent = `var ytvPlayer = document.getElementById('movie_player') || document.querySelector('.html5-video-player'); ytvPlayer.setPlaybackQualityRange('highres');` +
                    `document.getElementByTagName('body')[0].onkeydown = (e) => { if (e.keyCode == 428) { ytvPlayer.requestFullscreen(); } }`;

document.body.appendChild(script);