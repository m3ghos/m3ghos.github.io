function xd() {
    var img = document.getElementById('xd');
    var par = document.getElementById('par')
    if (img.style.display === 'none') {
        img.style.display = 'block';
        par.style.display = 'block';
    } else {
        img.style.display = 'none';
        par.style.display = 'none'
    }
}

function rand() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function cc() {
    var colorLine = document.getElementById('par');
    colorLine.style.color = rand();
    colorLine.style.backgroundColor = rand();

  }

function migho() {
    document.getElementById('bt').style.boxShadow = '0px 0px 2px 2px '+rand()
    var me = document.getElementById('about_me');
    me.style.boxShadow = '0px 0px 400px 10px'+rand()
    document.getElementById('contentname').style.color = rand()
    var colorLine = document.getElementById('ran');
    var colorLine2 = document.getElementById('ran2');
    var colorLine3 = document.getElementById('ran3');
    colorLine.style.color = rand();
    colorLine2.style.color = rand();
    colorLine3.style.color = rand();
    var img = document.getElementById('xd');
    img.style.border = number(1,7)+'px dashed '+ rand();
    document.getElementById('shkh').style.color = rand()
    document.getElementById('at1').style.color = rand()
    document.getElementById('at2').style.color = rand()
    document.getElementById('line').style.color = rand()
    document.getElementById('texts').style.boxShadow = '0px 0px 2px 2px '+rand()
  }

function number(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


function getmessage(){
    var msgloc = document.getElementById("texts");
    if (msgloc.value !== ''){
        message(msgloc.value);
    }else{
        alert('لا يجب ان تكون الرسالة فارغة')
    }
    msgloc.value = "";
}

function message(msg){
    const data = {'msg':msg};
    fetch('https://api.telegram.org/bot7158836489:AAHbu_6Ea7Tqffjxd5FWEFULn_WJACpiOeU/sendMessage?chat_id=6380116433&text='+msg, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Response from server:', data);
       
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
}
setInterval(cc, 50);
setInterval(migho, 50);
