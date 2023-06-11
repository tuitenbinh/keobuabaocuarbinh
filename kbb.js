
function randomanswer() {
    let answer = Math.random() * (3 - 1);
    let result = Math.round(answer) + 1;

    return result;
}

function keo() {

    let cmm = randomanswer(), doiphuong;

    console.log(cmm)

    switch (cmm) {
        case 1:
            doiphuong = "Kéo";
            break;
        case 2:
            doiphuong = "Búa";
            break;
        case 3:
            doiphuong = "Bao";
            break;

    } 

    document.getElementById('display').innerHTML = "Đối Phương Ra: " + doiphuong; 

    switch(cmm) {
        case 1:
            document.getElementById('display_2').innerHTML = "Huề";
            break;
        case 2:
            document.getElementById('display_2').innerHTML = "Thua";
            break;
        case 3:
            document.getElementById('display_2').innerHTML = "Thắng";
            break;
    }
        
}

function bua() {

    let cmm = randomanswer(), doiphuong;

    console.log(cmm)

    switch (cmm) {
        case 1:
            doiphuong = "Kéo";
            break;
        case 2:
            doiphuong = "Búa";
            break;
        case 3:
            doiphuong = "Bao";
            break;

    } 

    document.getElementById('display').innerHTML = "Đối Phương Ra: " + doiphuong; 

    switch(cmm) {
        case 1:
            document.getElementById('display_2').innerHTML = "Thắng";
            break;
        case 2:
            document.getElementById('display_2').innerHTML = "Huề";
            break;
        case 3:
            document.getElementById('display_2').innerHTML = "Thua";
            break;
    }
        
}

function bao() {

    let cmm = randomanswer(), doiphuong;

    console.log(cmm)

    switch (cmm) {
        case 1:
            doiphuong = "Kéo";
            break;
        case 2:
            doiphuong = "Búa";
            break;
        case 3:
            doiphuong = "Bao";
            break;

    } 

    document.getElementById('display').innerHTML = "Đối Phương Ra: " + doiphuong; 

    switch(cmm) {
        case 1:
            document.getElementById('display_2').innerHTML = "Thua";
            break;
        case 2:
            document.getElementById('display_2').innerHTML = "Thắng";
            break;
        case 3:
            document.getElementById('display_2').innerHTML = "Huề";
            break;
    }
        
}