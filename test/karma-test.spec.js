window.add = function (i) {
    return i+1
};
describe("A suite is just a function", function() {
    it("测试window.add", function() {
        expect(window.add(1)).toBe(2);
    });
});