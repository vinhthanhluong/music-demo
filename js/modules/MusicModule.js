export default function MusicModule() {

    const song = document.getElementById('song');
    const playBtn = document.querySelector('.play-inner');
    const prevBtn = document.querySelector('.play-prev');
    const nextBtn = document.querySelector('.play-next');
    const rangeBar = document.querySelector('.f-range');
    const durationTime = document.querySelector('.duration');
    const remainingTime = document.querySelector('.remaining');
    const songName = document.querySelector('.mp3-name-song');
    const songNameUser = document.querySelector('.mp3-name-user');
    const songImg = document.querySelector('.mp3-img img');
    const songRepeat = document.querySelector('.play-repeat');
    const songInfinite = document.querySelector('.play-infinite');
    const songImgs = document.querySelector('.m-img img');

    let isPlaying = true;
    let indexSong = 0
    let timer;
    // const music = ['bqdn.mp3', 'td.mp3', '3107-3.mp3', 'dvn.mp3', 'gq.mp3', 'threat.mp3'];
    const music = [
        {
            id: 1,
            title: 'Bước qua đời nhau',
            name: 'Vũ',
            file: 'bqdn.mp3',
            img: 'img-bqdn.jpg',
        },
        {
            id: 2,
            title: 'Thiên đàng',
            name: 'thiên đàng',
            file: 'td.mp3',
            img: 'img-td.jpg',
        },
        {
            id: 3,
            title: '3107 - 3',
            name: 'W/n ft.Nâu , Dương, Titie',
            file: '3107-3.mp3',
            img: 'img-3107.png',
        },
        {
            id: 4,
            title: 'Đường về nhà',
            name: 'Đen Vâu - JustaTee',
            file: 'dvn.mp3',
            img: 'img-dvn.jpg',
        },
        {
            id: 5,
            title: 'ghé qua',
            name: 'Dick - PC - Tofu',
            file: 'gq.mp3',
            img: 'img-gq.jpg',
        },
        {
            id: 6,
            title: 'chỉ có 1 mình',
            name: 'TAC ft. Giáo Sư P.SharkQ',
            file: 'threat.mp3',
            img: 'img-threat.jpg',
        },
        {
            id: 7,
            title: 'Đế vương',
            name: 'Đình Dũng',
            file: 'dv.mp3',
            img: 'img-dv.png',
        },
    ]

    playBtn.addEventListener('click', playPause);

    //khởi tạo
    function init(indexSong) {
        // add bài hát 
        song.setAttribute('src', `./music/${music[indexSong].file}`);
        songName.textContent = music[indexSong].title;
        songImg.setAttribute("src", `./img/${music[indexSong].img}`);
        songNameUser.textContent = music[indexSong].name;
        songImgs.setAttribute("src", `./img/${music[indexSong].img}`);
    }
    init(indexSong);
    displayTimer();
    // Phần play và pause
    function playPause() {
        if (isPlaying) {
            song.play();
            isPlaying = false;
            playBtn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
            timer = setInterval(displayTimer, 500);
            songImg.parentElement.classList.add('is-playing');
            songImgs.parentElement.classList.add('is-playing');

        } else {
            song.pause();
            isPlaying = true;
            playBtn.innerHTML = ' <i class="fa fa-play" aria-hidden="true"></i>';
            clearInterval(timer);
            songImg.parentElement.classList.remove('is-playing');
            songImgs.parentElement.classList.remove('is-playing');
        }
        $('.my-list .item').removeClass('active').siblings().eq(indexSong).addClass('active');

    }

    //keybord play & pause
    document.onkeydown = function (e) {
        if (e.keyCode == 32) {
            if (isPlaying) {
                playBtn.click();
            } else {
                playBtn.click();
            }
        }
    }

    // acction của song
    prevBtn.addEventListener('click', function () {
        changeSong(-1);
    });
    nextBtn.addEventListener('click', function () {
        changeSong(1);
    });

    function changeSong(dir) {
        if (dir == 1) {
            indexSong++;

            if (indexSong >= music.length) {
                indexSong = 0;
            }

        } else if (dir == -1) {
            indexSong--;

            if (indexSong < 0) {
                indexSong = music.length - 1;
            }
        }

        init(indexSong);

        isPlaying = true;
        playPause();
        // $('.my-list .item.active').scrollIntoView();

        // console.log($('.my-list .item.active').scrollIntoView())
        scrollActiveSong();
    }

    // time của song
    function displayTimer() {
        const duration = song.duration;
        const currentTime = song.currentTime;
        remainingTime.textContent = formatTimer(currentTime);
        rangeBar.max = duration;
        rangeBar.value = currentTime;
        handRange();
        if (!duration) {
            durationTime.textContent = '00:00';
        } else {
            durationTime.textContent = formatTimer(duration);
        }
    }

    ///custom timer
    function formatTimer(number) {
        const minutes = Math.floor(number / 60);
        const seconds = Math.floor(number - minutes * 60);
        return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }

    // khi kéo ranger bar
    rangeBar.addEventListener('input', handlechangeBar);
    rangeBar.addEventListener('input', handRange);

    function handlechangeBar() {
        song.currentTime = rangeBar.value;
    }
    function handRange() {
        let valRange = (rangeBar.value / rangeBar.max) * 100;
        rangeBar.style.background = `linear-gradient(to right, #ab96d6 ${valRange}%, #d5d5d5 ${valRange}%)`;
    }

    // end song infiniti list music
    song.addEventListener('ended', handleEndSong);
    function handleEndSong() {
        if (isRepeat && isAllSong) {
            isPlaying = false;
            playPause();
        } else if (isRepeat) {
            isPlaying = true;
            playPause();
            isAllSong = false;
        } else if (isAllSong) {
            changeSong(1);
            isRepeat = false;
        } else {
            // changeSong(1);
            isPlaying = false;
            playPause();
        }
    }


    //vòng lặp 1 bài
    let isRepeat = false;
    songRepeat.addEventListener('click', function () {
        if (isRepeat) {
            isRepeat = false;
        } else {
            isRepeat = true;
        }
        console.log("isRepeat:" + isRepeat);
        songRepeat.classList.toggle('active');
    });

    //vòng lặp tất cả bài
    let isAllSong = false;
    songInfinite.addEventListener('click', function () {
        if (isAllSong) {
            isAllSong = false;
        } else {
            isAllSong = true;
        }
        console.log("isAllSong:" + isAllSong);
        songInfinite.classList.toggle('active');
    });

    $.each(music, function (i, f) {

        const itemSong =
            `
            <div class="item ${f.id === 1 ? 'active' : ''}" data-id='${f.id}'>
                <div class="itm-lt">
                    <div class="stt">
                        <p class="text-stt"> ${f.id} </p>
                        <div class="st-ic">
                            <i class='fa fa-play' aria-hidden='true'></i>
                        </div>
                    </div>
                    <div class="like-icon hidden">
                        <i class="fa fa-heart-o" aria-hidden="true"></i>
                        <i class="fa fa-heart" aria-hidden="true"></i>
                    </div>

                    <div class="itm-text">
                        <p class="tm-song">
                            ${f.title}
                        </p>
                        <p class="tm-name">
                            ${f.name}
                        </p>
                    </div>
                    </div>
                    <div class="itm-rt">
                        <div class="tm-dot">
                            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                        <div class="total-timer">
                            00:00
                        </div>
                    </div>
            </div>
            `;

        $(itemSong).appendTo('#list-music');
        // $(duration_1Song).appendTo('.total-time');

    });

    //click bài hát
    $('.my-list .item').on('click', function () {
        const indexItem = $(this).attr('data-id') - 1;
        indexSong = indexItem;
        init(indexSong);
        isPlaying = true;
        playPause();

        // $(this).addClass('active').siblings().removeClass('active');

    });

    // like icon
    $('.like-icon').on('click', function () {
        if ($(this).hasClass('show')) {
            $(this).addClass('hidden');
            $(this).removeClass('show');
            return;
        } else if ($(this).hasClass('hidden')) {
            $(this).addClass('show');
            $(this).removeClass('hidden');
        }
    });

    //volume
    const volume = document.getElementById("volume");

    volume.addEventListener('input', handVolume);
    volume.addEventListener('input', volumeSong);

    function handVolume() {
        let valPercent = (volume.value / volume.max) * 100;
        volume.style.background = `linear-gradient(to right, #ab96d6 ${valPercent}%, #d5d5d5 ${valPercent}%)`;
    }
    handVolume();
    function volumeSong() {
        const valSong = volume.value / 10;
        const volSong = song.volume = valSong;
        return volSong;
    }

    // cuộn item active hiện lên
    function scrollActiveSong() {
        setTimeout(() => {
            $('.item.active')[0].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            })
        }, 200);
    }

    //rps
    const width = $(window).width();
    if (width <= 576) {
        $('.mp3-text').appendTo('.column.ig');

        const activeVol = $('.volumes');
        $(document).mouseover(function (e) { 
            if (!activeVol.is(e.target) && activeVol.has(e.target).length === 0) {
                activeVol.removeClass('active');
            }
        });

        $('.icon-vol').on('click', function () {
            activeVol.toggleClass('active');
        });
    }


}