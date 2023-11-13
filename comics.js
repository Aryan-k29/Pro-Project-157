AFRAME.registerComponent("comic", {
    init: function(){
        this.placesContainer = this.el
        this.createCards()
    },
    createCards: function(){
        const thumbnails = [{
            id: "Spider Man",
            title: "Spider Man",
            url: "./spiderman.jpg"
        },
        {
            id: "Super Man",
            title: "Super Man",
            url: "./superman.jpg"
        },
        {
            id: "Iron Man",
            title: "Iron Man",
            url: "./ironman.jpg"
        },
        {
            id: "Bat Man",
            title: "Bat Man",
            url: "./batman.jpg"
        }
        ]
        let previous_x = -65; 
        for (var i of thumbnails){
            const pos_x = previous_x + 25;
            const pos_y = 8;
            const pos_z = -40;
            const position = {x: pos_x, y: pos_y, z: pos_z};
            previous_x = pos_x;
            const thumbnail100 = this.createThumbnail(i, position)
            this.placesContainer.appendChild(thumbnail100)
        }
    },
    createThumbnail: function(item, pos){
        const entity_E1 = document.createElement("a-entity");
        entity_E1.setAttribute("visible", true);
        entity_E1.setAttribute("position", pos);
        entity_E1.setAttribute("geometry", {
            primitive: "plane",
            height: 28,
            width: 20});
        entity_E1.setAttribute("material", {
            src: item.url});
        return entity_E1
    }
})