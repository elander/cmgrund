type Item = {
    id: string
}


export const findItemIndexById = <Vadsomhelst extends Item > (
    items: Vadsomhelst[],
    id: string
) => {
    return items.findIndex((item: Vadsomhelst) => item.id === id)
};