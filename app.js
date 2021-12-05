let API = "AIzaSyAzjtp4Eqcm8RzNaGmQhvVPbFUM011XylE";

let vid_div = document.getElementById("video-div");

async function searchVideo(){

    vid_div.innerHTML=""

    let inp = document.getElementById("inputbox").value;

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${inp}&key=${API}&type=video&maxResults=20&part=snippet`)

    let data = await res.json();

    // console.log(data)

    let arrVid = data.items;
    appendVideos(arrVid)
}

    const appendVideos = (arr) => {
        

        arr.forEach(({snippet, id: { videoId } }) => {

            console.log(snippet);

            let div1=document.createElement("div")
            div1.setAttribute("id","pdiv")

            let url = snippet.thumbnails.medium.url;

            let img = document.createElement("img")
            img.setAttribute("id","img_1") 

            img.src = url;

            let title = snippet.title;

            let h4 = document.createElement("h4")
            h4.innerHTML = title;

            let video_data ={
                snippet,
                videoId,
            };

            div1.onclick = () => {

                showVideo(video_data);
            };

            div1.append(img,h4)

            vid_div.append(div1)
        });


    };

    const showVideo=(video_data) =>{
        localStorage.setItem("clickVideo",JSON.stringify(video_data));

        window.open("video.html");
    }

