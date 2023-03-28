export default class PlaceEntity {
    constructor(id, category, name, description, latitude, longitude, webId){
        this.id = id;
        this.category = category;
        this.name = name;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
        this.webId = webId
    }
}