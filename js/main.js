function call_yorkshire() {
  $.ajax(
    {
      type: 'GET',
      url: "php/yy_load.php",
      dataType: "json",
      success: function (data, status, xhr) {
        console.log(data);
        for (var i = 0; i < data['size']; i++) {
          var list = document.getElementById("yorkshire-dynamic-list");
          var div = document.createElement("div");
          div.className = "content";

          var str = data['images'][i].substr(3);
          div.setAttribute("id", str);//고유값
          var t_f = str.split('/')[4];
          list.appendChild(div);

          var img = document.createElement("img");
          img.src = str;//변수 
          img.setAttribute("id", t_f);
          img.className = "content-image"
          img.setAttribute('onClick', "view_change('" + "test/gradcam/output/" + str.split('/')[3] + "/" + str.split('/')[4] + "');")
          img.setAttribute("onerror", "this.onerror=null; this.src='back/image/deleted.png'");//고유값
          div.appendChild(img);
          is_mis_img(str, t_f);
        }


      },
      error: function (jqXHR, textStatus, errorThrown) { console.log(jqXHR.responseText); }
    });



}

function call_beagle() {
  $.ajax(
    {
      type: 'GET',
      url: "php/bull_load.php",
      dataType: "json",
      success: function (data, status, xhr) {
        var redata = JSON.stringify(data);

        console.log(data);


        for (var i = 0; i < data['size']; i++) {
          var list = document.getElementById("beagle-dynamic-list");
          var div = document.createElement("div");
          div.className = "content";



          var str = data['images'][i].substr(3);
          div.setAttribute("id", str);
          var t_f = str.split('/')[4];
          list.appendChild(div);

          var img = document.createElement("img");
          img.src = str;
          img.setAttribute("id", t_f);
          img.className = "content-image"
          img.setAttribute('onClick', "view_change('" + "test/gradcam/output/" + str.split('/')[3] + "/" + str.split('/')[4] + "');")
          img.setAttribute("onerror", "this.onerror=null; this.src='back/image/deleted.png'");
          div.appendChild(img);
          is_mis_img(str, t_f);

        }


      },
      error: function (jqXHR, textStatus, errorThrown) { console.log(jqXHR.responseText); }
    });



}

function call_labrador() {
  $.ajax(
    {
      type: 'GET',
      url: "php/labrador_load.php",
      dataType: "json",
      success: function (data, status, xhr) {
        var redata = JSON.stringify(data);

        console.log(data);


        for (var i = 0; i < data['size']; i++) {
          var list = document.getElementById("labrador-dynamic-list");
          var div = document.createElement("div");
          div.className = "content";



          var str = data['images'][i].substr(3);
          div.setAttribute("id", str);
          var t_f = str.split('/')[4];
          list.appendChild(div);

          var img = document.createElement("img");
          img.src = str;
          img.setAttribute("id", t_f);
          img.className = "content-image"
          img.setAttribute('onClick', "view_change('" + "test/gradcam/output/" + str.split('/')[3] + "/" + str.split('/')[4] + "');")
          img.setAttribute("onerror", "this.onerror=null; this.src='back/image/deleted.png'");
          div.appendChild(img);
          is_mis_img(str, t_f);
        }


      },
      error: function (jqXHR, textStatus, errorThrown) { console.log(jqXHR.responseText); }
    });



}


function is_mis_img(div_id, img_id) {
  var id = getCookie("id");
  var train_cycle = getCookie("train_cycle");
  $.ajax(
    {
      type: 'POST',
      url: "php/is_mis_img.php",
      dataType: "json",
      data: {
        id: id,
        train_cycle: train_cycle,
        img_id: img_id
      },

      success: function (data, status, xhr) {

        if (data) {
          console.log(data);
          console.log(div_id);
          console.log(img_id);
          //for (var i in data) {
          if (data.includes(img_id)) {
            var div = document.getElementById(div_id);
            var old = document.getElementById(img_id);
            var img = document.createElement("img");

            img.src = div_id;//변수 
            img.setAttribute("id", img_id);
            img.className = "content-image"
            img.setAttribute('onClick', "view_change('" + "test/gradcam/output/" + div_id.split('/')[3] + "/" + div_id.split('/')[4] + "');")
            img.setAttribute("onerror", "this.onerror=null; this.src='back/image/deleted.png'");//고유값
            img.setAttribute("style", "border:5px solid red;");//고유값
            div.replaceChild(img,old);
          }


        }

      },
      error: function (jqXHR, textStatus, errorThrown) {

      }
    });
}

function setChildValue(id) {
  ask();
}
function ask() {
  var retVal = prompt("어떤 방법으로 학습데이터를 준비하셨나요?", "");

  if (retVal != null) {
    user_review_insert(retVal);


  } else {
    return false;
  }

}


function view_change(identification) {
  click_insert(getCookie("id"));
  res = Math.floor(Math.random() * 10);
  var oldimg = document.getElementById("heatmap_img");
  var parent = document.getElementById("heatmap");
  var newimg = document.createElement("img");
  newimg.src = identification;//변수
  console.log("id===" + identification);
  var send = identification.split("/");
  newimg.setAttribute("id", "heatmap_img");//고유값
  newimg.setAttribute("onerror", "this.onerror=null; this.src='back/image/deleted.png'");//고유값
  //newimg.setAttribute("style", "width:400px");//고유값
  parent.replaceChild(newimg, oldimg);
  console.log("send id == " + send[3] + "/" + send[4])
  var acc = document.getElementById("acc_area");
  acc.innerHTML = '';
  $.ajax({
    url: "php/mysql.php",
    type: "GET",
    dataType: "text",
    data: {
      "id": send[3] + "/" + send[4]
    },
    success: function (txt) {
      var t1 = document.getElementById("top1");
      t1.innerHTML = "";


      console.log(txt);
      var a = txt.split("<br>");


      var tr = document.getElementById("top1");
      tr.innerHTML = "";

      var anchor = document.createElement('a');
      anchor.href = 'http://google.com/search?q=' + a[0].split("@")[0];
      anchor.target = "_blank";
      anchor.innerText = a[0].split("@")[0];
      var th_type = document.createElement("th");
      var th_type_text = document.createTextNode(a[0].split("@")[0]);
      var th_conf = document.createElement("th");
      var th_conf_text = document.createTextNode((a[0].split("@")[1] * 1).toFixed(3) + "%");
      th_type.appendChild(anchor);
      th_conf.appendChild(th_conf_text);
      tr.appendChild(th_type);
      tr.appendChild(th_conf);

      var tr = document.getElementById("top2");
      tr.innerHTML = "";
      var anchor = document.createElement('a');
      anchor.href = 'http://google.com/search?q=' + a[1].split("@")[0];
      anchor.target = "_blank";
      anchor.innerText = a[1].split("@")[0];
      var th_type = document.createElement("th");
      var th_type_text = document.createTextNode(a[1].split("@")[0]);
      var th_conf = document.createElement("th");
      var th_conf_text = document.createTextNode((a[1].split("@")[1] * 1).toFixed(3) + "%");
      th_type.appendChild(anchor);
      th_conf.appendChild(th_conf_text);
      tr.appendChild(th_type);
      tr.appendChild(th_conf);

      var tr = document.getElementById("top3");
      tr.innerHTML = "";
      var anchor = document.createElement('a');
      anchor.href = 'http://google.com/search?q=' + a[2].split("@")[0];
      anchor.target = "_blank";
      anchor.innerText = a[2].split("@")[0];
      var th_type = document.createElement("th");
      var th_type_text = document.createTextNode(a[2].split("@")[0]);
      var th_conf = document.createElement("th");
      var th_conf_text = document.createTextNode((a[2].split("@")[1] * 1).toFixed(3) + "%");
      th_type.appendChild(anchor);
      th_conf.appendChild(th_conf_text);
      tr.appendChild(th_type);
      tr.appendChild(th_conf);

      var tr = document.getElementById("top4");
      tr.innerHTML = "";
      var anchor = document.createElement('a');
      anchor.href = 'http://google.com/search?q=' + a[3].split("@")[0];
      anchor.target = "_blank";
      anchor.innerText = a[3].split("@")[0];
      var th_type = document.createElement("th");
      var th_type_text = document.createTextNode(a[3].split("@")[0]);
      var th_conf = document.createElement("th");
      var th_conf_text = document.createTextNode((a[3].split("@")[1] * 1).toFixed(3) + "%");
      th_type.appendChild(anchor);
      th_conf.appendChild(th_conf_text);
      tr.appendChild(th_type);
      tr.appendChild(th_conf);

      var tr = document.getElementById("top5");
      tr.innerHTML = "";
      var anchor = document.createElement('a');
      anchor.href = 'http://google.com/search?q=' + a[4].split("@")[0];
      anchor.target = "_blank";
      anchor.innerText = a[4].split("@")[0];
      var th_type = document.createElement("th");
      var th_type_text = document.createTextNode(a[4].split("@")[0]);
      var th_conf = document.createElement("th");
      var th_conf_text = document.createTextNode((a[4].split("@")[1] * 1).toFixed(3) + "%");
      th_type.appendChild(anchor);
      th_conf.appendChild(th_conf_text);
      tr.appendChild(th_type);
      tr.appendChild(th_conf);
    }
  });//end ajax call

  $.ajax({
    url: "php/interactive_call.php",
    type: "GET",
    dataType: "text",
    data: {
      "id": send[3] + "/" + send[4]
    },
    success: function (txt) {
      var parent = document.getElementById("acc_area");

      var p = document.createElement("h4");
      var p_text0 = document.createTextNode(change_to_hanguel(txt.split('@')[1]) + txt.split('@')[1]);
      var p_text1 = document.createTextNode(change_to_hanguel(txt.split('@')[2]) + txt.split('@')[2]);
      var p_text2 = document.createTextNode(change_to_hanguel(txt.split('@')[3]) + txt.split('@')[3]);

      p.appendChild(p_text0);
      p.appendChild(document.createElement("br"));
      p.appendChild(p_text1);
      p.appendChild(document.createElement("br"));
      p.appendChild(p_text2);


      parent.appendChild(p);
      console.log("interac" + txt);
    }
  });
}

function popupOpen(src) {
  var url = "demo/index.html?val=" + src.id;    //팝업창 페이지 URL
  var winWidth = 900;
  var winHeight = 600;
  var popupOption = "width=" + winWidth + ", height=" + winHeight;    //팝업창 옵션(optoin)
  window.open(url, "", popupOption);

}



function toggle_onclick(val) {
  var bulldog_div = document.getElementById("bulldog_div");
  var yorkshire_div = document.getElementById("yorkshire_div");
  var labrador_div = document.getElementById("labrador_div");

  var yy_toggle = document.getElementById("yy_toggle");
  var bull_toggle = document.getElementById("bull_toggle");
  var lab_toggle = document.getElementById("lab_toggle");

  var yy_label = document.getElementById("yy_label");
  var bull_label = document.getElementById("bull_label");
  var lab_label = document.getElementById("lab_label");

  if(val.includes("bull_toggle")){
    setCookie("where","bull",1);
  
  }else if(val === "lab_toggle"){
    setCookie("where","lab",1);
  }else if(val === "yy_toggle"){
    setCookie("where","yy",1);
  }
  

  if (getCookie("where").includes("bull")) {
    file_cnt("bull");
    bulldog_div.style.display = null;
    yorkshire_div.style.display = "none";
    labrador_div.style.display = "none";
    yy_label.setAttribute("class", "btn btn-secondary");
    lab_label.setAttribute("class", "btn btn-secondary");
    bull_label.setAttribute("class", "btn btn-secondary active");
  } else if (getCookie("where").includes("yy")) {
    file_cnt("yy");
    yorkshire_div.style.display = null;
    bulldog_div.style.display = "none";
    labrador_div.style.display = "none";
    lab_label.setAttribute("class", "btn btn-secondary");
    bull_label.setAttribute("class", "btn btn-secondary");
    yy_label.setAttribute("class", "btn btn-secondary active");
    //setCookie("where","",1);
  } else if (getCookie("where").includes("lab")) {
    file_cnt("lab");
    yorkshire_div.style.display = "none";
    bulldog_div.style.display = "none";
    labrador_div.style.display = null;
    yy_label.setAttribute("class", "btn btn-secondary");
    bull_label.setAttribute("class", "btn btn-secondary");
    lab_label.setAttribute("class", "btn btn-secondary active");
    //setCookie("where","",1);
  }


}

function reload_alert() {
  if (confirm("이전 데이터 셋이 모두 사라집니다. 정말 리셋하시겠습니까?") == true) {    //확인

    reload();

  } else {   //취소

    return false;

  }

}
function reload() {
  //php
  $.ajax({
    type: 'GET',
    url: "php/reset.php",
    dataType: "text",

    success: function (data) {
      console.log("RESET");
      console.log(data);

    },
    error: function (data) {
      console.log(data);

    }
  });
  window.location.reload();
}




function remove_item(source) {

  var parent = document.getElementById("heatmap_img");
  var parent_real = document.getElementById("heatmap");
  var img_url = parent.getAttribute('src');
  var split = img_url.split("/");
  var img_id = split[3] + "/" + split[4];
  console.log("[remove]" + img_id);
  var target = document.getElementById("test/ml/input20/" + img_id).innerHTML = '';
  var dele = "test/ml/input20/" + img_id;
  var newimg = document.createElement("img");
  newimg.src = 'back/image/deleted.png';//변수
  newimg.setAttribute("id", "heatmap_img");//고유값
  newimg.setAttribute("onerror", "this.onerror=null; this.src='back/image/deleted.png'");//고유값
  parent_real.replaceChild(newimg, parent);
  var last = JSON.stringify({
    'id': dele
  });
  console.log(last);
  $.ajax({
    type: 'POST',
    url: "php/cat_die.php",
    dataType: "text",
    data: last,
    success: function (data) {

      console.log(data);

      file_cnt("yy");
      file_cnt("bull");
      file_cnt("lab");
      delete_insert("0", getCookie('id'), img_id);

    },
    error: function (data) {
      console.log(data);

    }
  });

}


function file_cnt(type) {
  var div;
  if (type.includes("yy")) {
    div = "yy_cnt";
  } else if (type.includes("bull")) {
    div = "bull_cnt";
  } else {
    div = "lab_cnt";
  }
  console.log("div" + div);

  $.ajax({
    type: 'POST',
    url: "php/file_cnt.php",
    dataType: "text",
    data: {
      type: type,

    },
    success: function (data) {
      console.log("file_cnt" + data);
      var parent = document.getElementById(div);
      var p = document.createElement("p");
      parent.innerHTML = "";
      var text = document.createTextNode(data);
      p.appendChild(text);
      parent.appendChild(p);
    },
    error: function (data) {
      console.log(data);

    }
  });
}


function user_review_insert(review) {
  var id = getCookie("id");
  var train_cycle = getCookie("train_cycle");
  $.ajax({
    type: 'POST',
    url: "php/user_review_insert.php",
    dataType: "text",
    data: {
      id: id,
      review: review,
      train_cycle: train_cycle
    },
    success: function (data) {
      console.log("ok");
      console.log(data);
      window.location.href = "loading.html";

    },
    error: function (data) {
      console.log("no");
      console.log(data);

    }
    
  });
 

}

function file_cnt_insert(id) {

  var id = getCookie("id");
  $.ajax({
    type: 'POST',
    url: "php/file_cnt_insert.php",
    dataType: "text",
    data: {
      id: id,

    },
    success: function (data) {
      console.log("ok");
      console.log(data);
    },
    error: function (data) {
      console.log("no");
      console.log(data);

    }
  });
}






function click_insert(id) {
  var test_cycle = getCookie("test_cycle");
  var train_cycle = getCookie("train_cycle");


  $.ajax({
    type: 'POST',
    url: "php/click_insert.php",
    dataType: "text",
    data: {
      id: id,
      train_cycle: train_cycle,
      test_cycle: test_cycle

    },
    success: function (data) {
      console.log("ok");
      console.log(data);
    },
    error: function (data) {
      console.log("no");
      console.log(data);

    }
  });
}
function delete_insert(count, id, img_id) {
  var test_cycle = getCookie("test_cycle");
  var train_cycle = getCookie("train_cycle");

  $.ajax({
    type: 'POST',
    url: "php/delete_insert.php",
    dataType: "json",
    data: {
      id: id,
      count: count,
      img_id: img_id,
      train_cycle: train_cycle,
      test_cycle: test_cycle
    },
    success: function (data) {
      console.log("delete_insert");
    },
    error: function (data) {
      console.log(data);

    }
  });
}



///////////////////////etc

function change_to_hanguel(input) {
  if (input.includes("yy")) {
    return "[Yorkshire] ";
  } else if (input.includes("bull")) {
    return "[Bulldog] ";
  } else {
    return "[Labrador] ";
  }

}


var setCookie = function (name, value, day) {
  var date = new Date();
  date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
  document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};


var getCookie = function (name) {
  var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value ? value[2] : null;
};

var deleteCookie = function (name) {
  var date = new Date();
  document.cookie = name + "= " + "; expires=" + date.toUTCString() + "; path=/";
}