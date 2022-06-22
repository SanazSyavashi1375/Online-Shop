type user={
 address?: {
    geolocation?: {
        lat: number,
        long: number
    },
    city: string,
    street: string,
    number: number,
    zipcode: string
},
id: number,
email: string,
username: string,
password: string,
name: {
    firstname: string,
    lastname: string,
},
phone: string,
__v?: number
}
export default user;