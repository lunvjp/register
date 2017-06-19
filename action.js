function setCookie() {
    var firstName = $("#firstname").val();
    var lastName = $("#lastname").val();
    var email = $("#email").val();
    var pass = $("#password").val();
    var confirm = $("#confirm").val();
    var phone=$("#phone").val();
    
    if (firstName === "") {
        alert("Bạn chưa nhập họ");
    } else if (lastName === "") {
        alert("Bạn chưa nhập tên");
    } else if (email === "") {
        alert("Bạn chưa nhập email");
    } else if (pass === "") {
        alert("Bạn chưa nhập mật khẩu");
    } else if (confirm === "") {
        alert("Bạn chưa xác nhận mật khẩu");
    } else if (pass !== confirm) {
        alert("Xác nhận mật khẩu không đúng");
    } else {
        document.cookie = "firstName: " + escape(firstName) + ",lastName: " + escape(lastName) + ",email: " + email + ",pass: " + pass+",phone: "+phone;
        alert("Sign in succesfully");
    }
}

function getCookie() {
    if (document.cookie.length > 0) {
        var cookies = document.cookie;
        var arrayCookie=cookies.split(",");
        var item,name,content;
        for (var i=0;i<arrayCookie.length;i++) {
            item=arrayCookie[i].split(": ");
            name=item[0];
            content=unescape(item[1]);
            alert(name+": "+content);
        }
        
        alert(cookies);
    } else {
        alert("Cookie chưa được tạo");
    }
}

function displayLogin() {
    $(".login-scene").css("display","block");
}

function closeLogin() {
    $(".login-scene").css("display","none");
}