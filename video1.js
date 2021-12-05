// let video_data = JSON.parse(localStorage.getItem("clickVideo"));

// // console.log("vedio_data :",video_data);

// let video_div = document.getElementById("video_details");

// let iframe = document.createElement("iframe");
// iframe.src = `https://www.youtube.com/embed/${video_data.videoId}`;

// iframe.height="80%";
// iframe.width="80%";
// iframe.setAttribute("allowfullscreen",true);

// video_div.append("iframe");



// ---------------


//   

    let video_data = JSON.parse(localStorage.getItem("clickVideo"));
   

    let video_div = document.getElementById("video_details");

    let iframe = document.createElement("iframe");

    iframe.src = `https://www.youtube.com/embed/${video_data.videoId}`;

    iframe.height = "100%";
    iframe.width = "100%";
    iframe.setAttribute("allowfullscreen", true);

    video_div.append(iframe);


  

