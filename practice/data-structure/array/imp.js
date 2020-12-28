class element {
    constructor(value, index) {
        this.index = index;
        this.value = value;
    }
}
class _Array {
    constructor(size) {
        this.size = size;
    }
    //增加
    append(value) {
        const ele = new element(value);
    }
}
