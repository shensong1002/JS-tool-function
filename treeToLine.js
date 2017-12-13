/*
        
    树形结构扁平化
        
*/

var json = [
    {
        id: '1',
        name: '前端',
        children: [
            {
                id: '1-1',
                name: 'html基础',
                pid: '1'
            },
            {
                id: '1-2',
                name: 'css基础',
                pid: '1'
            },
            {
                id: '1-3',
                name: 'js基础',
                pid: '1',
                children: [
                    {
                        id: '1-3-1',
                        name: 'vue教程',
                        pid: '1-3'
                    },
                    {
                        id: '1-3-2',
                        name: 'react教程',
                        pid: '1-3'
                    }
                ]
            }

        ]
    },
    {
        id: '2',
        name: '后端',
        children: [
            {
                id: '2-1',
                name: 'php基础',
                pid: '2'
            }
        ]
    },
    {
        id: '3',
        name: '测试'
    }
]

function treeToLine(data) {
    return data.reduce((arr, { id, name, pid = '0', children = [] }) => {
        return arr.concat([{ id, name, pid }], treeToLine(children))
    }, [])
}

console.log(treeToLine(json))

/*var result = []
var len
function treeToLine(data) {
    len = result.length
    data.forEach(function (item, index) {
        result[len] = {}
        for (var k in item) {
            if (k !== 'children') {
                result[len][k] = item[k]
            } else {
                treeToLine(item[k])
                len--
            }
        }
        len++
    })
    return result
}

console.log(treeToLine(json))*/
