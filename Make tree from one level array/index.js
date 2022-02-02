/*{
    {
        name: 1,
        children : [
             {
                name: 1,
                children : [
                    {
                        name: 1,
                        children : []
                    }
                ]
            },
            {
                name: 1,
                children : []
            }
        ]
    },
    {
        name: 5,
        children : []
    }
}*/

const data = [
    {
        "depth": 0,
    },
    {
        "depth": 1,
    },
    {
        "depth": 2,
    },
    {
        "depth": 3,
    },
    {
        "depth": 4,
    },
    {
        "depth": 4,
    },
    {
        "depth": 3,
    },
    {
        "depth": 4,
    },
    {
        "depth": 3,
    },
    {
        "depth": 4,
    },
    {
        "depth": 5,
    },
    {
        "depth": 4,
    },
    {
        "depth": 3,
    },
    {
        "depth": 4,
    },
    {
        "depth": 2,
    },
    {
        "depth": 3,
    },
    {
        "depth": 4,
    },
    {
        "depth": 5,
    },
    {
        "depth": 4,
    },
    {
        "depth": 5,
    },
    {
        "depth": 3,
    },
    {
        "depth": 4,
    },
    {
        "depth": 3,
    },
    {
        "depth": 1,
    },
    {
        "depth": 1,
    }
]

const makeTree = (data) => {
    const makeNewLevel = (depth) => {
        return {
            "depth" : depth,
            "children" : []
        }
    }

    const getLastChildrenOfLevel = (obj, level) => {
        for (let i = 0; i < level; i++) {
            obj = Array.isArray(obj) ? obj[obj.length-1]["children"] : obj["children"];
        }
        return obj;
    }

    let result = {
        "depth" : 0,
        "children" : []
    };

    for (let i = 1; i < data.length; i++) {
        let children = getLastChildrenOfLevel(result, data[i]["depth"]);
        children.push(makeNewLevel(data[i]["depth"]));
    }
    return result;
}

console.log(makeTree(data));
