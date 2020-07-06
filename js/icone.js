
        function setIcon() {
            var img = document.getElementById("image");
            img.src = this.value;
            return false;
        }
        document.getElementById("Lista_Heroi").onchange = setIcon;
    