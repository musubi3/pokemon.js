export default function filter_data(data, fields) {
    if (fields.length == 0)
            return data;

        const filteredData = {};
        for (const field of fields) {
            if (data.hasOwnProperty(field)) {
                filteredData[field] = data[field];
            }
        }

        return filteredData;
}