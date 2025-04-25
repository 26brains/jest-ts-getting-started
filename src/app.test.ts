import {adder} from "./app";

describe("App", () => {
    it('should test adder', () => {
        expect(adder(1,1)).toEqual(2);
    })
})
