document.cookie = "name=adam";
document.cookie = "test=test1";

const date = new Date ();

date.setTime(date.getTime())
document.cookie = `log=1; expires=˘${date.toUTCString()}`;

console.log(document.cookie);

