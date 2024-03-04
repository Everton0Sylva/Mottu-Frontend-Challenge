export class BaseModel {
    Name: string
    Url: string;

    constructor(data: any = null) {
        if (data) {
            this.Name = data.name ? data.name : data.Name ? data.Name : null;
            this.Url = data.url ? data.url : data.Url ? data.Url : null;
        }
    }
}
