class Lib {
    static deepcopy(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    static encodeEmail(email) {
        return email ? email.split(".").join("*") : '';
    }
    static decodeEmail(email) {
        return email ? email.split("*").join(".") : '';
    }
}

export default Lib;
