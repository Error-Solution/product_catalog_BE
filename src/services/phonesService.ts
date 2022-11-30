import phonesJson from '../data/phones.json'

export const allPhoneService = (query: qs.ParsedQs) => {
    console.log(query)
    const { page, limit } = query;

    if (!page || !limit) {
        return phonesJson;
    }

    let firstIndex = (+page - 1) * +limit;
    const secondIndex = +page * +limit;
    const quantityPage = Math.ceil(phonesJson.length / +limit);

    if (firstIndex > quantityPage) {
        firstIndex = (quantityPage - 1) * +limit;;
    }

    const paginatedList = phonesJson.slice(firstIndex, secondIndex);

    return paginatedList;
}