const axios = require('axios');
const api = 'https://randomuser.me/api/?results=10';
exports.sourceNodes = async ({
    actions,
    createNodeId,
    createContentDigest
}) => {
    const {
        createNode
    } = actions;
    const {data} = await axios.get(api);
    const {results} = data;
    results.forEach((user,index)=>createNode({
        ...user,
        id: createNodeId(`User-${index}`),
        internal:{
            type: 'User',
            content: JSON.stringify(user),
            contentDigest: createContentDigest(user)
        }
    }))
    return
}