

let cDate = new Date();
let cDay = cDate.getDate()
let cYear = cDate.getFullYear()
let cMonth = cDate.getMonth() + 1
let lYear = cYear-1

console.log(cDay);
console.log(cMonth);
console.log(cYear);
console.log(lYear); 

const lastYear=`${lYear}-${cMonth}-${cDay}`
console.log(lastYear)

document.getElementById("cal").defaultValue = `${lastYear}`;

fetch(`https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${lastYear}`) 
.then(res => res.json()) 
      .then(data => {
        console.log(data)

        if( data.media_type === 'image' ){
          document.querySelector('#video').classList.add('hidden') 
          document.querySelector('#image').classList.remove('hidden')
          document.querySelector('#image').src = data.hdurl

        }else if(data.media_type === 'video'){
          document.querySelector('#image').classList.add('hidden')
          document.querySelector('#video').classList.remove('hidden')  
          document.querySelector('#video').src = data.url
           
        }
        document.querySelector('#date').innerText = data.date
        document.querySelector('#title').innerText = data.title
        document.querySelector('#explanation').innerText = data.explanation
        document.querySelector('copyright').innerText = data.copyright
      })
      .catch(err => {
          console.log(`error ${err}`)
      });



document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${choice}`

  fetch(url)
      .then(res => res.json()) 
      .then(data => {
        console.log(data)

        if( data.media_type === 'image' ){
          document.querySelector('#video').classList.add('hidden') 
          document.querySelector('#image').classList.remove('hidden')
          document.querySelector('#image').src = data.hdurl

        }else if(data.media_type === 'video'){
          document.querySelector('#image').classList.add('hidden')
          document.querySelector('#video').classList.remove('hidden')  
          document.querySelector('#video').src = data.url
           
        }
        document.querySelector('#date').innerText = data.date
        document.querySelector('#title').innerText = data.title
        document.querySelector('#explanation').innerText = data.explanation
        
        let copyright = function(){
            if(data.copyright != undefined || data.copyright != null){document.querySelector('#copyright').innerText = data.copyright}
            else{document.querySelector('#copyright').innerText = ""}
        }
        copyright()

        

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

