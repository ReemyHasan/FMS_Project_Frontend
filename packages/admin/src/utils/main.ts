class utils {
  isEmptyValue(value: any) {
    return (
      typeof value === "undefined" ||
      typeof value === undefined ||
      value === null ||
      value === "" ||
      value.length === 0 ||
      value === "undefined" ||
      value === undefined
    );
  }

  /*check only Object*/
  isEmptyObject(obj: any) {
    for (let key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  cloneObject(obj: any) {
    if (!this.isEmptyObject(obj)) {
      return JSON.parse(JSON.stringify(obj));
    } else {
      return null;
    }
  }

  cloneArray(array: Array<any>) {
    if (!this.isEmptyValue(array)) {
      return JSON.parse(JSON.stringify(array));
    } else {
      return null;
    }
  }

  downloadFile = (linkSource: any, filename: any) => {
    const downloadLink = document.createElement("a");
    const fileName = `${filename}`;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    window.open(downloadLink.href);
    document.body.removeChild(downloadLink);
  };

  getCookieValue(key: string): string | null {
    var equalities = document.cookie.split("; ");
    for (var i = 0; i < equalities.length; i++) {
      if (!equalities[i]) {
        continue;
      }

      var splitted = equalities[i].split("=");
      if (splitted.length !== 2) {
        continue;
      }

      if (decodeURIComponent(splitted[0]) === key) {
        return decodeURIComponent(splitted[1] || "");
      }
    }

    return null;
  }

  isDecimal(input: any) {
    if (!this.isEmptyValue(input)) return input?.toString().includes(".");
    else return true;
  }
}

const MainUtils = new utils();
export default MainUtils;
