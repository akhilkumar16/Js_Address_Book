//uc1//
class AddressBook
{
    Name;
    address;
    city;
    state;
    zip;
    phone;
    email;
    constructor(Name,address, city, state, zip, phone, email) 
    {
        this.Name = Name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
    get Name() { return this._Name; }
    set(Name) 
    {
        this._firstName = firstName;
    }
    get address() { return this._address; }
    set(address) 
    {
        this._address = address;
    }
    get city() { return this._city; }
    set(city) 
    {
        this._city = city;
    }
    get state() { return this._state; }
    set(state) 
    {
        this._state = state;
    }
    get zip() { return this._zip; }
    set(zip) 
    {
        this._zip = zip;
    }
    get phone() { return this._phone; }
    set(phone) 
    {
        this._phone = phone;
    }
    get email() { return this._email; }
    set(email) 
    {
        this._email = email;
    }
    toString() 
    {
        return "\nName:" + this.Name + " ,Address:" + this.address + " ,City:" + this.city + " ,State:" + this.state + " Zip:" + this.zip + " ,Phone:" + this.phone + ",Email:" + this.email;
    }
}