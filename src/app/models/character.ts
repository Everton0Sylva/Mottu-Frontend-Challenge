import { BaseModel } from "./basemodel"

export class Character extends BaseModel {
    Created: string;
    Episode: Array<string>;
    Gender: string;
    Id: number;
    Image: string;
    Location: BaseModel;
    Origin: BaseModel;
    Species: string;
    Status: string;
    Type: string;

    constructor(data: any = null) {
        if (data) {
            super(data);
            this.Created = data.created ? data.created : data.Created ? data.Created : null;
            this.Episode = data.episode ? data.episode : data.Episode ? data.Episode : null;
            this.Gender = data.gender ? data.gender : data.Gender ? data.Gender : null;
            this.Image = data.image ? data.image : data.Image ? data.Image : null;
            this.Id = data.id ? data.id : data.Id ? data.Id : null;
            this.Location = data.location ? data.location : data.Location ? data.Location : null;
            this.Species = data.species ? data.species : data.Species ? data.Species : null;
            this.Type = data.type ? data.type : data.Type ? data.Type : null;
            this.Url = data.url ? data.url : data.Url ? data.Url : null;
            this.Origin = new BaseModel(data.origin);
            this.Location = new BaseModel(data.location);
        }
    }
}
