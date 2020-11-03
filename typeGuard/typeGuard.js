//类型守卫
function printEmployeeInformation(emp) {
    console.log("Name:" + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges:" + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date:" + emp.startDate);
    }
}
var dd = {
    name: "12",
    privileges: ["34", "56"]
};
printEmployeeInformation(dd);
//typeof 关键字
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number , got'" + padding + "'.");
}
