export default class PlaceEntity {
    constructor(id, category, name, description, latitude, longitude, webId, textComments,privacy, imageComments, ratingComments){
        this.id = id;
        this.category = category;
        this.name = name;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
        this.webId = webId;
        this.textComments = textComments;
        this.imageComments = imageComments;
        this.ratingComments = ratingComments;
    }
}