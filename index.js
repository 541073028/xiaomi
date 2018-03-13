//每一个花括号，都是一个单独的作用域
//banner 效果
/*
{
    let imgs = document.querySelectorAll(".imgBox li");
    let pagers = document.querySelectorAll(".pagerBox li");
    let banner = document.querySelector("#banner");
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");
    // console.log(next,prev);
    // console.log(imgs[0])
    pagers.forEach(function (ele, index) {
        // console.log(ele);
        ele.onclick = function () {
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n = index;
        }
    });

    let t = window.setInterval(move, 2000);
    let n = 0;

    function move() {
        n++;
        // n=n%5;    // 方式一
        if (n === imgs.length) {
            n = 0;
        }            //方式二，循环播放
        if (n < 0) {
            n = imgs.length - 1;
        }
        console.log(n);
        for (let i = 0; i < pagers.length; i++) {
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
        // console.log(1);
    }

    banner.onmouseenter = function () {
        clearInterval(t);
    };
    banner.onmouseleave = function () {
        t = setInterval(move, 3000);
    };
    let flag = true;
    next.onclick = function () {
        if (flag) {
            flag = false;
            move();
        }
    };
    prev.onclick = function () {
        if (flag) {
            flag = false;
            n -= 2;     //n=n-2;
            move();
        }
    };
    imgs.forEach(function (ele) {
        ele.addEventListener("transitionend", function () {
            flag = true;
        });
        console.log(this);
    })



}
*/
{
    // alert("老师，您好");
    // alert("仅“内容部分”改动，同时仍存在很多问题【2018.3.10】")
}

{
    let navlis=document.querySelectorAll(".banner_navli");
    let choutis=document.querySelectorAll(".banner_chouti");
    let obj=choutis[0];
    // console.log(navlis);
    navlis.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            obj.style.display="none";
            choutis[index].style.display="block";
            obj=choutis[index];
        };
        ele.onmouseleave=function () {
            choutis[index].style.display="none";
        }
    });
}

//小米单品效果开始
{
    function danpin(parent) {
    const prev = parent.querySelector(".buy-prev");
    const next = parent.querySelector(".buy-next");
    // console.log(prev,next);
    const inner = parent.querySelector(".buy-inner");
    let n = 0;
    next.onclick = function () {
        n++;
        prev.classList.remove("disable");
        if (n === 2) {
            this.classList.add("disable");
        }
        if (n === 3) {
            n = 2;
            return;
        }
        inner.style.marginLeft = -1240 * n + "px";
    };
    prev.onclick = function () {
        n--;
        next.classList.remove("disable");
        if (n === 0) {
            prev.classList.add("disable");
        }
        if (n === -1) {
            n = 0;
            return;
        }
        inner.style.marginLeft = -1240 * n + "px";
    };
    }
    const danpinlist=document.querySelectorAll(".danpin");
    danpin(danpinlist[0]);
    danpin(danpinlist[1]);
//小米单品效果结束
}
// 家电开始
{
    function content(parent) {
        const types=parent.querySelectorAll(".type");
        const goods=parent.querySelectorAll(".jiadian_right");
        console.log(types,goods);
        types.forEach(function (ele,index) {
            ele.onmouseenter=function () {
                for(let i=0;i<types.length;i++){
                    types[i].classList.remove("active");
                    goods[i].classList.remove("act");
                }
                this.classList.add("active");
                goods[index].classList.add("act");
            }
        });
    }
    const contentlist=document.querySelectorAll(".jiadian");
    content(contentlist[0]);
    content(contentlist[1]);
    content(contentlist[2]);
    content(contentlist[3]);
}

//内容开始
{
    function neirong(parent) {
        let prev = parent.querySelector(".prev");
        let next = parent.querySelector(".next");
        let inner = parent.querySelector(".inner");
        let contents = parent.querySelectorAll(".content");
        let pagers = parent.querySelectorAll(".pager");
        let n = 0;
        next.onclick = function () {
            n++;
            if (n === contents.length) {
                n = contents.length - 1;
                return;
            }
            inner.style.left = n * -296 + "px";
            pagers[n].classList.add("active");
            pagers[n - 1].classList.remove("active");
            obj = pagers[n];
        };
        prev.onclick = function () {
            n--;
            if (n < 0) {
                n = 0;
                return;
            }
            inner.style.left = n * -296 + "px";
            pagers[n].classList.add("active");
            pagers[n + 1].classList.remove("active");
            obj = pagers[n];
        };
        let obj = pagers[0];
        pagers.forEach(function (ele, index) {
            ele.onclick = function () {
                obj.classList.remove("active");
                ele.classList.add("active");
                obj = ele;
                inner.style.left = index * -296 + "px";
                n = index;
            }
        })

    }
    let items=document.querySelectorAll(".neirong_item");
    items.forEach(function (ele) {
        neirong(ele)
    })
}
//内容结束
