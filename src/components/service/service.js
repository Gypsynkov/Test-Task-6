export default class ListService {

    _apiBase = `https://reqres.in/api/users?per_page=12`;

    async getResource(url) {
        const res = await fetch(`${this._apiBase}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }



    async getList() {
        const data = await this.getResource();
        console.log(data.data.map(this._transformList))

        return data.data.map(this._transformList)
    }


    _transformList(data) {
        return {
            id: data.id,
            firstName: data.first_name,
            lastName: data.last_name
        }
    }
}




