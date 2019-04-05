
//设置 cookie 值的函数
function setCookie(cname,cvalue,exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}


//切换登录
var tab = document.getElementById('tab');
var Head = document.getElementById('loginHead');//注册界面头部
var loginPut = document.getElementById('loginPut');
tab.onclick = function(){
    if(tab.innerText == "登录"){ //登录界面
        tab.innerText = "注册";
        Head.innerHTML = "<div id='logHimg'><img src='img/timg.jpeg' width='50px'></div><h1>登录以查看更多</h1><p>使用免费帐户获取Pinterest的最佳点子</p>";
        loginPut.innerHTML = "<form><br/><input type='text' id='mail' class='form_input' name='user'><br/><br/><input type='password' id='password' class='form_input' name='password'><br/><br/><input type='button' id='registerBtn' name='push' value='登 录'></form><div id='loginBtn'></div><div id='errMail'>你漏填了一处！别忘了写上电子邮件地址。</div><div id='errMail1'>邮箱格式错误哦！请重新输入</div><div id='errPsw'>密码太短了！需要 6 个以上的字符。</div><div id='otherWay'><p>或<p><div id='facebook'><img src='img/facebook.png' >使用 Facebook 继续</div><div id='google'><img src='img/google.png'>用 Google 继续</div></div><div id='tips'>若继续，则表示你同意 Pinterest 的 <a>服务条款</a>和<a>隐私政策</a> <br/><br/><a>已经加入了我们？ 登录</a>  </div>"
    }else{ //注册界面
        tab.innerText = "登录";
        Head.innerHTML = "<div id='logHimg'><img src='img/timg.jpeg' width='50px'></div><h1>注册以查看更多</h1><p>使用免费帐户获取Pinterest的最佳点子</p>";
        loginPut.innerHTML = "<form><br/><input type='text' id='mail' class='form_input' name='user'><br/><br/><input type='password' id='password' class='form_input' name='password'><br/><br/><input type='button' id='registerBtn' name='push' value='登 录'></form><div id='loginBtn'></div><div id='errMail'>你漏填了一处！别忘了写上电子邮件地址。</div><div id='errMail1'>邮箱格式错误哦！请重新输入</div><div id='errPsw'>密码错误！请重新输入。</div><div id='otherWay'><p>或<p><div id='facebook'><img src='img/facebook.png' >使用 Facebook 登录</div><div id='google'><img src='img/google.png'>用 Google 继续</div></div><div id='tips'>若继续，则表示你同意 Pinterest 的 <a>服务条款</a>和<a>隐私政策</a> <br/><br/><a>已经加入了我们？ 登录</a>  </div>"

    }

        var oRegisterBtn = document.getElementById('registerBtn');
        var oMail = document.getElementById('mail');
        var oPassword = document.getElementById('password');
        var errMail = document.getElementById('errMail');
        var errMail1 = document.getElementById('errMail1');
        var errPsw = document.getElementById('errPsw');
        var formInput = document.getElementsByClassName('form_input');

        // oRegisterBtn.onclick=function(){
        //     alert("123");
        //     console.log(oRegisterBtn.value);
        // }
        oRegisterBtn.onclick = function(){
            // alert("123");


            if(oMail.value && oPassword.value){
                var mailReg = /^[a-z0-9A-Z_]+\@[a-z0-9A-Z]{1,10}\.[a-zA-Z]{2,8}(\.[a-zA-Z]{2,8})?$/
                if(!mailReg.test(oMail.value)){
                    errMail1.style.display = "block";
                    formInput[0].style.border = "3px solid orange";
                }
                var pswReg = /^[a-z0-9A-Z]{6,18}/
                if(!pswReg.test(oPassword.value)){
                    errPsw.style.display = "block";
                    formInput[1].style.border = "3px solid orange";
                }
                if(mailReg.test(oMail.value) && pswReg.test(oPassword.value)){
                    // alert("perfect");
                    allLogin.style.display = "none";
                    //设置cookie
                    username = oMail.value;
                    password = oPassword.value; 
                    if (username!="" && username!=null && password!="" && password!=null )
                    {
                    setCookie("username",username,365);
                    setCookie("password",password,365);
                    } 
                    console.log(username);
                    console.log(password);
                }
            }else if(!oMail.value && !oPassword.value){
                errPsw.style.display = "block";
                errMail.style.display = "block";
                formInput[0].style.border = "3px solid orange";
                formInput[1].style.border = "3px solid orange";
            }else if(!oMail.value){
                errMail.style.display = "block";
                formInput[0].style.border = "3px solid orange";
            }else if(!oPassword.value){
                errPsw.style.display = "block";
                formInput[1].style.border = "3px solid orange";
                
            }

            
        }

        oRegisterBtn.onblur = function(){  //失焦事件
            errMail.style.display = "none";
            errPsw.style.display = "none";
            errMail1.style.display = "none";
            formInput[0].style.border = "1px solid rgb(232, 232, 232)";
            formInput[1].style.border = "1px solid rgb(232, 232, 232)";
        }

}

var oRegisterBtn = document.getElementById('registerBtn');
var oMail = document.getElementById('mail');
var oPassword = document.getElementById('password');
var errMail = document.getElementById('errMail');
var errMail1 = document.getElementById('errMail1');
var errPsw = document.getElementById('errPsw');
var formInput = document.getElementsByClassName('form_input');
var Enter = document.getElementById('enter');//有cookie时的登录页面
var login = document.getElementById('login');
var allLogin = document.getElementById('sumBack'); 





//获取 cookie 值的函数
function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
	}
	return "";
}

//检测 cookie 值的函数
function checkCookie()
{
  //alert('nihao');
  var username=getCookie("username");
  if (username!="" && username)//发现有cookie，跳转到登录界面
  { Enter.style.display = "block";
    login.style.display = "none";
    var enterPsw = document.getElementById('enterInputpsw');
    var yuanMail = document.getElementById('yuanMail');//获取显示账户邮箱
    yuanMail.innerText = username;
    var yuan = document.getElementById('yuan');
    yuan.innerText = username;
    var err1 = document.getElementById('errEnterPsw');
    var err2 = document.getElementById('errEnterPsw1');
    var enterbtn = document.getElementById('enterBtn');
    var pswReg = /^[a-z0-9A-Z]{6,18}/;//正则
    enterbtn.onclick = function(){
        if(!pswReg.test(enterPsw.value)){
            err1.style.display = "block";
            enterPsw.style.border = "3px solid orange";
        }else if(!enterPsw.value || enterPsw.value==" "){
            err2.style.display = "block";
            enterPsw.style.border = "3px solid orange";
        }else if(pswReg.test(enterPsw.value)){
            allLogin.style.display = "none"; 
        }
    }
    enterbtn.onblur = function(){  //失焦事件
        err1.style.display = "none";
        err2.style.display = "none";
        enterPsw.style.border = "1px solid rgb(232, 232, 232)";
    }
    var changelogin = document.getElementById('changes2');
    changelogin.onclick = function(){
        Enter.style.display = "none";
        login.style.display = "block";
    }

  }
  else //没cookie，从注册界面获取cookie
  { 
    Enter.style.display = "none";
    login.style.display = "block";
       
    oRegisterBtn.onclick = function(){  //点击验证
        // alert("123");
    
        //验证存在
        if(oMail.value && oPassword.value){
            var mailReg = /^[a-z0-9A-Z_]+\@[a-z0-9A-Z]{1,10}\.[a-zA-Z]{2,8}(\.[a-zA-Z]{2,8})?$/
            if(!mailReg.test(oMail.value)){
                errMail1.style.display = "block";
                formInput[0].style.border = "3px solid orange";
            }
            var pswReg = /^[a-z0-9A-Z]{6,18}/
            if(!pswReg.test(oPassword.value)){
                errPsw.style.display = "block";
                formInput[1].style.border = "3px solid orange";
            }
            if(mailReg.test(oMail.value) && pswReg.test(oPassword.value)){ //全部验证通过！
                //登陆成功，清除登录页
                allLogin.style.display = "none";
                //设置cookie
                username = oMail.value;
                password = oPassword.value; 
                if (username!="" && username!=null && password!="" && password!=null )
                {
                setCookie("username",username,365);
                setCookie("password",password,365);

                } 
                console.log(username);
                console.log(password);
            }
        }else if(!oMail.value && !oPassword.value){
            errPsw.style.display = "block";
            errMail.style.display = "block";
            formInput[0].style.border = "3px solid orange";
            formInput[1].style.border = "3px solid orange";
        }else if(!oMail.value){
            errMail.style.display = "block";
            formInput[0].style.border = "3px solid orange";
        }else if(!oPassword.value){
            errPsw.style.display = "block";
            formInput[1].style.border = "3px solid orange";
            
        }
    
        
    }
    
    oRegisterBtn.onblur = function(){  //失焦事件
        errMail.style.display = "none";
        errPsw.style.display = "none";
        errMail1.style.display = "none";
        formInput[0].style.border = "1px solid rgb(232, 232, 232)";
        formInput[1].style.border = "1px solid rgb(232, 232, 232)";
    }
  }
}


//让瀑布流的页面高度为整个页面的高度
// function waterHeight(){
//     var windowH = window.innerHeight;
//     var masonry = document.getElementById('masonry');

//     masonry.style.height = windowH+'px';
//     //alert(masonry.offsetHeight);
// }

// function boxheight(){ //函数：获取尺寸
//     //获取浏览器窗口高度
//     var winHeight=0;
//     if (window.innerHeight)
//         winHeight = window.innerHeight;
//     else if ((document.body) && (document.body.clientHeight))
//         winHeight = document.body.clientHeight;
//     //通过Document对body进行检测，获取浏览器可视化高度
//     if (document.documentElement && document.documentElement.clientHeight)
//         winHeight = document.documentElement.clientHeight;
//     //DIV高度为浏览器窗口高度
//     document.getElementById("masonry").style.height= winHeight +"px";
 
// }
//     window.onresize=boxheight; //窗口或框架被调整大小时执行

window.onload = checkCookie();
// window.onload = boxheight();
