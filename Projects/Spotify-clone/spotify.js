const cardP1 = document.querySelector(".cardP1")
const cardP2 = document.querySelector(".cardP2")
const cardP3 = document.querySelector(".cardP3")
const cardP4 = document.querySelector(".cardP4")
const cardP5 = document.querySelector(".cardP5")

// async function getSongs() {
//   let a = await fetch("/spotify-clone/songs/")
//   let respones = await a.text()
//   let div = document.createElement("div")
//   div.innerHTML = respones
//   let as = div.getElementsByTagName("a")

//   let songs = []

//   for (let index = 0; index < as.length; index++) {
//     const element = as[index]

//     if (element.href.endsWith(".mp3")) {
//       songs.push(element.href.split("/songs/")[1])
//     }
//   }

//   return songs
// }

// async function main() {
//   let songs = await getSongs()
//   console.log(songs)

//   let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
//   for (const song of songs) {
//     songUL.innerHTML =
//       songUL.innerHTML +
//       `<li><img class="invert" width="23px" src="pics/music.svg" alt="">
//                             <div class="info">
//                                 <div> ${song.replaceAll("%20", " ")}</div>
//                                 <div>Wajahat Kamal</div>
//                             </div>
//                             <div class="playnow">
//                                 <span>Play Now</span>
                                
//                                 <img width="20px" class="invert" src="pics/play.svg" alt="">
//                             </div> </li>`
//   }



//   audio.addEventListener("loadeddata", () => {
//     // let duration = audio.duration
//     console.log(audio.duration, audio.currentSrc, audio.currentTime)

//     Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach( li => {
//       console.log(li);
//     })


//   })
// }
// main()

const cardd1 = [
  {
    img: "https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca",
    name: "Pritam",
    para: "Artist",
  },
  {
    img: "https://i.scdn.co/image/ab67616100005174c40600e02356cc86f0debe84",
    name: "Atif Aslam",
    para: "Artist",
  },
  {
    img: "https://i.scdn.co/image/ab67616100005174fc043bea91ac91c222d235c9",
    name: "Diljit Dosanjh",
    para: "Artist",
  },
  // {
  //   img: "https://i.scdn.co/image/ab676161000051748f553f96d564d1005a92d131",
  //   name: "Shubh",
  //   para: "Artist",
  // },
  {
    img: "https://i.scdn.co/image/ab676161000051745ba2d75eb08a2d672f9b69b7",
    name: "Arijit Singh",
    para: "Artist",
  },
  {
    img: "https://i.scdn.co/image/ab67616100005174fb505b37709fa86cfd8f55b3",
    name: "AP Dhillon",
    para: "Artist",
  },
  {
    img: "https://i.scdn.co/image/ab676161000051747aa689cd7ca136098b26c20d",
    name: "Karan Aujla",
    para: "Artist",
  },
]

cardd1.forEach((arr) => {
  let card1 = document.createElement("div")
  card1.classList.add("card1")

  card1.innerHTML = `<img src="${arr.img}" alt="">
  <h5 class="cardh4">${arr.name}</h5>
  <p class="cardp">${arr.para}</p>
  <svg class="play"  ><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
  `
  cardP1.appendChild(card1)
})

const cardd2 = [
  {
    img: "https://i.scdn.co/image/ab67616d00001e0272a77d038887cdc425f5ee55",
    name: "Jo Tum Mere Ho",
    para: "Anuv Jain",
  },
  {
    img: "https://i.scdn.co/image/ab67616d00001e02aad3f4b601ae8763b3fc4e88",
    name: "GLORY",
    para: "Yo Yo Honey Singh",
  },
  {
    img: "https://i.scdn.co/image/ab67616d00001e02bb25239324c4e16ae01fda36",
    name: "Making Memories",
    para: "Karan Ajula, lkky",
  },{
    img: "https://i.scdn.co/image/ab67616d00001e02453e292ec04853335c32e0b4",
    name: "Jhol",
    para: "Maanu, Annural Khalid ",
  },
  {
    img: "https://i.scdn.co/image/ab67616d00001e021a8c4618eda885a406958dd0",
    name: "Still Rollin",
    para: "Shubh",
  },
  {
    img: "https://i.scdn.co/image/ab67616d00001e021d1cc2e40d533d7bcebf5dae",
    name: "Moosetape",
    para: "Sidhu Mosse wala",
  },
  // {
  //   img: "https://i.scdn.co/image/ab67616d00001e02b1b27f0bbb6cf31db78a6aa4",
  //   name: "ROCKSTAR WITHOUT A GUITAR",
  //   para: "Umair",
  // },
  
]

cardd2.forEach((arr) => {
  let card2 = document.createElement("div")
  card2.classList.add("card2")

    card2.innerHTML = `<img src="${arr.img}" alt="">
  <h6 class="cardh4">${arr.name}</h6>
  <p class="cardp">${arr.para}</p>
  <svg class="play"  ><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
  `
  cardP2.appendChild(card2)
})


 const cardd3 = [
   {
     img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/4YRxDV8wJFPHPTeXepOstw/en",
     name: "With Atif Aslam,",
     para: "Mithoon, Pritam and ...",
   },
   {
     img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/2FKWNmZWDBZR4dE5KX4plR/en-GB",
     name: "With Karan Aujla,",
     para: "Shubh, Sidhu Mosse ...",
   },
  //  {
  //    img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/6DARBhWbfcS9E4yJzcliqQ/en-GB",
  //    name: "With Diljit Dosanjh,",
  //    para: "Shubh, Sidhu Mosse ...",
  //  },
   {
     img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/69xcFpmqTOmFNOL08Bxyci/en-GB",
     name: "With Umair, Young",
     para: "Stunners, Tallha ...",
   },
   {
     img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/5r3wPya2PpeTTsXsGhQU8O/en-GB",
     name: "With AP Dhillon,",
     para: "Karan Aujla, Diljit ...",
   },
   {
     img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/6LEG9Ld1aLImEFEVHdWNSB/en-GB",
     name: "With Shubh, Diljit",
     para: "Dosanjh, Karan Aujla ...",
   },
   {
     img: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/5HcunTidTUrOaf8V0iJcvl/en-GB",
     name: "With Noor jehan,",
     para: "Madhur Sharma, Ghu...",
   },
 ]

cardd3.forEach((arr) => {
  let card3 = document.createElement("div")
  card3.classList.add("card3")

  card3.innerHTML = `<img src="${arr.img}" alt="">
  <p>${arr.name}</p>
  <p>${arr.para}</p>
  <svg class="play"  ><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
  `
  cardP3.appendChild(card3)
})


const cardd4 = [
  {
    img: "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
    name: "",
    para: "Your weekly update of the most played tracks...",
  },
  {
    img: "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_us_default.jpg",
    name: "",
    para: "Your weekly update of the most played tracks...",
  },
  {
    img: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
    name: "",
    para: "Your daily update of themost played tracks...",
  },
  {
    img: "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_us_default.jpg",
    name: "",
    para: "Your daily update of the most played tracks...",
  },
  {
    img: "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_default.jpg",
    name: "",
    para: "Your daily update of the viral tracks right...",
  },
  {
    img: "https://charts-images.scdn.co/assets/locale_en/viral/daily/region_us_default.jpg",
    name: "",
    para: "Your daily update of the viral tracks right n...",
  },
]

cardd4.forEach((arr) => {
  let card4 = document.createElement("div")
  card4.classList.add("card4")

  card4.innerHTML = `<img src="${arr.img}" alt="">
  <p>${arr.name}</p>
  <p>${arr.para}</p>
  <svg class="play"  ><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
  `
  cardP4.appendChild(card4)
})


const cardd5 = [
  {
    img: "https://i.scdn.co/image/ab67706f0000000242ede53dcaaa172b7bbca101",
    name: "",
    para: "Warm familiar pop you know and love. Cove...",
  },
  {
    img: "https://i.scdn.co/image/ab67706f000000024a83d42ca84e63abc9413b5d",
    name: "",
    para: "Rock legends & epic songs that continue t...",
  },
  {
    img: "https://i.scdn.co/image/ab67706f0000000255be59b7be2929112e7ac927",
    name: "",
    para: "chill beats, lofi vibes, new tracks every week...",
  },
  {
    img: "https://i.scdn.co/image/ab67706f00000002b43eac9f01f8b865662b5c29",
    name: "",
    para: "The biggest songs of the 2020s. Cover: Doja Cat",
  },
  {
    img: "https://i.scdn.co/image/ab67706f000000029385ce8e365c6b8ba3f70d4b",
    name: "",
    para: "Just lean back and enjoy relaxed beats.",
  },
  {
    img: "https://i.scdn.co/image/ab67706f00000002bc79ef15a2ab2b0c6d49ee99",
    name: "",
    para: "The hottest 50. Cover: Gracie Abrams",
  },
]

cardd5.forEach((arr) => {
  let card5 = document.createElement("div")
  card5.classList.add("card5")

  card5.innerHTML = `<img src="${arr.img}" alt="">
  <p>${arr.name}</p>
  <p>${arr.para}</p>
  <svg class="play"  ><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
  `
  cardP5.appendChild(card5)
})


