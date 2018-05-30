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
            this.rotation = rotation;
        },
        toggleTheme: function () {
            if (this.theme == "light") {
                this.theme = "dark";
            } else {
                this.theme = "light";
            }
        },
        toggleStyle: function () {
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
        }
    }
});