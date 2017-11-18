import test from "tape-async";
import aiNode from ".";

test("exports a function", t => {
  t.is(typeof aiNode, "function");
});
