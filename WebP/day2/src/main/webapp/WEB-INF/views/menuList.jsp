<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gudo</title>
    <link rel="stylesheet" href="style.css" type="text/css">
    <link rel="stylesheet" href="menu.css" type="text/css">
</head>
<body>
    <header class="header" style="background-image: url(/img/rice.jpg);">
        <div class="header__wrap">
            <img class="header__logo" src="/img/brand-ico.png">
            <!-- navbar 메뉴 -->
            <nav class="header__nav">
                <a onclick="location.href='index.HTML'" class="header__nav--item">HOME</a>
                <a style="color:white" onclick="location.href='about.HTML'" class="header__nav--item">ABOUT</a>
                <a style="color:#f39c12" onclick="location.href='menu.HTML'" class="header__nav--item">MENU</a>
                <a onclick="location.href='contact.HTML'" class="header__nav--item">CONTACT</a>
            </nav>
        </div>
        <div style="height: 300px">
        </div>
        <div class="header__wrap">
            <div class="header__bottom">
                <h2 class="header__bottom--day">🍟 Gudo's Menu List ! </h2>
                <h2 class="header__bottom--time">MENU</h2>
            </div>
        </div>
    </header>
    <!-- 메뉴 메인 섹션 -->
    <div class="menu-container">
        <div class="menu-background">
            <!-- 와플 -->
            <div class="menu-flexbox">
                <img class="menu-img circle-thumb" src="/img/img-about/waffle-blackPlate.png" alt="menu-waffle">
                <div class="menu-info" style="text-align: left;">
                    <h2>JIHEE BREAKFAST'S WAFFLE</h2>
                    <p>Texas has a history of producing greatness like Willie Nelson AND Beyonce’, Texas Rangers (Walker, that is), a great state fair and Waffle House waffles.  C.H. Guenther & Son Inc. (CHG) started operating its first flour mill in the hill country of southern Texas back in 1851.  As a guild-certified master millwright[…]</p>
                    <a onclick="location.href='./sub-menu/waffle.html'"class="menu-btn">
                        <img class="plus-btn" src="/img/img-about/plusbtn.png"/>
                        <span >read more</span>
                    </a>
                </div>
            </div>
            <hr/>
            <!-- 주스 -->
            <div class="menu-flexbox">
                <img class="menu-img circle-thumb" src="/img/img-about/juice-menu.png" alt="menu-juice">
                <div class="menu-info" style="text-align: left;">
                    <h2>MINUTE MAID®</h2>
                    <p>Minute Maid® believes what’s true for juice is true for families: “when you put good in, you get good out”.  With our grove-to-glass capability, we take part in each step of the juice making process, ensuring efficient production practices while minimizing our environmental footprint and benefitting communities.  That means we partner with the best growers […]</p>
                    <a class="menu-btn" onclick="location.href='./sub-menu/minutemaid.html'">
                        <img class="plus-btn" src="/img/img-about/plusbtn.png"/>
                        <span >read more</span>
                    </a>
                </div>
            </div>
            <hr/>
            <!-- 메뉴 목록 -->
            <c:forEach items = "${menus}" var = "menu">
            <div class="menu-flexbox">
                <img class="menu-img circle-thumb" src="/img/${menu.fileName}" alt="${menu.mno } pic">
                <div class="menu-info" style="text-align: left;">
                    <h2><c:out value = "${menu.mname}"/></h2>
                    <h3>$ <c:out value = "${menu.price}"/></h3>
                    <p>${menu.description}</p>
                    <a href="#" class="menu-btn"onclick="location.href='/sub-menu/pancake.html'">
                        <img class="plus-btn" src="/img/img-about/plusbtn.png"/>
                        <span >read more</span>
                    </a>
                </div>
            </div>
            </c:forEach>
            <!-- 더보기 -->
            <details>
                <summary style="font-weight: 700;">더보기</summary>
                <!-- 아이스크림 -->
                <div class="menu-flexbox">
                    <img class="menu-img circle-thumb" src="/img/icecream.png" alt="menu-icecream">
                    <div class="menu-info" style="text-align: left;">
                        <h2>ICECREAM</h2>
                        <p>Smithfield is a great American success story. It began with the Luter family of Smithfield, Virginia.  Joseph W. Luter, Sr. and his son, Joseph Jr., worked in various pork industry jobs before teaming up to start their own business in 1936.  Under the leadership of the Luter family, Smithfield experienced significant growth […]</p>
                        <a href="#" class="menu-btn" onclick="location.href='./sub-menu/icecream.html'">
                            <img class="plus-btn" src="/img/img-about/plusbtn.png"/>
                            <span >read more</span>
                        </a>
                    </div>
                </div>
                <hr/>
                <!-- 와인 -->
                <div class="menu-flexbox">
                    <img class="menu-img circle-thumb" src="/img/wine.png" alt="menu-wine">
                    <div class="menu-info" style="text-align: left;">
                        <h2>WINE</h2>
                        <p>At our vineyard, we believe that the best wines are born from the perfect blend of sun, soil, and care. That's why every bottle we produce is a testament to our unwavering commitment to quality. Whether you're an early bird or a night owl, Jihee Breakfast wine is the perfect way to greet the day.[…]</p>
                        <a href="#" class="menu-btn" onclick="location.href='./sub-menu/wine.html'">
                            <img class="plus-btn" src="/img/img-about/plusbtn.png"/>
                            <span >read more</span>
                        </a>
                    </div>
                </div>
                <hr/>
                <!-- 치즈 -->
                <div class="menu-flexbox">
                    <img class="menu-img circle-thumb" src="/img/cheese.png" alt="menu-cheese">
                    <div class="menu-info" style="text-align: left;">
                        <h2>CHEESE</h2>
                        <p>Our cheese is a product of time-honored tradition and artisanal craft, each wheel a testament to the skills and passion of our cheesemakers.From the creamy texture of our brie to the bold flavors of our cheddar, our cheese is a celebration of the unique and delicious characteristics that make each variety so special.[…]</p>
                        <a href="#" class="menu-btn" onclick="location.href='./sub-menu/cheese.html'">
                            <img class="plus-btn" src="/img/img-about/plusbtn.png"/>
                            <span >read more</span>
                        </a>
                    </div>
                </div>
            </details>
        </div>
    </div>
    <!-- 기본 footer -->
    <footer class="footer">
        <div class="footer-wrap">
            <!-- SNS 링크 아이콘 -->
            <div class="footer-SNS">
                <a href="https://twitter.com/?lang=ko">
                    <img src="/img/twitter-ico.png" alt="twitter" />
                </a>
                <a href="https://www.youtube.com/">
                    <img src="/img/yt-ico.png" alt="youtube" />
                </a>
                <a href="https://www.instagram.com/">
                    <img src="/img/insta-ico.png" alt="instagram" />
                </a>
                <a href="https://kr.linkedin.com/">
                    <img src="/img/linkedin-ico.png" alt="linkedin" />
                </a>
            </div>
            <div class="footer-contact">
                <h2 class="footer-contact__title">CONTACT US</h2>
                <p class="footer-contact__content">225 Liberty St, 4th Fl.</p>
                <p class="footer-contact__content">New York, NY 10281</p>
                <p class="footer-contact__content">010-8608-8219</p>
                <p class="footer-contact__content">JIHEE HAN</p>
            </div>
            <!-- GET IN TOUCH -->
            <div class="footer-form">
                <h2 class="footer-form__title">GET IN TOUCH</h2>
                <form class="footer-form__wrap">
                <div class="form__wrap--row">
                    <textarea
                    rows="1"
                    cols="30"
                    class="row--name"
                    name="name"
                    placeholder="NAME"
                    ></textarea
                    ><br />
                </div>
                <div class="form__wrap--row">
                    <textarea
                    rows="1"
                    cols="30"
                    class="row--email"
                    name="email"
                    placeholder="EMAIL"
                    ></textarea
                    ><br />
                </div>
                <div class="form__wrap--row">
                    <textarea
                    class="row--message"
                    name="message"
                    rows="7"
                    cols="30"
                    placeholder="MESSAGE"
                    ></textarea
                    ><br />
                </div>
                <button onclick="location.href='contact.html'">send</button>
                </form>
            </div>
        </div>
        <!-- 이용약관 -->
        <div class="footer-bottom">
            <div class="footer-bottom__terms" style="color: white">
                <a onclick="location.href='../policymenu/terms.html'">Terms</a>
                <span>|</span>
                <a onclick="location.href='../policymenu/privacy.html'">Privacy</a>
                <span>|</span>
                <a onclick="location.href='../policymenu/conduct.html'">Code of Conduct</a>
                <span>|</span>
                <a onclick="location.href='../policymenu/access.html'">Accessibility Policy</a>
            </div>
            <div class="footer-bottom__copyright">
                <span>Copyright ©2023 JIHEE BREAKFAST®. All rights reserved.</span>
            </div>
        </div>
    </footer>
</body>
</html>