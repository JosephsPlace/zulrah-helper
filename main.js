new Vue({
    el: '#zulrah-helper',
    data: {
        displaySettings: false,
        rotation: 0,
        theme: "dark",
        style: "simple",
        degrees: 0,
    },
    methods: {
        selectRotation: function(rotation) {
            console.log(rotation);
            this.rotation = rotation;
        },
        toggleTheme: function () {
            console.log(this.theme);
            if (this.theme == "light") {
                this.theme = "dark";
            } else {
                this.theme = "light";
            }
        },
        toggleStyle: function () {
            console.log(this.theme);
            if (this.style == "simple") {
                this.style = "realistic";
            } else {
                this.style = "simple";
            }
        },
        toggleSettings: function () {
            if (this.displaySettings == true) {
                this.displaySettings = false;
            } else {
                this.displaySettings = true;
            }
        },
        rotateImages: function (direction) {
            if (direction == 'left') {
                this.degrees -= 90;
            } else {
                this.degrees += 90;
            }

            var images_to_rotate = document.querySelectorAll('.phase-image');

            for (var i = 0; i < images_to_rotate.length; i++) {
                console.log(images_to_rotate[i]);
                images_to_rotate[i].style = "transform: rotate(" + this.degrees + "deg)";
            }
        }
    }
});