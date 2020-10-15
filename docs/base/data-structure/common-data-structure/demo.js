const list = [
    {id: '1', pid: '-1'},
    {id: '2', pid: '1'},
    {id: '7', pid: '4'},
    {id: '4', pid: '2'},
    {id: '3', pid: '1'},
    {id: '5', pid: '2'},
    {id: '6', pid: '3'},
];
const buildTree = (input, rootId) => {
    const nodes = {};

    input.forEach(({id, pid}) => {
        if (!nodes[pid]) nodes[pid] = [];
        if (!nodes[id]) nodes[id] = [];
        nodes[pid].push({id, children: nodes[id]});
    });

    const tree = {
        id: rootId,
        children: nodes[rootId],
    };

    return tree;
};

console.log(JSON.stringify(buildTree(list, '-1')));
