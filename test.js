import test from "tape-async";
import { fs } from ".";
import concat from "ai-concat";

const fixture = `${__dirname}/fixtures/test`;

test("exports a function", async t => {
  t.is(typeof fs.readFile, "function");
});

test("exports a function", async t => {
  t.is(await concat(fs.readFile(fixture)), "test line 1\nline 2\n");
});
