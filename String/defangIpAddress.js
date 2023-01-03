var defangIPaddr = function (address) {
    var defangIp = address.replace(/[...]/g, "[.]");
    return defangIp;
};



var ip = "1.1.1.1";
console.log(defangIPaddr(ip));