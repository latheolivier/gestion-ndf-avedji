
function getData(url) {
    return fetch(
        url, {
        method: "get",
    }
    )
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch((error) => {
            // return error

        });
};





function posttData(url, data) {
    return fetch(
        url, {
        method: "post",
        body: data
    }
    )
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch((error) => {
            return error

        });
};