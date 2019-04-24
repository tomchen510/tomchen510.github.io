var window_height = $(window).height()
console.log($(window).height())

var IMG_HEIGHT = window_height;
var currentImg = 0;
var maxImages = 19;
var speed = 500;

var imgs;

var swipeOptions = {
    triggerOnTouchEnd: true,
    swipeStatus: swipeStatus,
    allowPageScroll: "none",
    threshold: window_height / 4
};
console.log(swipeOptions)

$(function () {
    imgs = $("#imgs");
    imgs.swipe(swipeOptions);
});


$(window).resize(function () {
    IMG_HEIGHT = $(window).height();
    console.log(IMG_HEIGHT);
    scrollImages(IMG_HEIGHT * currentImg, speed);
});

/**
 * Catch each phase of the swipe.
 * move : we drag the div
 * cancel : we animate back to where we were
 * end : we animate to the next image
 */
function swipeStatus(event, phase, direction, distance) {
    //If we are moving before swipe, and we are going L or R in X mode, or U or D in Y mode then drag.
    if (phase == "move" && (direction == "up" || direction == "down")) {
        var duration = 0;

        if (direction == "up") {
            scrollImages((IMG_HEIGHT * currentImg) + distance, duration);
        } else if (direction == "down") {
            scrollImages((IMG_HEIGHT * currentImg) - distance, duration);
        }

    } else if (phase == "cancel") {
        scrollImages(IMG_HEIGHT * currentImg, speed);
    } else if (phase == "end") {
        if (direction == "down") {
            previousImage();
        } else if (direction == "up") {
            nextImage();
        }
    }
}

function judge_btn(currentImg) {
    var my_btn
    if (currentImg >= 16) {
        my_btn = 6;
    } else if (currentImg >= 14) {
        my_btn = 5;
    } else if (currentImg >= 10) {
        my_btn = 4;
    } else if (currentImg >= 5) {
        my_btn = 3;
    } else if (currentImg >= 3) {
        my_btn = 2;
    } else if (currentImg >= 0) {
        my_btn = 1;
    }
    return my_btn
}

function judge_page(currentImg) {
    reset();
    console.log("btn: " + judge_btn(currentImg))
    console.log("page: " + currentImg)
    $("#btn" + judge_btn(currentImg)).removeClass("rotate_text").addClass("btn_active")
    $("#span_" + currentImg).addClass("active");
    $("#btn" + judge_btn(currentImg)).attr("disabled", true);
    $("#btn" + judge_btn(currentImg) + " .span-show").removeClass("span-none");
}

function previousImage() {
    currentImg = Math.max(currentImg - 1, 0);
    judge_page(currentImg)
    scrollImages(IMG_HEIGHT * currentImg, speed);
    $("span").removeClass("active");
    $("#span_" + currentImg).addClass("active");
}

function nextImage() {
    currentImg = Math.min(currentImg + 1, maxImages - 1);
    judge_page(currentImg)
    scrollImages(IMG_HEIGHT * currentImg, speed);
    $("span").removeClass("active");
    $("#span_" + currentImg).addClass("active");
}

/**
 * Manually update the position of the imgs on drag
 */
function scrollImages(distance, duration) {
    imgs.css("transition-duration", (duration / 1000).toFixed(1) + "s");
    //inverse the number we set in the css
    var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
    // console.log(value)
    imgs.css("transform", "translate(0," + value + "px)");
}


var btn1 = {
    page: 0,
    selector: "#btn1",
    number: 3
};

var btn2 = {
    page: 3,
    selector: "#btn2",
    number: 2
};

var btn3 = {
    page: 5,
    selector: "#btn3",
    number: 5
};

var btn4 = {
    page: 10,
    selector: "#btn4",
    number: 4
};

var btn5 = {
    page: 14,
    selector: "#btn5",
    number: 2
};

var btn6 = {
    page: 16,
    selector: "#btn6",
    number: 3
};

function reset() {
    $("button").removeClass("btn_active").addClass("rotate_text")
    $(".box2 button").attr("disabled", false);
    $("span").removeClass("active");
    $(".box2 .span-show").addClass("span-none");
}

$(function () {
    $("#btn1").click(function () {
        reset();
        currentImg = Math.max(btn1.page, 0);
        $(btn1.selector).removeClass("rotate_text").addClass("btn_active")
        scrollImages(IMG_HEIGHT * currentImg, speed * 3);
        $("#btn1").attr("disabled", true);
        $("#btn1 .span-show").removeClass("span-none");
        $("#span_" + currentImg).addClass("active");
    });

    $("#btn2").click(function () {
        reset();
        currentImg = Math.max(btn2.page, 0);
        $(btn2.selector).removeClass("rotate_text").addClass("btn_active");
        scrollImages(IMG_HEIGHT * currentImg, speed * 3);
        $("#btn2").attr("disabled", true);
        $("#btn2 .span-show").removeClass("span-none");
        $("#span_" + currentImg).addClass("active");
    });

    $("#btn3").click(function () {
        reset();
        currentImg = Math.max(btn3.page, 0);
        $(btn3.selector).removeClass("rotate_text").addClass("btn_active");
        scrollImages(IMG_HEIGHT * currentImg, speed * 3);
        $("#btn3").attr("disabled", true);
        $("#btn3 .span-show").removeClass("span-none");
        $("#span_" + currentImg).addClass("active");
    });

    $("#btn4").click(function () {
        reset();
        currentImg = Math.max(btn4.page, 0);
        $(btn4.selector).removeClass("rotate_text").addClass("btn_active");
        scrollImages(IMG_HEIGHT * currentImg, speed * 3);
        $("#btn4").attr("disabled", true);
        $("#btn4 .span-show").removeClass("span-none");
        $("#span_" + currentImg).addClass("active");
    });

    $("#btn5").click(function () {
        reset();
        currentImg = Math.max(btn5.page, 0);
        $(btn5.selector).removeClass("rotate_text").addClass("btn_active")
        scrollImages(IMG_HEIGHT * currentImg, speed * 3);
        $("#span_" + currentImg).addClass("active");
        $("#btn5").attr("disabled", true);
        $("#btn5 .span-show").removeClass("span-none");
    });

    $("#btn6").click(function () {
        reset();
        currentImg = Math.max(btn6.page, 0);
        $(btn6.selector).removeClass("rotate_text").addClass("btn_active")
        $("#span_" + currentImg).addClass("active");
        $("#btn6").attr("disabled", true);
        $("#btn6 .span-show").removeClass("span-none");
        scrollImages(IMG_HEIGHT * currentImg, speed * 3);
    });
});

$(function () {
    $("span").click(function () {
        var my_var = this.getAttribute("index");
        currentImg = Math.max(my_var, 0);
        $("span").removeClass("active");
        $("#" + this.id).addClass("active");
        scrollImages(IMG_HEIGHT * currentImg, speed * 3);
        // console.log(my_var, currentImg)
    });
});