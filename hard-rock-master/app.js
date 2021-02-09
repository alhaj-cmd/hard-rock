const searchsongs = async() =>{
    const searchText = document.getElementById('search-field').value;
   const url =` https://api.lyrics.ovh/suggest/${searchText}`
  //laod data
   const res = await fetch(url);
   const data = await res.json();
   displaysongs(data.data);
}
const displaysongs = songs => {
    const songContainer = document.getElementById('song-container');
songContainer.innerHTML = '';
    songs.forEach(song => {
        console.log(song)
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3';
        songDiv.innerHTML =`
     <div class="col-md-9">
        <h3 class="lyrics-name">${song.title}</h3>
        <p class="author lead">Album by <span>${song.artist.name}</span></p>
        <audio controls>
          <source src="${song.preview}" type="audio/mpeg">
        </audio>
    </div>
    <div class="col-md-3 text-md-right text-center">
        <button onclick="getlyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
    </div>`;
        songContainer.appendChild(songDiv);
    })
}
const getlyric = async (artist,title) => {
   const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
   const res = await fetch(url);
   const data = await res.json();
  displaylyrics(data.lyrics);

// const getlyric = (artist,title) => {
//    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
//    fetch(url)
//    .then(res => res.json())
//    .then(data => displaylyrics(data.lyrics))
}
const displaylyrics =  lyrics =>{
    const lyricsDiv = document.getElementById('song-lyrics')
    lyricsDiv.innerText = lyrics;
}