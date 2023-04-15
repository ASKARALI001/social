
export const dyse = new Array(31).fill(null, 0, 31).map((item, idx) => idx + 1)
export const months = [
    {
        ru: 'январь',
        en: 'january'
    },
    {
        ru: 'Февраль',
        en: 'February'
    },{
        ru: 'Март',
        en: 'March'
    },
]
export const years = (max) => {
    let arr = []
    for (let i = max; i > max - 50 ; i--){
        arr = [...arr, i ]
    } return arr

}